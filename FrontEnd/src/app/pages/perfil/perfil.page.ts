import { HttpErrorResponse } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { ArduinoService } from 'src/app/services/arduino.service';
import { SensorService } from 'src/app/services/sensor.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  @ViewChild('imagemForm') private imagemForm!: NgForm;

  constructor(private Arduino: ArduinoService, private Sensor: SensorService, private Toast: ToastService, private Usuario: UsuarioService, private Cookie: CookieService, private alertController: AlertController) { }

  ngOnInit() {
    this.carregarPerfil()
  }

  loading = false;
  arduinos: any = []
  usuario!: any
  nome_usuario?: string = this.Usuario.nome_usuario
  id_usuario: any = (this.Usuario.id_usuario)
  quantidade_arduinos = 0
  private carregarPerfil() {
    this.Usuario.pegarUsuario(this.Usuario.id_usuario).subscribe(
      (response: any) => {
        console.log("user", response)
        this.usuario = response;
        this.usuario.imagem = this.Usuario.pegarImagem(this.usuario!.imagem)
      },
      (badResponde: HttpErrorResponse) => {
        console.log(badResponde);
        this.loading = false;
      }
    );
  }


  

  arqsSelecionados: File[] = [];
  nomeArqSelecionado?: string
  selecionarArqs(event: any) {
    this.arqsSelecionados = event.target.files;

  }

  mudarImagem() {
    const imagem = this.imagemForm.form.value;
    imagem.imagem = this.arqsSelecionados[0]
    imagem.id = this.id_usuario
    console.log(imagem)
    this.Usuario.alterarImagem(imagem).subscribe(
      (response: any) => {
        console.log(response)
        location.reload()
        const tipo = 'success';
        const mensagem = 'Imagem alterada com sucesso';
        this.Toast.mostrarToast(tipo, mensagem);

      },

      (badReponse: HttpErrorResponse) => {
        console.log(badReponse)
        const tipo = 'danger';
        const mensagem = 'Erro ao trocar imagem!';
        this.Toast.mostrarToast(tipo, mensagem);
      }
    )
  }
}
