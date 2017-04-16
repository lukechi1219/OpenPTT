import { OpenPTTPage } from './app.po';

describe('open-ptt App', () => {
  let page: OpenPTTPage;

  beforeEach(() => {
    page = new OpenPTTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
