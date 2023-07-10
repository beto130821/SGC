import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AutorizacionService {
  
    constructor(readonly http: HttpClient) { }

    public getToken(): string {
        
        return "";
    }
    public isAuthenticated(): boolean {
        
        //const token = this.getToken();
        return true;
    }

    public errorHandl(error: any): Observable<never> {
        //var _this = this;
        
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } 
        else {
            errorMessage = `Error: ${error.status}\nMensaje: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(error);
    }

}