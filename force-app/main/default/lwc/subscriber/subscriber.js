import { LightningElement, wire } from 'lwc';
//8-oncelikle 2 tane import yapmamiz gerekir
import {CurrentPageReference} from 'lightning/navigation'
import { registerListener } from 'c/pubsub'; //pubsub'a bagladik

export default class Subscriber extends LightningElement {
    ismiGoster; //9-ismiGoster degiskenini ve wire'i olusturduk.

    @wire(CurrentPageReference) pageRef; //publisher'a bagladik

    //10- 3 tane parametreyi yazalim
            
    connectedCallback(){ //handleChange'in karsiligidir ve hazir bir fonksiyondur
        registerListener(
            //11- callback destek fonksiyonudur. Ayri tanimlanir
            //13- showDetails callback fonksiyonunu olustunca buraya geldik
            //eventName, callback, thisArg
            "publisher", this.showDetails,this
        )
    }
    //12
    showDetails(data){ //callback function
        this.ismiGoster = data;
    }
}