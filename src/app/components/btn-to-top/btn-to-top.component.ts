import { Component, HostListener, OnInit  } from '@angular/core';

@Component({
  selector: 'app-btn-to-top',
  templateUrl: './btn-to-top.component.html',
  styleUrls: ['./btn-to-top.component.scss']
})
export class BtnToTopComponent implements OnInit {

  mostrarBotaoGoToTop: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //Funções para mostrar botão scrollToTop
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (window.pageYOffset > window.innerHeight) {
      this.mostrarBotaoGoToTop = true;
    } else {
      this.mostrarBotaoGoToTop = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
