import { Component, Input, OnInit } from '@angular/core';

interface Comentario {
  autor: string;
  colaborouTrabalho: boolean;
  funcao: string;
  texto: string;
}

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
  statusTopico: number = 0;

  usuarioEmail: string = 'gabrielsoares.pe.br@gmail.com';
  discussaoAssuntoTemp: string = '';
  discussaoConteudoTemp: string = '';
  discussaoAssunto: string = '';
  discussaoConteudo: string = '';

  atualizaDiscussao(evento: MouseEvent) {
    evento.preventDefault();

    if (this.statusTopico == 0) this.statusTopico = 1;
    else if (this.statusTopico == 1) {
      this.statusTopico = 2;

      this.discussaoAssunto = this.discussaoAssuntoTemp;
      this.discussaoConteudo = this.discussaoConteudoTemp;
    } else if (this.statusTopico == 2) this.statusTopico = 1;
  }

  visibilidadeComentarios: boolean = false;

  toggleComentarios() {
    this.visibilidadeComentarios = !this.visibilidadeComentarios;
  }

  comentariosLista: Comentario[] = [
    {
      autor: 'Adriano da Silva',
      colaborouTrabalho: true,
      funcao: 'Autor',
      texto:
        'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
    },
    {
      autor: 'Carlos Henrique Santos',
      colaborouTrabalho: false,
      funcao: '',
      texto:
        'Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo. Obrigada pela resposta, muito interessante o seu trabalho!',
    },
    {
      autor: 'Carmila Ferreira Andrade',
      colaborouTrabalho: true,
      funcao: 'Coautor',
      texto:
        'Também interessante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo. Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
    },
    {
      autor: 'Ana Carolina',
      colaborouTrabalho: true,
      funcao: 'Coautor',
      texto:
        'Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
