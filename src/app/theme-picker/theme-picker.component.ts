import { Component, OnInit } from '@angular/core';
import { SiteTheme } from 'src/app/customtheme';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],

})
export class ThemePickerComponent implements OnInit {

  currentTheme:any;

  themes: SiteTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber',
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink',
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey',
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green',
    },
  ];

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
    this.installTheme('indigo-pink');
  }

  installTheme(themeName: string) {
      this.currentTheme = this.themes.find(theme => theme.name === themeName);

    this.themeService.setStyle('theme', `${this.currentTheme.name}.css`);
  }
}
