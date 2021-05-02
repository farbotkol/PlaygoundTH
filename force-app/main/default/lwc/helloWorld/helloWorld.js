import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    
    fname = 'Luke'
    lname = 'Farbotko1';


    lnameChangeHandler(event) {
      this.lname  = event.target.value;
    }
}