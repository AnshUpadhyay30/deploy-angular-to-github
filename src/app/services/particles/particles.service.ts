import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // ✅ Service is available globally
})
export class ParticlesService {

  constructor() { }

  // ✅ Ensure this method exists
  createParticles(): void {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 20;

    // Clear existing particles before adding new ones
    particlesContainer.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Random size
      const size = Math.random() * 15 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;

      // Random opacity
      const opacity = Math.random() * 0.5 + 0.1;
      particle.style.opacity = `${opacity}`;

      // Random animation duration and delay
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      particlesContainer.appendChild(particle);
    }
  }
}