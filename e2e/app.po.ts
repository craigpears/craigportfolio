import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  navigationFixed() {
  	return element(by.css('#project-links'))
	  	.getAttribute('class')
	  	.then(function(classes) {
	  			return classes.indexOf('fixed') != -1;
	  	});
  }

  scrollAboveNavigation() {
  	return browser.executeScript('window.scrollTo(0, 300);');
  }

  scrollPastNavigation() {
  	return browser.executeScript('window.scrollTo(0, 580);');
  }

  maximise() {
  	browser.manage().window().maximize();
  }

  clickHomeworkoutapp()
  {
  	element(by.css('[data-test-id=homeworkoutappProjectLink]')).click();
  }

  clickSqlconfidence()
  {
  	element(by.css('[data-test-id=sqlconfidenceProjectLink]')).click();
  }

  clickDachimpycom()
  {
  	element(by.css('[data-test-id=dachimpycomProjectLink]')).click();
  }

  clickBlockadesimulator()
  {
  	element(by.css('[data-test-id=blockadesimulatorProjectLink]')).click();
  }

  homeworkoutappHeaderVisible()
  {
  	return this.elementWithinViewport('[data-test-id=homeworkoutappProjectHeader]');
  }

  sqlconfidenceHeaderVisible()
  {
  	return this.elementWithinViewport('[data-test-id=sqlconfidenceProjectHeader]');
  }

  dachimpycomHeaderVisible()
  {
  	return this.elementWithinViewport('[data-test-id=dachimpycomProjectHeader]');
  }

  blockadesimulatorHeaderVisible()
  {
  	return this.elementWithinViewport('[data-test-id=blockadesimulatorProjectHeader]');
  }

  elementWithinViewport(elementCss:string)
  {
  	var navigationCoveringView = this.navigationFixed();

  	return element(by.css(elementCss))
  		.getLocation()
  		.then(function(location) {
	  		var headerYPos = location.y;
	  		return browser.executeScript("return {'scrollY': window.scrollY, 'innerHeight': window.innerHeight};")
	  		.then(function(windowPositions: WindowPositions){
	  			var windowScrollY = windowPositions.scrollY;
	  			var innerHeight = windowPositions.innerHeight;

	  			if(navigationCoveringView) {
	  				var navigationHeight:number = 80;
	  				windowScrollY += navigationHeight;
	  			}

	  			return headerYPos >= windowScrollY && headerYPos <= windowScrollY + innerHeight;
	  		});

	  	});
  }
}

export class WindowPositions {
	scrollY: number;
	innerHeight: number;
}