import { LightningElement, wire } from 'lwc';
import MAINLMC from "@salesforce/messageChannel/MainMessageChannel__c"
import {subscribe, MessageContext, APPLICATION_SCOPE} from 'lightning/messageService';

export default class Reservations extends LightningElement {
    recievedMessage
    subscription
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
        //subscribe(messageContext, messageChannel, listener, subscriberOptions)
        this.subscription= subscribe(this.context, MAINLMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.recievedMessage = message.lmsData.value? message.lmsData.value :'NO Message published'
    }
}