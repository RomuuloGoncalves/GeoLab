import { Component, OnInit } from '@angular/core';
import { PerguntasService } from 'src/app/services/perguntas.service';
import { ToastService } from 'src/app/services/toast.service';
import { CookiesPageRoutingModule } from '../cookies/cookies-routing.module';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {

  constructor(private Perguntas: PerguntasService, private Toast: ToastService, private Usuario: UsuarioService) { }

  ngOnInit() {
    this.coletarPerguntas()
    this.recuperarPontos()
  }

  loading: boolean = true
  perguntas: any = []
  pontos!: number
  id_usuario?: number = this.Usuario.id_usuario 


  public coletarPerguntas() {
    this.loading = true;

    this.Perguntas.coletarPerguntas().subscribe(
      response => {
        console.log('Dados cadastrados com sucesso!', response);
        this.loading = false;
        this.perguntas = response
        const tipo = 'success';
        const mensagem = 'Perguntas listadas com sucesso';
        this.Toast.mostrarToast(tipo, mensagem);
      },
      error => {
        console.error('Erro ao coletar os dados:', error);
        this.loading = false;

        const tipo = 'danger';
        const mensagem = error.error.message;
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );

  }

  public verificarPergunta(correta: boolean, index: number) {
    let tipo = 'danger';
    let mensagem = 'Que pena. Tente mais uma vez.';
    
    if (correta) {
       tipo = 'success';
       mensagem = 'Parabéns. Você acertou!!!!';

       this.removerQuestao(index)
       this.pontos = this.pontos + 2
       this.somarPontoUsuario(this.pontos)
    }

    this.Toast.mostrarToast(tipo, mensagem);
  }

  public removerQuestao(index: number){
    this.perguntas.splice(index, 1);
  }

  public recuperarPontos(){
    this.Usuario.coletarPontos(this.id_usuario).subscribe(
      response => {
        console.log(response)
        this.pontos = response.pontos
      },
      error => {
        console.log(error)
      }
    );
  }

  public somarPontoUsuario(number:number){
    console.log(number)
    const atualizar = {
      "id": this.id_usuario,
      "pontos": number
    }
    this.Usuario.atualizarPontos(atualizar).subscribe(
      response => {
        console.log(response)
        const tipo = 'success';
        const mensagem = 'Pontos atualizados';
        this.Toast.mostrarToast(tipo, mensagem);

      },
      error => {
        console.error('Erro ao inserir os pontos:', error);
        this.loading = false;

        const tipo = 'danger';
        const mensagem = error.error.message;
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );
  }
}
