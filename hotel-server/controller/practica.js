const controller = {};

controller.listreq8 = (req, res) => {
  req.getConnection((err, conn) =>{
    conn.query('SELECT * FROM roombook ', (err, req8) =>{ //obtengo las habitaciones ocupadas

      if (err) {
        res.json(err);
      }

      res.render('pages/req8', {
        data: req8
      });
    });
  });
};

module.exports = controller;
