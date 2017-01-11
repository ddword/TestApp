import { Component } from '@angular/core';

import { SignUpPage } from '../signup/signup';
import { VideoPage } from '../video/video';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SignUpPage;
  tab2Root: any = VideoPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
