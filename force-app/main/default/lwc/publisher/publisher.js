import { LightningElement, wire } from 'lwc';
//2-import'lari yapalim
import {CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';      // publisher tarafinda kullanilacak
//3-pulisher'i pubsub.js'e baglamis olduk 

export default class Publisher extends LightningElement {
    //4-sayfadaki iki component'i birbirine baglamak icin wire kullaniriz
    @wire(CurrentPageReference) pageRef; //pageRef variable ismidir.
    
    //5- handleChange'i olusturalim
            //pageRef, eventName, payload

    handleChange(event){ //fire ve listener fonksiyon icinde cagirilir
        fireEvent(
            this.pageRef,"publisher",event.target.value
            //6- girilen data'yi publisher ismiyle yayimladik
        )
    }
}