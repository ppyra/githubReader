import { RepositoryPage } from './../pages-processing/repository.po';

describe('GitHub user epository', () => {

  const repositoryPage = new RepositoryPage()

  it('Validation empty username area', () => {
    repositoryPage.navigateTo();
    repositoryPage.clickSearch();
    repositoryPage.checkAlerMessage();
  })

  it('Fill username area', () => {
    repositoryPage.fillUsername('ppyra');
  })

  it('Click search user repositories', () => {
    repositoryPage.clickSearch();
  })

  it('Count result elements', () => {
    repositoryPage.countRepositories();
  })
});
