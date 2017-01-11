import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SignUpPage } from '../pages/signup/signup';
import { ContactPage } from '../pages/contact/contact';
import { VideoPage } from '../pages/video/video';
import { TabsPage } from '../pages/tabs/tabs';

import { YoutubeService } from'../providers/youtube-service';

@NgModule({
  declarations: [
    MyApp,
    SignUpPage,
    ContactPage,
    VideoPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignUpPage,
    ContactPage,
    VideoPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
