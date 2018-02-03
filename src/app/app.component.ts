import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fixed = false;
  fixScrollPosition = 0;
  headerHeight = 0;

  activeSection = 'intro';
  homeworkoutappPos = 0;
  sqlconfidencePos = 0;
  dachimpycomPos = 0;
  blockadesimulatorPos = 0;

  homeworkoutapp_readmore = false;

  ngOnInit()
  {  	
  	this.calculateScrollPosition();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
  	this.calculateScrollPosition();

  	this.fixed = window.scrollY > this.fixScrollPosition;
		var offset = 250 + this.headerHeight;
		var scrollValue = window.scrollY + offset;
		if(scrollValue > this.blockadesimulatorPos)
		{
			this.activeSection = "blockadesimulator";
		}
		else if(scrollValue > this.dachimpycomPos)
		{
			this.activeSection = "dachimpycom";
		}
		else if(scrollValue > this.sqlconfidencePos)
		{
			this.activeSection = "sqlconfidence";
		}
		else if(scrollValue > this.homeworkoutappPos)
		{
			this.activeSection = "homeworkoutapp";
		}
		else
		{
			this.activeSection = "intro";
		}

		console.log(this.blockadesimulatorPos);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event)
  {
  	this.calculateScrollPosition();
  }

  calculateScrollPosition()
  {
  	this.fixScrollPosition = document.getElementById("project-links").offsetTop;  	
  	this.homeworkoutappPos = document.getElementById("homeworkoutapp-project").offsetTop;
  	this.sqlconfidencePos = document.getElementById("sqlconfidence-project").offsetTop;
  	this.dachimpycomPos = document.getElementById("dachimpycom-project").offsetTop;
  	this.blockadesimulatorPos = document.getElementById("blockadesimulator-project").offsetTop;
  	this.headerHeight = document.getElementById("project-links").offsetHeight;
  }

  scrollTo(section)
  {
  	var offset = this.headerHeight;
  	if(!this.fixed) {
  		offset += this.headerHeight;
  	}

  	var positionToScrollTo = 0;
  	switch(section)
  	{
	  	case 'homeworkoutapp': 
	  		positionToScrollTo = this.homeworkoutappPos;
	  		break;
  		case 'sqlconfidence': 
	  		positionToScrollTo = this.sqlconfidencePos;
	  		break;
  		case 'dachimpycom': 
	  		positionToScrollTo = this.dachimpycomPos;
	  		break;
  		case 'blockadesimulator': 
	  		positionToScrollTo = this.blockadesimulatorPos;
	  		break;
  	}
  	window.scrollTo(0, positionToScrollTo - offset);
  }
}
