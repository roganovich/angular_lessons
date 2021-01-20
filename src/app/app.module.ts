import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostFormComponent } from './post-form/post-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SquearePipe } from './pipes/square.pipe';
import { PostfilterPipe } from './pipes/postfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    HighlightDirective,
    SquearePipe,
    PostfilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
