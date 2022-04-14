import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

import { UserGuard } from './user.guard';
import { UserService } from './user.service';
import { UserServiceMock } from './user.service.mock';

describe('UserGuard', () => {
  let guard: UserGuard;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([
        { path: 'register', pathMatch: 'full', component: RegistrationPageComponent }
      ])],
      providers: [{ provide: UserService, useClass: UserServiceMock }],
    });
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  beforeEach(() => {
    guard = TestBed.inject(UserGuard);
    userService = TestBed.inject(UserService);
  });

  it('be able to hit route when user is logged in', () => {
      spyOn(userService, 'getIsLogin').and.returnValue(true);
      expect(guard.canActivate()).toBe(true);
  });

  it('not be able to hit route when user is not logged in', () => {
    spyOn(userService, 'getIsLogin').and.returnValue(false);
    expect(guard.canActivate()).toBe(false);
  });
});
