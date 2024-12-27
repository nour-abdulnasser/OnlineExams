import { Component, OnInit } from '@angular/core';
import { SocialButtonComponent } from '../social-button/social-button.component';
import { Socials } from '../../../enums/socials.enums';
@Component({
  selector: 'app-socials-list',
  standalone: true,
  imports: [SocialButtonComponent],
  templateUrl: './socials-list.component.html',
  styleUrl: './socials-list.component.scss',
})
export class SocialsListComponent {
  constructor() {}
  socials = Socials.OPTIONS;
}
