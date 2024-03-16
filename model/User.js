import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  id: { type: String },
  username: { type: String },
  avatar: { type: String },
  email: { type: String },
  password: { type: String },
});

export const User = models?.User || model('User', UserSchema);
