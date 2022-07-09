const { Schema, model } = require('mongoose');

const ChatRoom = new Schema({
  name: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, trim: true, required: true, ref: 'User' }
}, { timestamps: true });

module.exports = model('Chat_Room', ChatRoom);
