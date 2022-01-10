import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    firstNumber;
    secondNumber;
    isResult = false;
    resultValue;

    handleChange(event){
        const {name,value} = event.target;
        if(name === 'FirstNumber'){
            this.firstNumber = value;
        } else if(name === 'SecondNumber'){
            this.secondNumber = value;
        }

    }

    doSum(){
        this.isResult = true;
        this.resultValue = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }

    doSub(){
        this.isResult = true;
        this.resultValue = parseInt(this.firstNumber) - parseInt(this.secondNumber);
    }

    doMulti(){
        this.isResult = true;
        this.resultValue = parseInt(this.firstNumber) * parseInt(this.secondNumber);
    }

    doDiv(){
        this.isResult = true;
        this.resultValue = parseInt(this.firstNumber) / parseInt(this.secondNumber);
    }

}