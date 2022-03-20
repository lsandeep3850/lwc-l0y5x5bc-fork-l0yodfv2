import { LightningElement } from 'lwc';

export default class TrackExample extends LightningElement {
    firstName = '';
    lastName = '';

    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }
    areDetailsVisible = false;

    handleChange1(event) {
        this.areDetailsVisible = event.target.checked;
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    }
}