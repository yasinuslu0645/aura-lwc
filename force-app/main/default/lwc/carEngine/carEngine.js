import { api, LightningElement } from 'lwc';

export default class CarEngine extends LightningElement {
   @api motorModeli = "3.0 Turbo"; //2-Bunu HTML'den dinamik olarak cagiralim. ama 2 yere @api eklenmeli.
    // Biri property'ini onune, digeri import'un icine
}