import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { UserServiceMock } from '../user.service.mock';

import { ProfilePageComponent } from './profile-page.component';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: UserService, useClass: UserServiceMock }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getProfileApi() of UserService on component Init', () => {
    const spy = spyOn(service, 'getProfile').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should have profile data on getProfileApi() called in component Init', async () => {
    const spy = spyOn(service, 'getProfile').and.callThrough();
    component.ngOnInit();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toEqual('Profile');
    expect(component.profile.name).toEqual('King Julien');
    expect(compiled.querySelector('.user-name')?.textContent).toEqual('King Julien');
    expect(component.profile.email).toEqual('kingj@email.com');
    expect(compiled.querySelector('.user-email')?.textContent).toEqual('kingj@email.com');
    expect(component.profile.bio).toEqual('Hi my name is King Julien and I like to move it move it.');
    expect(compiled.querySelector('.user-bio')?.textContent).toEqual('Hi my name is King Julien and I like to move it move it.');
    expect(component.profile.img).toEqual('https://tinyurl.com/2p9953zy');
  });
});
