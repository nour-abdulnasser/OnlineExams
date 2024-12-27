import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../../../enums/socials.enums';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.scss',
})
export class SocialButtonComponent implements OnInit {
  @Input({ required: true }) social!: Social;

  title = '';
  src = ``;
  ngOnInit(): void {
    this.title = this.social.name;
    this.src = `assets/logos/${this.social.name}.svg`;
  }
}
