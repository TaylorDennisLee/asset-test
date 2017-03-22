import { AssetTestPage } from './app.po';

describe('asset-test App', () => {
  let page: AssetTestPage;

  beforeEach(() => {
    page = new AssetTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
