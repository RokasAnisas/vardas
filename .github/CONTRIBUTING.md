## Kūrimas

1. `npm install`
2. `npm run start`
3. Kad pamatyti rezultatą gyvai, atsidarykite `dist/` direktoriją, joje paleiskite `yarn link` (npm link taipogi veikia, tačiau yarn link veikia paprasčiau). Tada atsidarykite kokį nors kitą projektą, ir paleiskite `yarn link vardas`, tai suveiks lyg būtumėt isirašę `vardas` biblioteką per npm, tik veiks lokaliai, iš `dist/` direktorijos.
