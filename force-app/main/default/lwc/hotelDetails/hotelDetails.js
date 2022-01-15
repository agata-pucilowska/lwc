import { LightningElement, api } from 'lwc';

export default class HotelDetails extends LightningElement {

    @api hotelInfo;

    handleClose(){
        const closeEvent = new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }
}