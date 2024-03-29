import { LightningElement } from 'lwc';

export default class CheckboxGroupBasic extends LightningElement {
    value = ['option1'];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(e) {
        this.value = e.detail.value;
    }

    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }

    
}
