const { Schema, model } = require('mongoose');

const { userRolesEnum } = require('../constants');
const authService = require('../services/auth.service');

const User = new Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, lowercase: true, unique: true, required: true },
  age: { type: Number, default: 18 },
  role: { type: String, enum: Object.values(userRolesEnum), default: userRolesEnum.USER },
  password: { type: String, required: true, default: null, select: false }
},
{
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: _userTransformer
  },
  toObject: {
    virtuals: true,
    transform: _userTransformer
  }
});

User.virtual('fullName').get(function() {
  return this.name.toUpperCase()
});

User.virtual('chats', {
  ref: 'Chat_Room_2_User',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

User.pre('findOne', function() {
  this.populate('chats');
})

User.statics = { // for schema // THIS - SCHEMA
  async saveUserWithHashPassword(userToSave) {
    const hashPassword = await authService.hashPassword(userToSave.password);

    return this.create({ ...userToSave, password: hashPassword });
  }
}

User.methods = { // for record // THIS - DOCUMENT
  async checkIsPasswordsSame(password) {
    await authService.comparePasswords(this.password, password);
  },

  toRepresentation() {
    const user = this.toObject();
    delete user.password;

    return user;
  }
}

module.exports = model('User', User);


function _userTransformer(doc, ret) {
  delete ret.password;

  return ret;
}
