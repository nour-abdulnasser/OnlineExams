import { SocialPlatform } from './social-platform.enums';

export interface Social {
  name: SocialPlatform;
  brandName: string;
  logo?: string;
}

export class Socials {
  static OPTIONS: Social[] = [
    { name: SocialPlatform.Google, brandName: 'Google' },
    { name: SocialPlatform.Twitter, brandName: 'Twitter' },
    { name: SocialPlatform.Facebook, brandName: 'Facebook' },
    { name: SocialPlatform.Apple, brandName: 'Apple' },
  ];
}
