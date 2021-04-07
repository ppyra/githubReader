import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '../shared/loading-spinner/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  isLoading = false;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.subscription = this.loaderService.status.subscribe((val: boolean) => {
      this.isLoading = val;
  });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
