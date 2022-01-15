import { LightningElement, api, wire } from 'lwc';
import MAINLMC from "@salesforce/messageChannel/MainMessageChannel__c"
import {MessageContext, publish} from 'lightning/messageService'

export default class HotelInfo extends LightningElement {
    @api hotelInfo;

    showModal=false;

    handleHotelDetail(){
        this.showModal = !this.showModal;
    }

    @wire(MessageContext)
    context

    inputValue='Reservation received';

    handleReservation(){
        const message={
            lmsData:{
                value:this.inputValue
            }
        }

        //publish(messageContext, messageChannel, message)
        publish(this.context, MAINLMC, message)
    }
}