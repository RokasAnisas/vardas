import linksnioKonvertavimas from '../linksnioKonvertavimas';


describe('linksnioKonvertavimas', () => {
  const testVardai = ['Rokas', 'Mindaugas', 'Kamilė', 'Nerijus', 'Kąstytis', 'Ina', 'Saulius'];

  it('Turėtų grąžinti kilmininko linksnyje', () => {
    const expectedResult = ['Roko', 'Mindaugo', 'Kamilės', 'Nerijaus', 'Kąstyčio', 'Inos', 'Sauliaus'];
    const result = testVardai.map(vardas => linksnioKonvertavimas(vardas, 'kilmininkas'));

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti naudininko linksnyje', () => {
    const expectedResult = ['Rokui', 'Mindaugui', 'Kamilei', 'Nerijui', 'Kąstyčiui', 'Inai', 'Sauliui'];
    const result = testVardai.map(vardas => linksnioKonvertavimas(vardas, 'naudininkas'));

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti galininko linksnyje', () => {
    const expectedResult = ['Roką', 'Mindaugą', 'Kamilę', 'Nerijų', 'Kąstytį', 'Iną', 'Saulių'];
    const result = testVardai.map(vardas => linksnioKonvertavimas(vardas, 'galininkas'));

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti įnagninko linksnyje', () => {
    const expectedResult = ['Roku', 'Mindaugu', 'Kamile', 'Nerijumi', 'Kąstyčiu', 'Ina', 'Sauliumi'];
    const result = testVardai.map(vardas => linksnioKonvertavimas(vardas, 'įnagininkas'));

    expect(result).toEqual(expectedResult);
  });
});
