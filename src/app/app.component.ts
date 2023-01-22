import { Component, OnInit } from '@angular/core';
import { DetailsCard } from './models/details-card.model';
import { DetailsCardService } from './service/details-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'details-card';
  cards : DetailsCard[] = [];
  card : DetailsCard = {
    id : '',
    cardholderName : '',
    cardNumber : '',
    cvc : '',
    expiryMonth : '',
    expiryYear : ''
  }

  constructor (private detailsCardService : DetailsCardService) {

  }
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.detailsCardService.getAllCards()
    .subscribe(
      response => {
        this.cards = response;
      }
    );
  }

  onSubmit() {
    if (this.card.id === '') {
      this.detailsCardService.addCard(this.card)
      .subscribe(
        response => {
          this.getAllCards();
          this.card = {
            id : '',
            cardholderName : '',
            cardNumber : '',
            cvc : '',
            expiryMonth : '',
            expiryYear : ''
          }
        }    
      );
    } else {
      this.updateCard(this.card);
    }  
  }

  deleteCard(id : string) {
    this.detailsCardService.deleteCard(id)
    .subscribe(
      response => {
        this.getAllCards();
      }
    );
  }

  populateForm(card : DetailsCard) {
    this.card = card;
  }

  updateCard(card : DetailsCard) {
    this.detailsCardService.updateCard(card)
    .subscribe(
      response => {
        this.getAllCards();
      }
    );
  }
}
