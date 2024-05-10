import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-de-trabalho',
  templateUrl: './pagina-de-trabalho.component.html',
  styleUrls: ['./pagina-de-trabalho.component.scss'],
})
export class PaginaDeTrabalhoComponent implements OnInit {
  // Sessão principal
  favoritado: boolean = false;

  // Sessão de resumo
  textoResumo: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant';
  textoResumoExpandido: boolean = false;

  // Sessão de discussões
  curtido: boolean = false;
  curtidaQuantidade: number = 1;

  atualizaCurtida() {
    this.curtido = !this.curtido;
    if (this.curtido) this.curtidaQuantidade += 1;
    else this.curtidaQuantidade -= 1;
  }

  // 0 = Discussão não iniciada
  // 1 = Escrevendo Discussão
  // 2 = Discussão enviada
  statusTopico: number = 2;

  usuarioEmail: string = 'gabrielsoares.pe.br@gmail.com';
  discussaoAssuntoTemp: string = '';
  discussaoConteudoTemp: string = '';
  discussaoAssunto: string = 'gabriel';
  discussaoConteudo: string = 'soares';

  atualizaDiscussao(evento: MouseEvent) {
    evento.preventDefault();

    if (this.statusTopico == 0) this.statusTopico = 1;
    else if (this.statusTopico == 1) {
      this.statusTopico = 2;

      this.discussaoAssunto = this.discussaoAssuntoTemp;
      this.discussaoConteudo = this.discussaoConteudoTemp;
    } else if (this.statusTopico == 2) this.statusTopico = 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
