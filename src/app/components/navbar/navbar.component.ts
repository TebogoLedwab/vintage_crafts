import { Component, OnInit } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // modalRef: BsModalRef;
  user: any;
  dropNav: any;

  constructor(
    // protected _modalService: BsModalService
  ) {

  }

  ngOnInit(): void {
  }

}
