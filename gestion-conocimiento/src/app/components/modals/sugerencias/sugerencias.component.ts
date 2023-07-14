import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-sugerencia',
  templateUrl: './sugerencias.component.html'
})
export class SugerenciasComponent implements OnInit {
  public onClose: Subject<any> = new Subject();
  constructor(
    public bsModalRef: BsModalRef,
    ) { }

  ngOnInit() {
  }

  btnConfirmar = () => {
    this.onClose.next(true);
  } 
}

