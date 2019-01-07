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
  MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule, MatAutocompleteModule, MatExpansionModule, MatTooltipModule
} from '@angular/material';
import { ApprovedDialogComponent } from './sidebar/feed/approved-dialog/approved-dialog.component';
import { CreatePostComponent } from './sidebar/create-post/create-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {OverlayModule} from '@angular/cdk/overlay';
import { FabComponent } from './sidebar/fab/fab.component';
import { ExitPostCreationDialogComponent } from './sidebar/exit-post-creation-dialog/exit-post-creation-dialog.component';
import { PostPanelComponent } from './sidebar/feed/post-panel/post-panel.component';
import { SentPostComponentComponent } from './sidebar/feed/sent-post-component/sent-post-component.component';

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
    FabComponent,
    ExitPostCreationDialogComponent,
    PostPanelComponent,
    SentPostComponentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatChipsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  entryComponents: [
    ApprovedDialogComponent,
    CreatePostComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
