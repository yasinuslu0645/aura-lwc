import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    //1- Bunu elle degilde checkbox ile de yapabilirdik
    flag = false;
    display = false; //A- oncelikli deger kabul edilmedi olsun.

    //C- handleChange fonksiyonunu olusturalim
    handleChange(event){
        this.display = event.target.checked; //checkbox'larda value yerine checked kullanilir. deploy
    }
}