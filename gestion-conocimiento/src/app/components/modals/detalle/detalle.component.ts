import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgClass, NgFor, NgIf, DatePipe } from '@angular/common';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone: true,
  imports: [ NgFor, NgIf, NgClass ]
})
export class DetalleComponent implements OnInit {
  documentoResponse: any;
  documento: any;
  listaAutores: any[] = [];
  listaDirigido: any[] = [];
  listaProyectos: any[] = [];
  listaDocumentos: any[] = [];
  htd_relacionado: any;
  referencia: any;
  doc_fecha: any;
  public onClose: Subject<any> = new Subject();

  constructor(
    public bsModalRef: BsModalRef,
    public datepipe: DatePipe,
    private serviceGeneral: GeneralService,
    ) { }

  ngOnInit() {
    this.documento = this.documentoResponse.documento[0];
    if(this.documento.Htd_relacionado == "") this.htd_relacionado = "Ninguno";
    if(this.documento.Referencia == "") this.referencia = "Ninguno";
    this.doc_fecha = this.datepipe.transform(this.documento.Doc_fecha, 'EEEE, MMMM d, y' );
    this.listaAutores = this.documentoResponse.autores;
    this.listaDirigido = this.documentoResponse.dirigido_a;
    this.listaProyectos = this.documentoResponse.usu_proyectos;
    this.listaDocumentos = this.documentoResponse.documentos_adj;
  }

  openFile(): void {
    this.serviceGeneral.getFile('../../../assets/dummy/prueba.pdf')
      .then(response => response.blob())
      .then(pdf => {
        window.open(URL.createObjectURL(pdf), '_blank');
      })
      .catch(err => {
        console.log(err);
      });
  }
}

