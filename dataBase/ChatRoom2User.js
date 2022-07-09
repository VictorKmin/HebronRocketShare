const { Schema, model } = require('mongoose');

const ChatRoom2User = new Schema({
  user: { type: Schema.Types.ObjectId, trim: true, required: true, ref: 'User' },
  chat: { type: Schema.Types.ObjectId, trim: true, required: true, ref: 'Chat_Room' }
}, { timestamps: true });

module.exports = model('Chat_Room_2_User', ChatRoom2User);
