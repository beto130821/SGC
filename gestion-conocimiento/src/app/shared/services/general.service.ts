import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { rutaPrincipal } from 'src/app/constants/rutas';
import { AutorizacionService } from '../services/autorizacion.service';
import { environment } from 'src/environments/environments';

@Injectable()
export class GeneralService {
    urlWebApiPostman: string;

    constructor(
        private http: HttpClient,
        private autorizacionService: AutorizacionService,
    ) {
        this.urlWebApiPostman = "";
    }

    listarMenuNavegacion(): Observable<any> {
        const headers: any = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.get<any>(environment.serverUrlApi + rutaPrincipal.listarMenuNavegacion,
            { headers })
            .pipe(
                retry(1),
                catchError(this.autorizacionService.errorHandl)
            );
    }

    listarUltimosDocumentosWEB(): Observable<any> {
        const headers: any = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.get<any>(environment.serverUrlApi + rutaPrincipal.listarUltimosDocumentosWEB,
            { headers })
            .pipe(
                retry(1),
                catchError(this.autorizacionService.errorHandl)
            );
    }
}
