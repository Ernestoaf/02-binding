import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivaNgifComponent } from './directiva-ngif/directiva-ngif.component';
import { DirectivaNgifelseComponent } from './directiva-ngifelse/directiva-ngifelse.component';
import { DirectivaNgstyleComponent } from './directiva-ngstyle/directiva-ngstyle.component';
import { DirectvaNgclassComponent } from './directva-ngclass/directva-ngclass.component';
import { DirectivaNgforComponent } from './directiva-ngfor/directiva-ngfor.component';
import { DirectivaNgswitchComponent } from './directiva-ngswitch/directiva-ngswitch.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgifComponent,
    DirectivaNgifelseComponent,
    DirectivaNgstyleComponent,
    DirectvaNgclassComponent,
    DirectivaNgforComponent,
    DirectivaNgswitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
