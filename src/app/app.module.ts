import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatChipsModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, 
    MatGridListModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatChipsModule, 
    MatCardModule, 
    HttpClientModule, 
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatIconModule,
    InMemoryWebApiModule.forRoot(FakeApiService, {delay: 5000}) ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, CardComponent, HeaderComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
