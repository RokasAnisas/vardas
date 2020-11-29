import type { Vardas, Linksniai } from './types';
import linksnioKonvertavimas from './lib/linksnioKonvertavimas';

export const vardas = (vardas: string): Vardas => {
  return {
    linksnis: (linknsnis: Linksniai) => {
      return linksnioKonvertavimas(vardas, linknsnis);
    }
  }
}
