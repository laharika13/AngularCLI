import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  const mockData =  {
    "name":"King JI Julien",
    "email":"kingj@email.com",
    "bio":"Hi my name is King Julien and I like to move it move it.",
    "img":"https://tinyurl.com/2p9953zy"
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProfileApi() should return data', () => {
    service.getProfile().subscribe((res) => {
      expect(res).toEqual(mockData);
    });

    const req = httpMock.expectOne('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('registerApi() should return success data', () => {
    const mockRegistraionData = {success: true}
    service.registerUser().subscribe((res) => {
      expect(res).toEqual(mockRegistraionData);
    });

    const req = httpMock.expectOne('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d');
    expect(req.request.method).toBe('GET');
    req.flush(mockRegistraionData);
  });
});
