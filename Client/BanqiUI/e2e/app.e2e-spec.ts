import { BanqiUIPage } from './app.po';

describe('banqi-ui App', function() {
  let page: BanqiUIPage;

  beforeEach(() => {
    page = new BanqiUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
