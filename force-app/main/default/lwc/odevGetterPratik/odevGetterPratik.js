import { LightningElement } from 'lwc';

export default class OdevGetterPratik extends LightningElement {
    is = '';
    si = '';
    bo = ' ';


    get conc(){
        return this.is.toUpperCase() + this.bo + this.si.toUpperCase()
    }

    handleIsim(event){
        this.is = event.target.value
    }
    handleSoyisim(elma){
        this.si = elma.target.value
    }


}