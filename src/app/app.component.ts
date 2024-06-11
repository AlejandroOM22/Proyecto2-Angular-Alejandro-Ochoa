import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './pagna/body/body.component';
import { NavbarComponent } from './pagna/navbar/navbar.component';
import { FooterComponent } from './pagna/footer/footer.component';
import { SliderComponent } from './pagna/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodyComponent, NavbarComponent, FooterComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoAngular1';
}
