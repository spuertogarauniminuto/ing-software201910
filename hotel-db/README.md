# hotel-db

A simple connector of database

## Usage

```javascript
const db = require('hotel-db')

db.query('SELECT 1 + 1' (err, results , fields) =>{
    if (err) throw err
    console.log(results)
})
```

### file config

Change connection variables in the config.js file

```javascript
// example
const config = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'test'
}
```
