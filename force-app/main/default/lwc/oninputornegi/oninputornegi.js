import { LightningElement } from 'lwc';

export default class OninputOrnegi extends LightningElement {

    //1-degisken olustur
    isim = "Veli";

    //3-fonksiyonu tanimlayalim
    handleInput(event) {
        this.isim = event.target.value;
        console.log("Degisiklik var");
    }

}