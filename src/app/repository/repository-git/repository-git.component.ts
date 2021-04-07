import { RepositoryModel } from './../repository.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository-git',
  templateUrl: './repository-git.component.html',
  styleUrls: ['./repository-git.component.scss']
})
export class RepositoryGitComponent implements OnInit {
  @Input() repository: RepositoryModel;
  constructor() { }

  ngOnInit(): void {
  }

}
