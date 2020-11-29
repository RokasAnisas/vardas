import { Galūnės, Linksniai } from '../types';
import { kilmininkas } from '../constants/Kilmininkas.constant';

const linksnioKonvertavimas = (vardas: string, linksnis: Linksniai): string => {
  const linksnioGalunes = () => {
    switch (linksnis) {
      case 'kilmininkas':
        return kilmininkas;
      default:
        return null;
    }
  };

  const vardoLinksnioGalunės: Galūnės | undefined = linksnioGalunes()?.find(
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

  let islinksniuotasVardas: string;

  if (vardoLinksnioGalunės) {
    const galunesIlgis: number = vardoLinksnioGalunės.vard.length;
    const vardasBeGalunes: string = vardas.substr(0, vardas.length - galunesIlgis);
    islinksniuotasVardas = vardasBeGalunes.concat(vardoLinksnioGalunės.link);
  } else {
    islinksniuotasVardas = vardas;
  }

  return islinksniuotasVardas;
};

export default linksnioKonvertavimas;
