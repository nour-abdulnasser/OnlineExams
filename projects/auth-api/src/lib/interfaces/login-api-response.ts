export interface LoginApiResponse {
  message: string;
  token: string;
  user: ApiLoginUser;
}

interface ApiLoginUser {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  passwordChangedAt: string;
}
