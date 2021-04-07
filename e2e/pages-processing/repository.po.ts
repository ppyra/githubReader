import { $, $$, browser, by, element } from 'protractor';

export class RepositoryPage {

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  checkAlerMessage() {
    var empty_username = element(by.id('empty_username'));
    expect(empty_username.getText()).toBe('Please enter username');
  }

  fillUsername(userName: string) {
    expect(userName).not.toBeUndefined();
    this.selector().input().username.sendKeys(userName);
  }

  clickSearch() {
    this.selector().button().search.click();
  }

  countRepositories() {
    let list = $$('app-repository-git');
    expect(list.count()).toBe(6);
  }

  selector() {
    return {
      input: () => ({
        username: $('input[formControlName=userName]')
      }),
      button: () => ({
        search: $('.c-btn--primary')
      })
    };
  }
}
