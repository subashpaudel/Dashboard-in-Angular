import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isExpanded = false;
  showSubmenu: boolean = false;
  showSubmenu1: boolean = false;
  showSubmenu2: boolean = false;
  showSubmenu3: boolean = false;
  showSubmenu4: boolean = false;
  showSubmenu5: boolean = false;
  
  isShowing = false;
  


   mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  constructor() { }

  ngOnInit() {
    var dropdown = document.getElementsByClassName("dropdown");
    var i;
    
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      } else {
      dropdownContent.style.display = "block";
      }
      });
    }
  
   
    
        
      
  }

}
