import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  form: any; 
  constructor(
    private fromBuilder: FormBuilder,
    private router: Router,
    private authService: UserService,
  ) {}

  ngOnInit(): void {
    this.form = this.fromBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      bio: ['', Validators.required]
    });
  }

  register(): void {
    this.authService.registerUser()
      .subscribe((data:any) => {
        this.authService.setIsLogin(data.success);
        if (data.success) {
          this.router.navigateByUrl('/profile');
        }
      });
  }
}
