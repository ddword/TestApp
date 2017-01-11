import { Component } from '@angular/core';

import { SignUpPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SignUpPage;
  tab2Root: any = HomePage;
  tab3Root: any = AboutPage;
  tab4Root: any = ContactPage;

  constructor() {

  }
}
