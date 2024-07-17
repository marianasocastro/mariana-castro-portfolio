import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'pt']);
    this.translate.setDefaultLang('en');

    // Verificar se o idioma do navegador é suportado
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      this.translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
    } else {
      this.translate.use('en');
    }
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
