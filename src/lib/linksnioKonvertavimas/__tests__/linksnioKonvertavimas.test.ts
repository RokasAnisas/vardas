import linksnioKonvertavimas from '../linksnioKonvertavimas';
import { testiniaiScenarijai } from '../mocks/testiniaiVardai';

describe('linksnioKonvertavimas', () => {
  const testVardai = testiniaiScenarijai.map(vardoObj => vardoObj.var);

  it('Turėtų grąžinti kilmininko linksnyje', () => {
    const expectedResult = testiniaiScenarijai.map(vardoObj => vardoObj.kil);
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'kilmininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti naudininko linksnyje', () => {
    const expectedResult = testiniaiScenarijai.map(vardoObj => vardoObj.nau);
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'naudininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti galininko linksnyje', () => {
    const expectedResult = testiniaiScenarijai.map(vardoObj => vardoObj.gal);
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'galininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti įnagninko linksnyje', () => {
    const expectedResult = testiniaiScenarijai.map(vardoObj => vardoObj.įna);
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'įnagininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti vietininko linksnyje', () => {
    const expectedResult = testiniaiScenarijai.map(vardoObj => vardoObj.vie);
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'vietininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti šauksmininko linksnyje', () => {
    const expectedResult = testiniaiScenarijai.map(vardoObj => vardoObj.šau);
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'šauksmininkas')
    );

    expect(result).toEqual(expectedResult);
  });
});
