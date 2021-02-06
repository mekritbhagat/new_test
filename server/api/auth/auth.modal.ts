import * as mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  roles: String,
});

const Auth = mongoose.model('Auth', authSchema);
export default Auth;

// enum UserRole {
//     ADMIN = "admin",
//     CUST = "customer",
//     USER = "user"
// }


// export type UserRoleType = ["admin", "visitor", "clients"];
// const roleType = [ UserRole ];
// const authType = [];