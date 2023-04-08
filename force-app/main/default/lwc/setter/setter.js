import { LightningElement } from 'lwc';

export default class Setter extends LightningElement {
    
    name = "Cat";
    age = 2; //yeni yas girildiginde bu variable'a atanacak
    newAge = 0;
    //c
    parentAge = 24;

    customerDetail = {
        name : 'Tim',
        age : 30
    }

    updateAge(event) {
        this.newAge = event.target.value; //input'tan girilen yas hemen age'e atanmayacak. Butona tiklaninca atanacak
    }
    updateOriginalAge() {
        this.age1 = this.newAge;
    }

    //---------------------------------
    //1-get kullanalim.
    get age1() {
        return parseInt(this.age) + 1;
    }
    set age1(value) { 
        if(value<0){ //negatif yas girilme ihtimaline karsi
            alert('Gecerli bir sayi giriniz');
            console.error('Gecersiz yas girildi');
        }else{
            this.age = value;
        }
    }
}