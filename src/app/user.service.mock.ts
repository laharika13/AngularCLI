import { of } from 'rxjs';

export class UserServiceMock {

  getProfile() {
    return of({
        "name":"King Julien",
        "email":"kingj@email.com",
        "bio":"Hi my name is King Julien and I like to move it move it.",
        "img":"https://tinyurl.com/2p9953zy"
    });
  }

  setIsLogin(flag: boolean) {
    return of(flag);
  }

  getIsLogin() {
    return of(true);
  }

  registerUser() {
    return of({
      success: true
    });
  }
}