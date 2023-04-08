import { LightningElement } from 'lwc';

export default class Toplama extends LightningElement {
    num1 = '';
    num2 = '';

    get toplam(){
        //return `${this.num1} + ${this.num2}`; //concatinate yapar. 5 + 7 seklinde verir
        //return parseInt(this.num1) + parseInt(this.num2); bu calisir
        return `${parseInt(this.num1) + parseInt(this.num2)}`;
    }

    handleNum1(event){
        this.num1 = event.target.value;
    }
    handleNum2(event){
        this.num2 = event.target.value;
    }

}