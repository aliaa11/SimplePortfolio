import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  imports: [
     HeaderComponent,
     FooterComponent,
     NavbarComponent,
     AboutMeComponent,
     SkillsComponent,
     PortfolioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  isAboutMeVisible = false;
  isSkillsVisible = false;
  isPortfolioVisible = false;

  @ViewChild('aboutMeTrigger', { static: false }) aboutMeTrigger!: ElementRef;
  @ViewChild('skillsTrigger', { static: false }) skillsTrigger!: ElementRef;
  @ViewChild('portfolioTrigger', { static: false }) portfolioTrigger!: ElementRef;

  ngAfterViewInit() {
    const options = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.3, // عندما يصبح 30% من العنصر ظاهرًا
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // أضف كلاس `visible` للعنصر
          observer.unobserve(entry.target); // أوقف المراقبة بعد الظهور
        }
      });
    }, options);
    
    // حدد كل العناصر التي تحتاج إلى أنيميشن عند الظهور
    document.querySelectorAll(".lazy-load").forEach((element) => {
      observer.observe(element);
    });
    
    

    observer.observe(this.aboutMeTrigger.nativeElement);
    observer.observe(this.skillsTrigger.nativeElement);
    observer.observe(this.portfolioTrigger.nativeElement);
  }
}

