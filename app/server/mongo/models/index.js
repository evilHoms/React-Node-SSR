import UserSchema from '../schemas/UserSchema';
import mongoose from 'mongoose';

const User = mongoose.model('User', UserSchema);

export {
  User
};
