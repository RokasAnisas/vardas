import { Linksniai } from '../types';
import { kilmininkas } from './linksniuGalunes';

const linksnioKonvertavimas = (vardas: string, linksnis: Linksniai): string => {
  return vardas + linksnis;
}

export default linksnioKonvertavimas;
