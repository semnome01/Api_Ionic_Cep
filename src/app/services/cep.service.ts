import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  localizarCep(codigoCep: string) {
    let url = 'https://viacep.com.br/ws/' + codigoCep + '/json/';

    let header: any = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }
   
    return this.http.get(url, header).toPromise();


    // let header: any;
    // headers: new HttpHeaders().set('Content-type', 'application/json')
    // return this.http.get(url, header)
  }
}
    // Declara uma variável chamada `url` que guarda o apontamento da API, concatenado com o parâmetro codigoCep tipado como `string`.
    // Declara uma variável chamada `header` que será inicializada como um objeto vazio
    // A declaração `any` significa que o TS permitirá qualquer tipo de atribuição
    // para essa variável.
    // Após a variável header, iremos criar uma instância(objeto) de `HttpHeaders`.
    // Essa classe é fornecida pelo Angular para manipular cabeçalho HTTP. 
    // .set() => Esse método é chamado no objeto `HttpHeaders` que foi criado (headers).
    // Ele é usado para adicionar ou modificar um cabeçalho http específico. Nesse caso, iremos definir o nosso cabeçalho como 'Content-type' com o valor 'application/json'. Isso indica que o tipo de solicitação é Json.