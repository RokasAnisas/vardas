import type { Vardas, Linksniai } from './types';
import linksnioKonvertavimas from './lib/linksnioKonvertavimas';

export const vardas = (vardas: string): Vardas => {
  return {
    linksnis: (linknsnis: Linksniai): string => {
      return linksnioKonvertavimas(vardas, linknsnis);
    },
  };
};
