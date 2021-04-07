import { LoaderService } from './shared/loading-spinner/loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RepositoryGitComponent } from './repository/repository-git/repository-git.component';
import { RepositoryListComponent } from './repository/repository-list/repository-list.component';
import { AppRoutingModule } from './app-routing.module';
import { RepositoryComponent } from './repository/repository.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HttpErrorInterceptor } from './http/http-error.interceptors';
import { ErrorService } from './http/error.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepositoryComponent,
    RepositoryGitComponent,
    RepositoryListComponent,
    LoadingSpinnerComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoaderService, ErrorService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
