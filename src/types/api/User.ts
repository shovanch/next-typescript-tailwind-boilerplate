// export interface User {
//   first_name?: string;
//   last_name?: string;
//   email: string;
//   type: string;
//   created_at: Date;
// }

// export interface UserResponse {
//   data: User;
// }

export type User = {
  first_name?: string;
  last_name?: string;
  email: string;
  type: string;
  created_at: Date;
};

export type UserResponse = {
  data: User;
};
