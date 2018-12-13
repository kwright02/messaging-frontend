import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeedComponent } from './sidebar/feed/feed.component';
import {OrderByPipe} from './sidebar/feed/orderby.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDialogModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { ApprovedDialogComponent } from './sidebar/feed/approved-dialog/approved-dialog.component';
import { CreatePostComponent } from './sidebar/create-post/create-post.component';
import {FormsModule} from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {OverlayModule} from '@angular/cdk/overlay';
import { FabComponent } from './sidebar/fab/fab.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    FeedComponent,
    ApprovedDialogComponent,
    CreatePostComponent,
    FeedComponent,
    OrderByPipe,
    FabComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuillModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxMaterialTimepickerModule.forRoot(),
    OverlayModule,
  ],
  entryComponents: [
    ApprovedDialogComponent,
    CreatePostComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
