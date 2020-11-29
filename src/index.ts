import { Linksniai } from './types';
import linksnioKonvertavimas from './lib/linksnioKonvertavimas';

export const vardas = (vardas: string) => {
  return {
    linksnis: (linknsnis: Linksniai) => {
      return linksnioKonvertavimas(vardas, linknsnis);
    }
  }
}
