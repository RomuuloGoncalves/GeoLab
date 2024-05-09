import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-realidade-aumentada',
  templateUrl: './realidade-aumentada.page.html',
  styleUrls: ['./realidade-aumentada.page.scss'],
})
export class RealidadeAumentadaPage implements OnInit {


  constructor(    private route: ActivatedRoute,) { }

  link: string = "https://stemkoski.github.io/AR-Examples/"

  loading:boolean = true
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.link += (params['link']);
    });
  this.loading = false
  }

}
