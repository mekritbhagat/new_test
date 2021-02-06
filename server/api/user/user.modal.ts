import * as mongoose from 'mongoose';
// import * as bcrypt from "bcrypt";
import { UserRole, UserRoleType } from './user.interface';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  },
  password: { type: String, required: true },
  userImage: { type: String },
  phone: { type: Number, required: true },
  roles: { type: Array, default: 'ADMIN'}, //UserRole,
  reset_password_token: {
    type: String
  },
  reset_password_expires: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// userSchema.virtual('fullName').get(function () {
//   return `${this.firstname} ${this.lastname}`;
// });

// export const hashPassword = () => {
//   this.password = bcrypt.hashSync(this.password, 8);
// }

// export const checkIfUnencryptedPasswordIsValid = (unencryptedPassword: string) => {
//   return bcrypt.compareSync(unencryptedPassword, this.password);
// }


const User = mongoose.model('User', userSchema);
export default User;