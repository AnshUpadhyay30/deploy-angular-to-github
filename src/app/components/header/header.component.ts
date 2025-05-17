import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  // Close menu if user resizes to desktop
  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 1024 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  scrollToSection(sectionId: string): void {
    this.router.navigate(['/'], { fragment: sectionId }).then(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Auto-close mobile menu if small screen
        if (window.innerWidth <= 1024) this.isMenuOpen = false;
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}