import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';



@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewProductComponent {


  @Input() productName?: string;
  @Input() productRate?: string;

  ratings = ["loved it", "it was okay", "meh", "nah, thanks", "never again"];
  productCards = [
    {
      name: 'Papers & Ribbons',
      rate: 'Loved it'
    },
    {
      name: 'Card materials',
      rate: 'Loved it'
    },
    {
      name: 'Punches and dies',
      rate: 'Loved it'
    },
    {
      name: 'Card kits',
      rate: 'Loved it'
    }
  ]
  modalRef?: BsModalRef;

  selectedRating: string = '';

  tooltipVisible = false;
  tooltipText: string = 'Loved it.';

  constructor(
    private _modalService: BsModalService,

  ) { }

  showTooltip(rating: string) {
    this.tooltipText = rating;
    this.tooltipVisible = true;
  }

  hideTooltip() {
    this.tooltipVisible = false;
  }

  openModal(template: TemplateRef<any>) {
    this.closeModal();

    setTimeout(() => {
      this.modalRef = this._modalService.show(template);
    }, 200);
  }

  closeModal() {
    this._modalService.hide();
  }

}
