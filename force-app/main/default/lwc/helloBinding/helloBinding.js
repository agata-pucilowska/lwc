import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    greeting;

    handleNameChange(event){
        this.greeting = event.target.value;
    }
}