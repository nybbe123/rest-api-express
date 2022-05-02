# Laboration 1 - REST API
Laborationen gick ut på att skapa ett enklare REST-API med NodeJs och Express. API:et har funktionalitet för CRUD (**C**reate, **R**ead, **U**pdate & **D**elete) och det finns fyra stycken endpoints inkluderat (GET, POST, PUT & DELETE). Resursen som används är en array med totalt tre stycken objekt som ämnar att återspegla sko produkter. I projektet är det även inkluderat ett REST clieant tillägg för att enkelt testa REST-API:et.
<br>
<br>

# Kom igång

### I terminalen behöver du göra följande: 

### `npm i`

### `npm start`
<br>
<br>

# Betygskriterier:
- [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE)
- [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest | .http)
- [x] Datan som API:et hanterar sparas lokalt i serverfilen.
- [x] APIét ska svara med 404 om datan saknas.
- [x] Git & GitHub har använts.
- [x] Projektmappen innehåller en README.md fil.
- [x] Uppgiften lämnas in i tid.

# VG: 
- [x] Alla punkter för godkänt är uppfyllda
- [x] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [x] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [x] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
