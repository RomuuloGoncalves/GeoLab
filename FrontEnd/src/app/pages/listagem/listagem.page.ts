import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  matrizFormas = [
    ["Cena básica", "basic-scene.html", "basic-scene.png"],
    ["Planos de recorte", "clipping-planes.html", "clipping-planes.png"],
    ["Padrões personalizados", "custom-patterns.html", "custom-patterns.png"],
    ["Globo multi-marcador", "globe-multi-marker.html", "globe-multi-marker.png"],
    ["Globo", "globe.html", "globe.png"],
    ["Cubo", "hello-cube.html", "hello-cube.png"],
    ["Caixa de buraco", "hole-box.html", "hole-box.png"],
    ["Anel de buraco", "hole-ring.html", "hole-ring.png"],
    ["Movimento da câmera do teclado", "keyboard-camera-move.html", "camera-movement.png"],
    ["Movimento de malha do teclado", "keyboard-mesh-move.html", "mesh-movement.png"],
    ["Cubo mágico", "magic-cube.html", "magic-cube.png"],
    ["Modelo", "model.html", "model.png"],
    ["Caminho parabólico", "parabolic-path.html", "parabolic-path.png"],
    ["Teste de meio portal do teclado", "portal-half-keyboard-test.html", "portal-half-keyboard-test.png"],
    ["Visualização do portal AR", "portal-view-AR.html", "portal-view-AR.png"],
    ["Visualização do portal", "portal-view.html", "portal-view.png"],
    ["Refração", "refraction.html", "refraction.png"],
    ["Sombreador", "shader.html", "shader.png"],
    ["Bolas de sombra", "shadow-balls.html", "shadow-balls.png"],
    ["Sombra", "shadow.html", "shadow.png"],
    ["Teste de máscara", "stencil-test.html", "stencil-test.png"],
    ["Textura", "texture.html", "texture.png"],
    ["Vídeo", "video.html", "video.png"],
    ["Efeito de água AR", "water-effect-AR.html", "water-effect-AR.png"],
  ]

  public results = this.matrizFormas;

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.matrizFormas.filter((d) => d[0].toLowerCase().includes(query));
  }
}
