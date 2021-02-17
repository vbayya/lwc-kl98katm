import { LightningElement, track } from 'lwc';

export default class ComboboxBasic extends LightningElement {
@track selectedFrequency = 'Monthly';
@track scheduleEvery;

get options() {
    return [
             { label: 'Daily', value: 'Daily' },
             { label: 'Weekly', value: 'Weekly' },
             { label: 'Monthly', value: 'Monthly' },
             { label: 'Yearly', value: 'Yearly' },
           ];
}

handleChangeFrequency(event) {
        this.selectedFrequency = event.detail.value;
     }

handleChangescheduleEvery(event) {
        this.scheduleEvery = event.detail.value;
     }

}
