import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { IntroComponent } from './intro/intro.component';
import { ArtistsComponent } from './artists/artists.component';
import { SubmissionComponent } from './submission/submission.component';
import { MusicSubmitComponent } from './music-submit/music-submit.component';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { SuggestionComponent } from './artists/suggestion/suggestion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { SubmitDialogComponent } from './submission/submit-dialog/submit-dialog.component';
import { DndDirective } from './directives/dnd.directive';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    IntroComponent,
    ArtistsComponent,
    SubmissionComponent,
    MusicSubmitComponent,
    SubmitSuccessComponent,
    ArtistComponent,
    SuggestionComponent,
    SubmitDialogComponent,
    DndDirective,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [SubmitDialogComponent, SubmitSuccessComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
