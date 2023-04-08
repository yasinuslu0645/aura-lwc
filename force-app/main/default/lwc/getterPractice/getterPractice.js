import { LightningElement } from 'lwc';

export default class GetterPractice extends LightningElement {
    //1
    num1 = 10;
    num2 = 5;
    result = this.num1 + this.num2; //bu sekilde de olabilirdi ama getter kullanalim
    isimListesi = ['Ali', 'Veli', 'Fatma', 'Sibel']
    index = 0;

    get toplama(){  //get methot'ta return vardir
        return this.num1 + this.num2;
    }
    get cikarma(){  //get methot'ta return vardir
        return this.num1 - this.num2;
    }
    get carpma(){  //get methot'ta return vardir
        return this.num1 * this.num2;
    }
    get bolme(){  //get methot'ta return vardir
        return this.num1 / this.num2;
    }
    get ilkIsim(){
        return this.isimListesi[0];
    }
    get sonIsim(){
        return this.isimListesi[this.isimListesi.length-1];
    }
    handleBlur(event){
        this.index = event.target.value;

    }
    get girilenIndex(){
        if(this.index>=0 && this.index<this.isimListesi.length){
            return this.isimListesi[this.index];

        }else{
            alert("Lutfen 0-4 arasi numara giriniz");

        }
    }
}