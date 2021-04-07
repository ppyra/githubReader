import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ErrorService } from './http/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  errors = null;
  private ngUnsubscribe = new Subject();

  constructor(private errorService: ErrorService)
  {
      this.initializeErrors();
  }

  ngOnDestroy()
  {
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
  }

  private initializeErrors()
  {
    this.errorService.getErrors()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((errors) => {
        this.errors = errors;
      });
  }

  onHandleError() {
    this.errors = null;
  }
}
