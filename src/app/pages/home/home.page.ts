import { Component } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  correio: any = {};
  
  constructor(private cepService: CepService) {}

  localizarCep(evento: any) {

    let codigoCep :string = evento.detail.value;

    this.cepService.localizarCep(codigoCep)
    .then(response => {
      this.correio =response;
      console.log(this.correio);
    })
  } 

}
// O método localizarCep é chamando quando um evento é acionado, passando `evento` como parâmetro.
// Iremos utilizar o valor do evento como (evento.detail.value) e armazenar na variável `codigoObjeto;`

