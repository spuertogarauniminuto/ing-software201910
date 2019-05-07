'use strict'

const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('pages/index')
})

router.get('/req1', (req, res) => {
  connection.query('SELECT * FROM room ', (err,result) => {


    res.render('pages/req1',{
      data : result
    })
  })
})

router.get('/req2', async (req, res) => {
  await db.query({ sql: 'SELECT * FROM room WHERE room.type = ?', values: [req.query.type] }, (error, results, fields) => {
    if (error) throw error
    res.render('pages/req2', {rooms: results})
  })
})

router.get('/req3', (req, res) => {
  res.render('pages/req3')
})

router.get('/req4', (req, res) => {
  db.query('SELECT * FROM roombook',(err,result) => {
    res.render('pages/req4',{
      data : result
    });
  });
});

router.post ('/req4', (req, res) => {
  const { id, TRoom, nodays } = req.body
  db.query('SELECT * FROM roombook WHERE ? AND ? AND ?',
  [{id}, {TRoom}, {nodays}], (err, result) => {
    res.render('pages/req4', {
      data : result
    });
  });
});

router.get('/req5', (req, res) => {
  res.render('pages/req5')
})

router.get('/req6', (req, res) => {
  res.render('pages/req6')
})

router.get('/req7', (req, res) => {
  res.render('pages/req7')
})

router.get('/req8', (req, res) => {
  res.render('pages/req8')
})
router.get('/req8/reservas', (req, res) => {
  res.render('pages/req8_Reservas')
})

router.get('/req9', (req, res) => {
  res.render('pages/req9')
})

router.get('/req10', (req, res) => {
  res.render('pages/req10')
})

router.get('/req11', (req, res) => {
  res.render('pages/req11')
})

router.get('/req12', (req, res) => {
  res.render('pages/req12')
})

router.get('/req13', (req, res) => {
  res.render('pages/req13')
})

router.get('/req14', (req, res) => {
  res.render('pages/req14')
})

router.get('/req15', (req, res) => {
  res.render('pages/req15')
})

router.get('/req16', (req, res) => {
  res.render('pages/req16')
})

module.exports = router
