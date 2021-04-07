import { LoaderService } from './loading-spinner/loader.service';
import { RepositoryOwner } from './../repository/repository-owner.model';
import { RepositoryModel, Branch } from './../repository/repository.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  userDataObs = new BehaviorSubject<RepositoryModel[]>(null);
  repositoryList: RepositoryModel[];
  configUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  getUserRepository(userName: string) {
    const url = `${this.configUrl}/users/${userName}/repos`
    //const url = 'http://localhost:4210/repository/'
    //const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=379fd180f241dda5e575a30bf50c4e07';
    //https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=379fd180f241dda5e575a30bf50c4e07 forecast
    //const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ca02fa1c13a29cbf6985ec32c78f49a9';
    this.loaderService.display(true);
    return this.http.get<RepositoryModel[]>(url)
    .pipe(map(response => response.filter(x => !x.fork)))
    .pipe(map(el => el
      .map(item => {
        const repoModel = new RepositoryModel(item.name, new RepositoryOwner(item.owner.login), item.default_branch, item.fork, item.branches_url.split('{/branch}')[0]);
        this.http.get<Branch[]>(repoModel.branches_url)
        .subscribe(branch => repoModel.branches = branch.map(prop => new Branch(prop.name, prop['commit'].sha)));
        return repoModel;
      })
      )
    )
    .subscribe(data => {
      this.loaderService.display(false);
      this.userDataObs.next(data.slice());
    });
  }

}
