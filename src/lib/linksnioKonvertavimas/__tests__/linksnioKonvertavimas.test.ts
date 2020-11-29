import linksnioKonvertavimas from '../linksnioKonvertavimas';

describe('linksnioKonvertavimas', () => {
  it('Turetu graziniti kilmininko linksni', () => {
    const name = 'Rokas';
    const expectedResult = 'Roko';
    const result = linksnioKonvertavimas(name, 'kilmininkas');

    expect(result).toBe(expectedResult);
  });
});
