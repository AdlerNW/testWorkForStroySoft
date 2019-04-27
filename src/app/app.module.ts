import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeaderComponent }   from './header.component';
import { FooterComponent }   from './footer.component';
import { HeadlineComponent }   from './headline.component';
import { GetFreeComponent }   from './getfree.component';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, HeaderComponent, FooterComponent, HeadlineComponent, GetFreeComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }