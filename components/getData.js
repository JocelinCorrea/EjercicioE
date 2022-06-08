import { LitElement } from 'lit-element';

export class getData extends LitElement {

    constructor(){
        super();
        console.log('Hola desde getData');

    }

    
}

customElements.define ('get-data', getData);