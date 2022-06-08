import { LitElement } from 'lit';

export class GetData extends LitElement {

    static get properties (){
        return{
            url: {type: String},
            metho: {type: String}
        }
    }

    firstUpdated(){
        this.getData();
    }  

    sendData(data){
        this.dispatchEvent(new CustomEvent('ApiData',{
            detail: {data}, bubbles:true, composed:true
        }));
    }

    getData(){
        fetch(this.url, {method: this.method})
        .then((response) => {
            if(response.ok) return response.json();
            return Promise.reject(response);
         })

         .then((data) =>{this.sendData(data);})
         .catch((error)=>{console.warn('Algo ha falaldo',error);})
        }
    }




customElements.define('get-data',GetData);