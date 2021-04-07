import { RepositoryOwner } from './repository-owner.model';
export class RepositoryModel {

  constructor(
    public name: string,
    public owner: RepositoryOwner,
    public default_branch: string,
    public fork: boolean,
    public branches_url: string,
    public branches?: Branch[]
  )
  {}
}

export class Branch {
  constructor(public name: string, public sha: string) {}
}
