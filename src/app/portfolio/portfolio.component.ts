import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    { image: 'assets/2.png', link: 'https://github.com/user/project1' },
    { image: 'assets/3.png', link: 'https://github.com/user/project2' },
    { image: 'assets/4.png', link: 'https://github.com/aliaa11/Facebook_Bootstrap5.git' },
    { image: 'assets/5.png', link: 'https://github.com/user/project4' },
    { image: 'assets/6.png', link: 'https://github.com/aliaa11/DentalClinic.git' },
    { image: 'assets/demo.png', link: 'https://el-madrasaa.netlify.app/' }
  ];
}
