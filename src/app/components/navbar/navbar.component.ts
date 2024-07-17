import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'pt']);
    this.translate.setDefaultLang('pt');
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const language = target.value;
    if (language) {
      this.translate.use(language);
    }
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    console.log(this.isNavbarOpen)
  }

}
