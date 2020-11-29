import { Galūnės, Linksniai } from '../types';
import { galininkas, kilmininkas, naudininkas, vietininkas, įnagininkas, šauksmininkas } from '../constants/index';

const linksnioKonvertavimas = (vardas: string, linksnis: Linksniai): string => {

  const linksnioGalūnės = (): Array<Galūnės> | null  => {
    switch (linksnis) {
      case 'kilmininkas':
        return kilmininkas;
      case 'galininkas':
        return galininkas;
      case 'naudininkas':
        return naudininkas;
      case 'įnagininkas':
        return įnagininkas;
      case 'šauksmininkas':
        return šauksmininkas;
      case 'vietininkas':
        return vietininkas;
      default:
        return null;
    }
  };

  const vardoLinksnioGalūnės: Galūnės | undefined = linksnioGalūnės()?.find(
    e => {
      if (vardas.substr(vardas.length - 3, 3) == e.vard) {
        return e;
      } else if (vardas.substr(vardas.length - 2, 2) == e.vard) {
        return e;
      } else if (vardas.substr(vardas.length - 1, 1) == e.vard) {
        return e;
      } else {
        return undefined;
      }
    }
  );

  if (vardoLinksnioGalūnės) {
    const galunesIlgis: number = vardoLinksnioGalūnės.vard.length;
    const vardasBeGalunes: string = vardas.substr(0, vardas.length - galunesIlgis);
    const islinksniuotasVardas: string = vardasBeGalunes.concat(vardoLinksnioGalūnės.link);

    return islinksniuotasVardas;
  } else {
    // Vardo Kilmė ne Lietuviška
    return vardas;
  }

};

export default linksnioKonvertavimas;
