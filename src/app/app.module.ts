import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { HeaderComponent } from './compartilhado/header/header.component';
import { SidebarComponent } from './compartilhado/sidebar/sidebar.component';
import { FooterComponent } from './compartilhado/footer/footer.component';
import { AdministradoresComponent } from './paginas/administradores/administradores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdministradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
