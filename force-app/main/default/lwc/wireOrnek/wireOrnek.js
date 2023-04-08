import { LightningElement, wire } from 'lwc'; //1-wire ekleyelim
import getAccounts from '@salesforce/apex/AccountController.getAccounts'; //2-AccountController adinda bir class ve getAccounts adinda bir method olusturmaliyim

export default class WireOrnek extends LightningElement {
    filterWord = ""; //3-
    @wire(getAccounts, {filter: '$filterWord'}) accounts; 
    //4- wire yapisi = method, methodun icinde yapilacak filtreleme, sonucu icine alacak variable
    //4-1- filter kelimesi Apex method'unun parametre adi olmalidir
    //4-2- filterWord'un basina dinamik hale getirmek icin $ isareti konulur.
    //5-class'imizi VsCode uzerinden olusturalim.

    handleInput(event) { //10
        this.filterWord = event.target.value;
    }
}