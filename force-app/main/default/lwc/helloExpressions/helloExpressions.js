import { LightningElement } from 'lwc';

export default class HelloExpressions extends LightningElement {
    firstName;
    lastName;

    handleNameChange(event){
        const {name,value} = event.target;
        if(name==='FirstName'){
            this.firstName=value.toUpperCase();
        }
        else if(name === 'LastName'){
            this.lastName=value.toUpperCase();
        }
    }
}