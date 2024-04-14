const vardai: Array<TestGroup> = [
  {
    var: 'Rokas',
    kil: 'Roko',
    nau: 'Rokui',
    gal: 'Roką',
    įna: 'Roku',
    vie: 'Roke',
    šau: 'Rokai',
  },
  {
    var: 'Mindaugas',
    kil: 'Mindaugo',
    nau: 'Mindaugui',
    gal: 'Mindaugą',
    įna: 'Mindaugu',
    vie: 'Mindauge',
    šau: 'Mindaugai',
  },
  {
    var: 'Kamilė',
    kil: 'Kamilės',
    nau: 'Kamilei',
    gal: 'Kamilę',
    įna: 'Kamile',
    vie: 'Kamilėje',
    šau: 'Kamile',
  },
  {
    var: 'Nerijus',
    kil: 'Nerijaus',
    nau: 'Nerijui',
    gal: 'Nerijų',
    įna: 'Nerijumi',
    vie: 'Nerijuje',
    šau: 'Nerijau',
  },
  {
    var: 'Kąstytis',
    kil: 'Kąstyčio',
    nau: 'Kąstyčiui',
    gal: 'Kąstytį',
    įna: 'Kąstyčiu',
    vie: 'Kąstytyje',
    šau: 'Kąstyti',
  },
  {
    var: 'Ina',
    kil: 'Inos',
    nau: 'Inai',
    gal: 'Iną',
    įna: 'Ina',
    vie: 'Inoje',
    šau: 'Ina',
  },
  {
    var: 'Alfreda',
    kil: 'Alfredos',
    nau: 'Alfredai',
    gal: 'Alfredą',
    įna: 'Alfreda',
    vie: 'Alfredoje',
    šau: 'Alfreda',
  },
  {
    var: 'Ainis',
    kil: 'Ainio',
    nau: 'Ainiui',
    gal: 'Ainį',
    įna: 'Ainiu',
    vie: 'Ainyje',
    šau: 'Aini',
  },
  {
    var: 'Valys',
    kil: 'Valio',
    nau: 'Valiui',
    gal: 'Valį',
    įna: 'Valiu',
    vie: 'Valyje',
    šau: 'Valy',
  },
  {
    var: 'Neivydis',
    kil: 'Neivydžio',
    nau: 'Neivydžiui',
    gal: 'Neivydį',
    įna: 'Neivydžiu',
    vie: 'Neivydyje',
    šau: 'Neivydi',
  },
  {
    var: 'Vacys',
    kil: 'Vacio',
    nau: 'Vaciui',
    gal: 'Vacį',
    įna: 'Vaciu',
    vie: 'Vacyje',
    šau: 'Vacy',
  },
  {
    var: 'Domantas',
    kil: 'Domanto',
    nau: 'Domantui',
    gal: 'Domantą',
    įna: 'Domantu',
    vie: 'Domante',
    šau: 'Domantai',
  },
  {
    var: 'Vilius',
    kil: 'Viliaus',
    nau: 'Viliui',
    gal: 'Vilių',
    įna: 'Viliumi',
    vie: 'Viliuje',
    šau: 'Viliau',
  },
];

const vietoVardziai: Array<TestGroup> = [
  {
    var: 'Šiauliai',
    kil: 'Šiaulių',
    nau: 'Šiauliams',
    gal: 'Šiaulius',
    įna: 'Šiauliais',
    vie: 'Šiauliuose',
    šau: 'Šiauliai',
  },
  {
    var: 'Kaunas',
    kil: 'Kauno',
    nau: 'Kaunui',
    gal: 'Kauną',
    įna: 'Kaunu',
    vie: 'Kaune',
    šau: 'Kaunai',
  },
  {
    var: 'Vilnius',
    kil: 'Vilniaus',
    nau: 'Vilniui',
    gal: 'Vilnių',
    įna: 'Vilniumi',
    vie: 'Vilniuje',
    šau: 'Vilniau',
  },
  {
    var: 'Mažeikiai',
    kil: 'Mažeikių',
    nau: 'Mažeikiams',
    gal: 'Mažeikius',
    įna: 'Mažeikiais',
    vie: 'Mažeikiuose',
    šau: 'Mažeikiai',
  },
  {
    var: 'Druskininkai',
    kil: 'Druskininkų',
    nau: 'Druskininkams',
    gal: 'Druskininkus',
    įna: 'Druskininkais',
    vie: 'Druskininkuose',
    šau: 'Druskininkai',
  },
];

export const testiniaiScenarijai = [...vardai, ...vietoVardziai];

interface TestGroup {
  var: string;
  kil: string;
  nau: string;
  gal: string;
  įna: string;
  vie: string;
  šau: string;
}
