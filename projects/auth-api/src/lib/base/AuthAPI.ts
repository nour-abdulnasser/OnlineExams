import { Observable } from 'rxjs';

/**
 * For main methods: Login, Register, Forgot password, etc
 */
export abstract class AuthAPI {
    /**
     * Method login
     * @param data {user sends in data and an observable is returned}
     */
  abstract login(data: any): Observable<any>;
  abstract register(data: any): Observable<any>;
}
  