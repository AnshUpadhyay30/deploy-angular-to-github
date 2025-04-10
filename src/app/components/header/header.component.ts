import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Needed for ngStyle, *ngIf, etc.

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isScrolled: boolean = false;        // ✅ Track scroll state
  isMenuOpen: boolean = false;        // ✅ Add missing property for menu toggle

  constructor(private router: Router) {}

  // ✅ Scroll event listener
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > 100;   // Add scrolled class when past 100px
  }

  // ✅ Smooth scrolling functionality
  scrollToSection(sectionId: string): void {
    this.router.navigate(['/'], { fragment: sectionId }).then(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // ✅ Close the menu after navigation (for mobile view)
        if (window.innerWidth <= 1024) {
          this.isMenuOpen = false;   // Close the menu
        }
      }
    });
  }

  // ✅ Toggle menu for mobile view
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const menu = document.querySelector('.menu') as HTMLElement;
    if (menu) {
      menu.classList.toggle('open', this.isMenuOpen);  // Add/remove class based on state
    }
  }
}