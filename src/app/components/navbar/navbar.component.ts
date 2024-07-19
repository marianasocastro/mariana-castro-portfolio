import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavbarOpen = false;
  languages = [
    { code: 'en', label: 'NAVBAR.ENGLISH' },
    { code: 'pt', label: 'NAVBAR.PORTUGUESE' }
  ];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'pt']);
    // this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    const browserLang = navigator.language;
    if (browserLang.includes('pt')) {
      this.languages.sort((a, b) => (a.code === 'pt' ? -1 : 1));
    } else {
      this.languages.sort((a, b) => (a.code === 'en' ? -1 : 1));
    }
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const language = target.value;
    if (language) {
      this.translate.use(language);
    }
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    console.log(this.isNavbarOpen)
  }

}
