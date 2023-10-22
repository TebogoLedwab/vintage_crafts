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
  loginForm: FormGroup;
  modalRef?: BsModalRef;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _modalService: BsModalService,
  ) {
    this.loginForm = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.close_modal();

    setTimeout(() => {
      this.modalRef = this._modalService.show(template);
    }, 200);
  }

  close_modal() {
    this._modalService.hide();
  }

  login() {
    if (this.loginForm?.valid) {
      const user: ILogin = this.loginForm.value as ILogin;

      console.log('Logging in with user:', user);

      // After successful login, close modal and store user information in local storage
      this._modalService.hide();
      localStorage.setItem('currentUser', JSON.stringify(user));

      // Redirect to the dashboard
      this._router.navigate(['/dash']);
    }
  }
}
