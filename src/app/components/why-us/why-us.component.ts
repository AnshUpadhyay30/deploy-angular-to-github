import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],  // ✅ Required for *ngFor, ngClass, ngSwitch
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent {
  features = [
    {
      icon: 'lightning-bolt',
      title: 'High Performance',
      description: 'Zilaxy tools are optimized for speed and precision to deliver real-time results.',
      isGreen: true
    },
    {
      icon: 'lock',
      title: 'Data Security',
      description: 'Built with privacy-first architecture to keep your data secure and compliant.',
      isGreen: false
    },
    {
      icon: 'code',
      title: 'AI Expertise',
      description: 'Our models are trained on specialized domain knowledge for maximum relevance.',
      isGreen: true
    },
    {
      icon: 'rocket',
      title: 'Scalable Solutions',
      description: 'Designed to grow with your organization’s evolving needs.',
      isGreen: false
    }
  ];
}