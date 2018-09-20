import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { FooterModule } from './footer/footer.module';
import { BodyDirective } from './body.directive';


@NgModule({
  declarations: [
    AppComponent,
    BodyDirective
    
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BodyModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
