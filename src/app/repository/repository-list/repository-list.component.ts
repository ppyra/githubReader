import { UserService } from './../../shared/user.service';
import { RepositoryModel } from './../repository.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit, OnDestroy {
  repositories: RepositoryModel[];
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.userDataObs.subscribe((repositoryList: RepositoryModel[]) => {
      this.repositories = repositoryList;
    });
  }

  getCountRepositories() {
    return this.repositories !== null ? this.repositories.length : 0;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
