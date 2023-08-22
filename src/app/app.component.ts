import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen'
import { DarkModeService } from './services/dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // isDarkMode = false;
  constructor(public darkmode:DarkModeService) {
    this.initializeApp();
  }

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    SplashScreen.hide();
  }
  toggleDarkMode() {
    // this.isDarkMode = !this.isDarkMode;
    this.darkmode.toggleDarkMode();
  }
}
