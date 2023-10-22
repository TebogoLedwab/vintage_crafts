import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modalRef?: BsModalRef;
  user: any;
  dropNav: any;

  constructor(
    private _modalService: BsModalService,
    public _authService: AuthService,
    private _router: Router,
  ) { }

  home() {
    if (this._authService.isAuthenticated()) {
      // If the user is authenticated, navigate to the homepage
      this._router.navigate(['/home']);
  }
}

  openModal(template: TemplateRef<any>) {
    this.close_modal();

    setTimeout(() => {
      this.modalRef = this._modalService.show(template);
    }, 200);
  }

  close_modal() {
    this._modalService.hide();
  }

  logout() {
    this._authService.logout();
  }

  ngOnInit(): void {
  }

}
