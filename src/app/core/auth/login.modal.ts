 export interface Roles {
     reader?: boolean;
     editor?: boolean;
     admin?: boolean;
 }


 export interface User {
     uid: string;
     email: string;
     roles: Roles;
 }