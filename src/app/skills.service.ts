import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private http: HttpClient) { }

  

  public editClique(skills:any){
    //console.log(skills);
    return this.http.put(`${this.SERVER_URL + 'skills'}/${skills.id}`, skills);
}

}