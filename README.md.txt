# Webbapplikation

Denna webbapplikation är ett blogg-system som använder Node.js och Express som ramverk, samt Mongoose för att kommunicera med MongoDB.

## Funktionalitet

* Användare kan skapa och redigera inlägg
* Inlägg kan innehålla text, bilder och andra medier
* Servern lyssnar efter begäranden på port 3000

## Körning och testning

1. Hämta Docker och Docker Compose
2. Kör kommandot `docker-compose up` för att starta applikationen
3. Öppna en webbläsare och gå till `http://localhost:3000` för att visa applikationen
4. Testa funktionerna genom att skapa, redigera och ta bort inlägg

## Tekniska val

* Ramverk: Node.js med Express
* Webbserver: Express.js
* Databas: MongoDB
* Bibliotek: Mongoose
* Paket: body-parser

## Docker och Docker Compose

* För att köra applikationen lokalt, behöver du ha Docker och Docker Compose installerade på din dator.
* Skapa en fil `docker-compose.yml` i rotmappen till din repository med följande innehåll:
```yaml
version: '3'
services:
  server:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo
    environment:
      - MONGO_URI=mongodb://mongo:27017/blog-db
  mongo:
    image: mongo:latest
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=password