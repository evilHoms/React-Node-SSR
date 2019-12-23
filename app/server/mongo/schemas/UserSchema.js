import mongoose from 'mongoose';
import logger from '../../logger';

const UserSchema = new mongoose.Schema({
  name: String
});

UserSchema.methods.sayName = function() {
  logger.log({
    level: 'info',
    message: this.name ? 'My name is' + this.name : 'No name'
  });
};

export default UserSchema;
