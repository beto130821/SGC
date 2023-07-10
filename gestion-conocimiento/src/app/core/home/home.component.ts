import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';

@Component({
  selector: 'gc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  listaPublicaciones: any [] = [];

  constructor(
    private serviceGeneral: GeneralService,
  ) { }

  ngOnInit() { 
    this.serviceGeneral.listarUltimosDocumentosWEB().subscribe(
      (data: any) => {
        if(data.success == true){
          debugger
          this.listaPublicaciones = data.result.ultimasPublicaciones;
        }
      },
      (error: HttpErrorResponse) => {
      }
    );
  }
}
