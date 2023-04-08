import { LightningElement } from 'lwc';

export default class Child1 extends LightningElement {

    //2
    handleClick(){
        const myEvent = new CustomEvent('clicked');
        this.dispatchEvent(myEvent); //dispatchEvent, olusturdugumuz custom event'i parentta 
        //gorunur ve kullanilabilir yapar
    }
}