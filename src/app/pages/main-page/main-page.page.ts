import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  constructor(private darkmode:DarkModeService) { }

  ngOnInit() {
  }
  

  toggleDarkMode() {
    // this.isDarkMode = !this.isDarkMode;
    this.darkmode.toggleDarkMode();
  }
}
