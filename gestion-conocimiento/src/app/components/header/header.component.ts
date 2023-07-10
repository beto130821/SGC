import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'gc-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [ NgFor, NgIf, NgClass ]
})

export class HeaderComponent implements OnInit {

  listaPadres: any [] = [];
  listaHijos: any [] = [];
  listaMenuCompleto: any [] = [];

  constructor(
    private serviceGeneral: GeneralService,
  ) { }

  ngOnInit() {

    this.serviceGeneral.listarMenuNavegacion().subscribe(
      (data: any) => {
        if(data.success == true){
          this.listaPadres = data.result.padres;
          this.listaHijos = data.result.hijos;

          for (let i = 0; i < this.listaPadres.length; i++) {
            for (let j = 0; j < this.listaHijos.length; j++) {
              if(this.listaPadres[i].doc_codigo === this.listaHijos[j].doc_codigo_padre){
                this.listaPadres[i].esPadre = 1;
              }
            }
          }
        }
      },
      (error: HttpErrorResponse) => {
      }
    );

   }
}
