import { LightningElement } from 'lwc';

export default class ButtonBasic extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }

    handleClick1(){
        alert('Child butona tiklandi'); //window.alert(''); seklinde de yazilabilirdi
    }
    handleClick2(){
        alert('Handle 2 fonksiyonu calisti');
    }

    renderedCallback(){
        this.template.querySelector("c-event-child1").addEventListener("click", this.handleClick2);
    }
}
