import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.onWindowScroll(); 
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const progressBars = this.el.nativeElement.querySelectorAll('.progress-bar');

    progressBars.forEach((bar: HTMLElement, index: number) => {
      const sectionTop = bar.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight * 0.75) {
        const width = bar.getAttribute('data-width') || '0%';
        
 
        setTimeout(() => {
          bar.style.width = width;
        }, index * 300); 
      }
    });
  }
}
