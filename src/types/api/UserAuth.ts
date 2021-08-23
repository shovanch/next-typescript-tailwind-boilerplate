export interface UserAuthCreate {
  /**
   * Must be a valid email address. Must not be greater than 255 characters.
   */
  email: string;
  /**
   * Must be at least 10 characters. Must not be greater than 64 characters.
   */
  password: string;
  income_range_id: number;
}

export interface UserLogin {
  email: string;
  password: string;
}
