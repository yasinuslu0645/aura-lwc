import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {
    inputValue;

    handleChange2(event) {
        this.inputValue = event.detail.value; //input child'da oldugu ve parentta yazdiralacagi icin target degil, detail yaziyoruz
    }

    handleClick2() {
        const myEvent2 = new CustomEvent('clicked2',{detail:this.inputValue}); //yeni bilgi: CustomEvent cift parametre alacak
        this.dispatchEvent(myEvent2);
        //detail, input degerine gore degisir ve input'a girilen degeri tiklanma aninda parent'a tasir
        //default olarak null'dir.
    }
}