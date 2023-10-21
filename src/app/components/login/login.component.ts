import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private modalService: BsModalService,
  ) { }
  model: ILogin = { userName: "admin", password: 1234 }

  loginForm?: FormGroup<any>;
  message?: string;
  returnUrl?: string;

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    this._authService.logout();
  }

  get f() {
    return this.loginForm?.controls;
  }


  openModal(template: TemplateRef<any>) {
    this.close_modal();

    setTimeout(() => {
      this.modalRef = this.modalService.show(template);
    }, 200);
  }


  close_modal() {
    this.modalService.hide();
  }

  login() {
    if (this.loginForm?.invalid) {
      return;
    } else {
      const userNameControl = this.loginForm?.get('userName');
      const passwordControl = this.loginForm?.get('password');

      if (
        userNameControl?.value === this.model.userName &&
        passwordControl?.value === this.model.password
      ) {
        // this._toastr.success("Login successful");
         console.log("Login successful");

        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', userNameControl?.value);
        this._router.navigate([this.returnUrl]);
      } else {
        // this._toastr.error("Please check credentials.")

         this.message = "Please check your Username and password";
      }
    }
  }
}
