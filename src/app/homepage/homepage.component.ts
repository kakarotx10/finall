import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 
  windowScrolled: boolean = false;
  twoDigit:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
      var scrollTop = document.documentElement.scrollTop;
      var docHeight = document.body.clientHeight;
      var winHeight = document.documentElement.clientHeight;
      var scrollPercent = (scrollTop) / (docHeight - winHeight);
      var scrollPercentRounded = Math.round(scrollPercent * 100);

      let span = <HTMLDivElement>document.getElementById('scrollPercentLabelSpan');
      // console.log(scrollPercentRounded);
      span.innerHTML = JSON.stringify(scrollPercentRounded);
      if(scrollPercentRounded>0&&scrollPercentRounded<10){
        
      }
      
      if(scrollPercentRounded>9){
        this.twoDigit=true;
      }
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
      this.twoDigit=false;
    }
  }

  repositionLabel() {
    let div = <any>document.getElementById('scrollPercentLabel');
    var winWidth = document.documentElement.clientWidth;
    var winHeight = document.documentElement.clientHeight;
    div.style.position = 'fixed';
    div.style.left = (winWidth - div.outerWidth()) / 2;

    div.style.top = ((winHeight - div.outerHeight()) / 2) - div.height();
  }


}

