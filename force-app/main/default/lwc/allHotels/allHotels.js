import { LightningElement } from 'lwc';
import HOTELS from '@salesforce/resourceUrl/Hotels';


export default class AllHotels extends LightningElement {

    allHotelsInfo=[
        {image:HOTELS+"/hotels/hotel1.jpg", place:"Lanzarote", hotelName:'Ekstra Sambo',roomInfo:'Twin beds',price:'1000/Night', rating:'*****', hotelDetail:'More info hotel1'},
        {image:HOTELS+"/hotels/hotel2.jpg", place:"Corfu", hotelName:'Super Ekstra Mimmi',roomInfo:'Double bed',price:'9000/Night', rating:'*****', hotelDetail:'More info hotel2'},
        {image:HOTELS+"/hotels/hotel3.jpg", place:"Cyprus", hotelName:'Mega Rany',roomInfo:'Queeen bed',price:'700/Night', rating:'****', hotelDetail:'More info hotel3'},
        {image:HOTELS+"/hotels/hotel4.jpg", place:"Madera", hotelName:'Epic Alin',roomInfo:'Queen bed',price:'120/Night', rating:'**', hotelDetail:'More info hotel4'},
        {image:HOTELS+"/hotels/hotel5.jpg", place:"Mallorca", hotelName:'Mega Epic Bortu',roomInfo:'King bed',price:'1500/Night', rating:'***', hotelDetail:'More info hotel5'}
 
    ];
}