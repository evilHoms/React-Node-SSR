import mongoose from 'mongoose';
import { log } from 'Logger';

const UserSchema = new mongoose.Schema({
  name: String
});

UserSchema.methods.sayName = function() {
  log(this.name ? 'My name is' + this.name : 'No name');
};

export default UserSchema;
