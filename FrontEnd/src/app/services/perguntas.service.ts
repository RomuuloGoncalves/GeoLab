import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  constructor(private Server: ServerService) { }
  cadastrarPergunta(dados: any): Observable<any> {
    return this.Server.post('/views/perguntas/cadastrar.php', dados);
  }

  coletarPerguntas(){
    return this.Server.get(`/views/perguntas/listar.php`);
  }
}
