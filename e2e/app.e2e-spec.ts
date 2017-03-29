import { WebnewsPage } from './app.po';

describe('webnews App', function() {
  let page: WebnewsPage;

  beforeEach(() => {
    page = new WebnewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
