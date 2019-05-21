import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThfModule } from '@totvs/thf-ui';
import { AppComponent } from './app.component';
import { CampDefinitionComponent } from './camp-definition/camp-definition.component';
import { BaseserviceService } from './baseservice.service';


@NgModule({
  declarations: [
    AppComponent,
    CampDefinitionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([]),
    ThfModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [BaseserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
