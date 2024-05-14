import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins } from '@capacitor/core';

const { CameraPermissions, Camera } = Plugins;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  @Input() public linkFigura!: string;
  safeUrl!: SafeResourceUrl;
  loading: boolean = true;

  constructor(private sanitizer: DomSanitizer) {}

  async ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.linkFigura);
    await this.checkCameraPermission();
  }

  async checkCameraPermission() {
    try {
      const hasPermission = (await CameraPermissions['query']({ name: 'camera' })).state === 'granted';
      if (!hasPermission) {
        const permissionRequest = await CameraPermissions['request']({ name: 'camera' });
        if (permissionRequest.state !== 'granted') {
          console.error('Permissão da câmera não concedida.');
        }
      }
    } catch (error) {
      console.error('Erro ao verificar permissão da câmera:', error);
    }
  }

  onLoad() {
    this.loading = false;
  }

  async openCamera() {
    try {
      const image = await Camera['getPhoto']({
        quality: 100,
        resultType: 'uri',
        source: 'camera',
      });
      // Aqui você pode fazer algo com a imagem capturada, image.webPath contém o caminho da imagem
    } catch (error) {
      console.error('Erro ao acessar a câmera:', error);
    }
  }
}
