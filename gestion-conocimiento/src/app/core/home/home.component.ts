import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SugerenciasComponent } from 'src/app/components/modals/sugerencias/sugerencias.component';
import { DetalleComponent } from 'src/app/components/modals/detalle/detalle.component';

@Component({
  selector: 'gc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  bsModalRef: BsModalRef;
  listaPublicaciones: any[] = [];

  constructor(
    private serviceGeneral: GeneralService,
    private modalService: BsModalService,
  ) {
    this.bsModalRef = new BsModalRef();
  }

  ngOnInit() {
    this.serviceGeneral.listarUltimosDocumentosWEB().subscribe(
      (data: any) => {
        if (data.success == true) {
          this.listaPublicaciones = data.result.ultimasPublicaciones;
        }
      },
      (error: HttpErrorResponse) => {
      }
    );
  }

  enviarSugerencia = () => {
    debugger
    this.bsModalRef = this.modalService.show(SugerenciasComponent, {backdrop : 'static'});
    (<SugerenciasComponent>this.bsModalRef.content).onClose.subscribe(result => {
      if (result) {
        
      }
      this.bsModalRef.hide();
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  consultarDetalle = (doc_codigo : string) => {
    this.serviceGeneral.consultarDetalle(doc_codigo).subscribe(
      (data: any) => {
        if (data.success == true) {
          console.log(data.result)
          const initialState = {
            documentoResponse: data.result
            };

          this.bsModalRef = this.modalService.show(DetalleComponent, {initialState, class: 'modal-xl', backdrop : 'static'});
          (<DetalleComponent>this.bsModalRef.content).onClose.subscribe(result => {
            if (result) {

            }
            this.bsModalRef.hide();
          });
        }
      },
      (error: HttpErrorResponse) => {
      }
    );
  }
}
