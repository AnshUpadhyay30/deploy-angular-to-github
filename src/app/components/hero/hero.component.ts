import { Component, OnInit } from '@angular/core';
import { NgxParticlesModule } from "@tsparticles/angular";  // ✅ Import here
import AOS from 'aos';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxParticlesModule],   // ✅ Import module for particles
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({ duration: 1200, once: true });
  }

  particlesLoaded(event: any): void {
    console.log('Particles loaded:', event);
  }
}