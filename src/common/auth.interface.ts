export interface ILogin {
  email: string;
  password: string;
}
export interface IResponseLogin {
  userId: number;
  email: string;
  accessToken: string;
  refreshToken: string;
  wbToken?: string;
}
