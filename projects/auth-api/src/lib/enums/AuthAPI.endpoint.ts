// can be done with enums but preferred to use static 
export class AuthEndpoint {
  //TODO: Deal with base url
  static REGISTER = 'auth/signup';
  static LOGIN = 'auth/signin';
  static VERIFY_CODE =
    'auth/verifyResetCode';
  static USER_INFO = 'auth/profileData';
  static CHANGE_PASSWORD =
    'auth/changePassword';
  static RESET_PASSWORD =
    'auth/resetPassword';
  static FORGOT_PASSWORD =
    'auth/forgotPassword';
  static DELETE_ACCOUNT = 'auth/deleteMe';
  static EDIT_PROFILE = 'auth/editProfile';
  static LOGOUT = 'auth/logout';
}
 