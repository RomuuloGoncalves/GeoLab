import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  constructor(private Usuario: UsuarioService, private Toast: ToastService) { }

  ngOnInit() {
    this.carregarRanking()
  }

  loading = true;
  arduinos: any = []
  ranking: any = []
  private carregarRanking() {
    this.Usuario.pegarRanking().subscribe(
      (response: any) => {
        console.log("user", response)
        this.ranking = response;
        this.loading = false
        this.corrigirImagens()
        const tipo = 'success';
        const mensagem = 'Ranking gerado com sucesso';
        this.Toast.mostrarToast(tipo, mensagem);
      },
      (badResponde: HttpErrorResponse) => {
        console.log(badResponde);
        this.loading = false;
        const tipo = 'danger';
        const mensagem = 'Erro ao gerar ranking';
        this.Toast.mostrarToast(tipo, mensagem);
      }
    );
  }

  corrigirImagens() {
    this.ranking.forEach((element: any, index: any) => {
      // console.log(element)
      this.ranking[index].imagem = this.Usuario.pegarImagem(this.ranking[index]!.imagem)

    });
  }

}
