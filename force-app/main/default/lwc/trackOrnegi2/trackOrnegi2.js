import { LightningElement, track } from 'lwc';

export default class TrackOrnegi2 extends LightningElement {
    
    degerler = ""; //2- Girilen sayilari yerlestirecegimiz bos alan actik
    @track lstValues = []; //3- Girilen sayilari aktaracagimiz dizi actik. UNUTMA: Track'leri unutma.

    //4-onchangeHandler'i olusturalim
    onchangeHandler(elma){
        this.degerler = elma.target.value;
    }

    //5-ekleHandler, sayi girilip, butona tiklaninca, listeye girilen sayiyi push edecek
    ekleHandler(){ //parantez icine event'te yazilabilir.
        this.lstValues.push(this.degerler);
    }
}