import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Products } from 'src/app/models/products';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  modalRef?: BsModalRef;

  @Input() productName?: string;
  @Input() productRate?: string;
  @ViewChild('login', { static: false }) login!: TemplateRef<any>;
  @ViewChild('view', { static: false }) view!: TemplateRef<any>;

  constructor(
    public _authService: AuthService,
    private _modalService: BsModalService,
  ) {
    this.isUserLoggedIn = _authService.isAuthenticated();
  }

  ngOnInit(): void {
  }

  handleViewProductClick() {
    if (!this.isUserLoggedIn) {
      this.openModal(this.login);
    } else {
      // Handle product viewing logic (e.g., navigating to the product page)
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

  viewProduct(template?: TemplateRef<any>) {
    if (this.isUserLoggedIn) {
      this.openModal(this.view);
      return;
    }

    console.error('You have to be logged in to view different profile');
    setTimeout(() => { this.modalRef = this._modalService.show(template!); }, 900);

  }
}
