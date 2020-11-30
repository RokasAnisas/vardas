import linksnioKonvertavimas from '../linksnioKonvertavimas';

describe('linksnioKonvertavimas', () => {
  const testVardai = [
    'Rokas',
    'Mindaugas',
    'Kamilė',
    'Nerijus',
    'Kąstytis',
    'Ina',
    'Saulius',
    'Alfreda',
    'Ainis',
    'Valys',
    'Neivydis'
  ];

  it('Turėtų grąžinti kilmininko linksnyje', () => {
    const expectedResult = [
      'Roko',
      'Mindaugo',
      'Kamilės',
      'Nerijaus',
      'Kąstyčio',
      'Inos',
      'Sauliaus',
      'Alfredos',
      'Ainio',
      'Valio',
      'Neivydžio'
    ];
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'kilmininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti naudininko linksnyje', () => {
    const expectedResult = [
      'Rokui',
      'Mindaugui',
      'Kamilei',
      'Nerijui',
      'Kąstyčiui',
      'Inai',
      'Sauliui',
      'Alfredai',
      'Ainiui',
      'Valiui',
      'Neivydžiui'
    ];
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'naudininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti galininko linksnyje', () => {
    const expectedResult = [
      'Roką',
      'Mindaugą',
      'Kamilę',
      'Nerijų',
      'Kąstytį',
      'Iną',
      'Saulių',
      'Alfredą',
      'Ainį',
      'Valį',
      'Neivydį'
    ];
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'galininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti įnagninko linksnyje', () => {
    const expectedResult = [
      'Roku',
      'Mindaugu',
      'Kamile',
      'Nerijumi',
      'Kąstyčiu',
      'Ina',
      'Sauliumi',
      'Alfreda',
      'Ainiu',
      'Valiu',
      'Neivydžiu'
    ];
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'įnagininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti vietininko linksnyje', () => {
    const expectedResult = [
      'Roke',
      'Mindauge',
      'Kamilėje',
      'Nerijuje',
      'Kąstytyje',
      'Inoje',
      'Sauliuje',
      'Alfredoje',
      'Ainyje',
      'Valyje',
      'Neivydyje'
    ];
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'vietininkas')
    );

    expect(result).toEqual(expectedResult);
  });

  it('Turėtų grąžinti šauksmininko linksnyje', () => {
    const expectedResult = [
      'Rokai',
      'Mindaugai',
      'Kamile',
      'Nerijau',
      'Kąstyti',
      'Ina',
      'Sauliau',
      'Alfreda',
      'Aini',
      'Valy',
      'Neivydi'
    ];
    const result = testVardai.map(vardas =>
      linksnioKonvertavimas(vardas, 'šauksmininkas')
    );

    expect(result).toEqual(expectedResult);
  });
});
