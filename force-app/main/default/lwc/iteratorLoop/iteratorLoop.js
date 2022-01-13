import { LightningElement } from 'lwc';

export default class IteratorLoop extends LightningElement {
    carList = [
        {'brand':'Audi',
        'color':'red',
        'number':'AA5489',
        'owner':'John Smith'},
        {'brand':'Volvo',
        'color':'blue',
        'number':'KA45698',
        'owner':'Adam Rider'},
        {'brand':'Toyota',
        'color':'green',
        'number':'CC74563',
        'owner':'Cate Novice'},
        {'brand':'Fiat',
        'color':'red',
        'number':'WW74859',
        'owner':'Anna Wonder'},
    ];
}