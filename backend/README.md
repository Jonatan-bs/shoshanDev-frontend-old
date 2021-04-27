# Strapi application


Seed database:
mongorestore --gzip --uri mongodb+srv://jonatanbs:<PASSWORD>@cluster0.sbzvi.mongodb.net --db <NEW DATABASE NAME> <PATH>

Dump from database (to directory: ./dump/DB):
mongodump --gzip -o ./dump/DB/<DATE> --uri mongodb+srv://jonatanbs:<PASSWORD>@cluster0.sbzvi.mongodb.net/<DATABASE NAME>

Database:
https://cloud.mongodb.com/v2

Dump strapi configuration (to directory: ./dump):
yarn strapi configuration:dump -p --file dump/strapiConfDump.json
