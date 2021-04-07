import { CommonOptions } from "child_process";

export interface Repository {
  name: string;
  owner: Owner;
  default_branch: string;
  fork: boolean;
  branches_url: string;
  branches?: Branch[];
}

export interface Owner {
  login: string;
}

export interface Branch {
  name: string;
  commit: Commit;
}

export interface Commit {
  sha: string;
}
