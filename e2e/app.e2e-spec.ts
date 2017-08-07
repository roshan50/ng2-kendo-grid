import { AngularKendoPage } from './app.po';

describe('angular-kendo App', () => {
  let page: AngularKendoPage;

  beforeEach(() => {
    page = new AngularKendoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
