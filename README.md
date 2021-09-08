socket-api-test
===
This repository contains my attempt to implement realtime database update using socket.io (websocket) to sync update to every connecting clients when a client is changing the database.

## Specifications
This project uses both frontend and backend thing, both uses typescript.

frontend: create-react-app, jss, socket.io-client.

backend: express.js, socket.io, sequelize, sqlite3.

## Trying Out

If you're gonna try to read my code and try changing stuff to study my code, here's a guide:

If you just want try to change some code, `yarn` inside both frontend and backend folder, and `yarn start` in the same directory, simultaneously (both processes are separate and are dependant on each other). The frontend react dev will proxy websocket to backend.

If you want to just check for result, you can `yarn` inside both frontend and backend folder, and then `yarn build` inside the frontend folder, then after that, `yarn start` inside the backend folder.