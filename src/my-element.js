import {LitElement, html, css, } from 'lit-element';
import './components/getData';

export class Myelement extends LitElement {

    static get properties() {
        return{
            title: {type: String},
            page: {type: String},
        }

    }

    static get styles(){
        return css
    }

    render() {
        return html `

        <get-data></get-data>
        
        `
    }

}

