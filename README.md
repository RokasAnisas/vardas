# Vardas

Biblioteka skirta paversti lietuviškus vardus iš vardininko linksnio į bet kurį kitą.
https://www.npmjs.com/package/vardas

## Naudojimas

`npm i vardas`

arba

`yarn add vardas`

```
import { vardas } from 'vardas'; || const { vardas } = require('vardas');

...

vardas('Rokas').linksnis('kilmininkas'); // Roko
vardas('Mindaugas').linksnis('naudininkas'); // Mindaugui
vardas('Kamilė').linksnis('galininkas'); // Kamilę
vardas('Artūras').linksnis('įnagininkas'); // Artūru
vardas('Ainis').linksnis('vietininkas'); // Ainyje
vardas('Domantas').linksnis('šauksmininkas'); // Domantai
```
