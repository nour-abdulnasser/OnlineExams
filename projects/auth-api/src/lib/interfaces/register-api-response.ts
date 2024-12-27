export interface RegisterApiResponse {
  message: string;
  code?: number;
  token?: string;
  user: ApiRegisterUser;
}

interface ApiRegisterUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  _id: string;
  createdAt: string;
}
