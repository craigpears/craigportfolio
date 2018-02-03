import { AppPage } from './app.po';

describe('craig-portfolio App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Hi, I'm Craig :)");
  });

  /* navigation bar sticking tests */

  it('should fix the navigation when the user has scrolled past it', () => {
  	page.navigateTo(); 
  	page.maximise();
  	page.scrollPastNavigation().then(function() {
  		expect(page.navigationFixed()).toEqual(true)
  	});
  });

  it('should start without fixed navigation', () => {
  	page.navigateTo(); 
  	page.maximise();
  	expect(page.navigationFixed()).toEqual(false);
  });

  it('should not fix the navigation when scrolling down a tiny bit', () => {
		page.navigateTo(); 
  	page.maximise();
  	page.scrollAboveNavigation().then(function() {
  		expect(page.navigationFixed()).toEqual(false)
  	});
  });

  /* end navigation bar sticking tests */

  /* navigation scroll tests */

	it('should show home workout app when the menu link is clicked', () => {
  	page.navigateTo(); 
  	page.maximise();
  	page.clickHomeworkoutapp();  	
  	expect(page.homeworkoutappHeaderVisible()).toEqual(true);
  });

  it('should show sql confidence when the menu link is clicked', () => {
  	page.navigateTo(); 
  	page.maximise();
  	page.clickSqlconfidence();  	
  	expect(page.sqlconfidenceHeaderVisible()).toEqual(true);
  });

  it('should show dachimpy.com when the menu link is clicked', () => {
  	page.navigateTo(); 
  	page.maximise();
  	page.clickDachimpycom();  	
  	expect(page.dachimpycomHeaderVisible()).toEqual(true);
  });

  it('should show blockade simulator when the menu link is clicked', () => {
  	page.navigateTo(); 
  	page.maximise();
  	page.clickBlockadesimulator();  	
  	expect(page.blockadesimulatorHeaderVisible()).toEqual(true);
  });

  /* end navigation scroll tests */

});
