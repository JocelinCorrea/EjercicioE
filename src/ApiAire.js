import { LitElement, html, css } from 'lit';
import '../components/GetData';

export class ApiAire extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array },
     
    };
  }

  static get styles() {
    return css`
    
    `;
  }

  constructor(){
    super();
    this.wiki = [];
    this.addEventListener('ApiData',(e)=>{
      this.dataFormat(e.detail.data);
    })
  }

  dataFormat(data){
    let datos = [];

    data["results"].forEach(resultado => {
      resultado.stations.forEach(station => {
      datos.push({
        name: station.name,
        id: station.id,
        source: station.source_id,
      })})
    })


    this.wiki = datos;
    console.log(datos)
  }

  
  render() {
    return html`
      <get-data url ="https://api.datos.gob.mx/v1/calidadAire" method = "GET"></get-data>
      ${this.dateTemplate}
    `;
  }

  get dateTemplate () {
    return html `
      ${this.wiki.map(station => html `
      <table>
        <thead>
            <tr>
                <th colspan="2" id="titulo">Localidad</th>
                <th colspan="3" id="titulo">Indices</th>
                <th colspan="3" id="titulo">Medidas</th>
            </tr>
            <tr>
                <th id="titulo2">Nombre</th>
                <th id="titulo2">Id</th>
                <th id="titulo2">Fuente</th>
                <th id="titulo2">Valor</th>
                <th id="titulo2">Fecha</th>
                <th id="titulo2">Valor</th>
                <th id="titulo2">Unidad</th>
                <th id="titulo2">Contaminacion</th>
            </tr>
        </thead>
        <tbody>
        <td>${station.name}</td>
        <td>${station.id}</td>
        <td>${station.source_id}</td>
       
        </tbody>
    </table>
      `
        )}
    
    `
  }
}
