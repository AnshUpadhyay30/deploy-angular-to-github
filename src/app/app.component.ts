import { Component } from '@angular/core';

// ✅ Import all components
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhyUsComponent } from './components/why-us/why-us.component';           // ✅ Import Why Us
import { OurFounderComponent } from './components/our-founder/our-founder.component'; // ✅ Import Our Founder

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProductsComponent,
    TechnologyComponent,
    ContactComponent,
    FooterComponent,
    WhyUsComponent,         // ✅ Include the "Why Us?" section
    OurFounderComponent     // ✅ Include the "Our Founder" section
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zilaxy-website';  // ✅ Website title
}