import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsCard } from '../models/details-card.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsCardService {

  baseUrl =  'https://localhost:7108/api/cards';

  constructor(private http: HttpClient) { }

  //Get All Cards
  getAllCards() : Observable<DetailsCard[]> {
    return this.http.get<DetailsCard[]>(this.baseUrl)
  }

  //Insert Cards
  addCard(card : DetailsCard) : Observable<DetailsCard> {
    card.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<DetailsCard>(this.baseUrl, card);
  }

  //Delete Cards
  deleteCard(id : string) : Observable<DetailsCard> {
    return this.http.delete<DetailsCard>(this.baseUrl + '/' + id);
  }

  //Update Cards
  updateCard(card : DetailsCard) : Observable<DetailsCard>{
    return this.http.put<DetailsCard>(this.baseUrl + '/' + card.id, card);
  }
}
