// import pg promise library interface for PostgreSQL to handel database requests
let pgp = require('pg-promise')();
// load the postgress database location from  .env
let connString = process.env.DATABASE_URL
// connect  db promise to my database
let db = pgp(connString);

// The axios get comes here
// function getAlltweed(req, res, next) {
//   // return all the records from the database using pg-promise method any , then
//   db.any('SELECT * FROM tweedrfeed')
//     .then(function(data) {
//       console.log('DATA:', data);
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'All tweeds Retrieved '
//         });
//     })
//     .catch(function(err) {
//       return next(err);
//     });
// }
// The axios get : id comes here
// function getOnetweed(req, res, next) {
//   // parse the requested url to get the required tweed id using pg-promise method one , then
//   let id = parseInt(req.params.id);
//     db.one('select * from tweedrfeed where id = $1', id)
//     .then(function(data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'One tweed Retrieved'
//         });
//     })
//     .catch(function(err) {
//       return next(err);
//     });
// }
// this function add one tweed to the database using postman

/*
http://localhost:3000/api/allergies
{
  "userid" : 123456,
    "eggsallergy": true,
    "fishallergy": false,
    "milkallergy": true,
    "peanutsallergy": false,
    "sesameallergy": false,
    "shellfishallergy": false,
    "soyallergy": false,
    "treenutsallergy": false,
    "wheatallergy": false
  }
);*/



function adduserpref(req, res, next) {
  console.log(req);
  console.log('req.body ===>', req.body)
   db.none('insert into allergies (userid ,eggsallergy , fishallergy , milkallergy, peanutsallergy, sesameallergy, shellfishallergy , soyallergy , treenutsallergy,wheatallergy)' +
      'values(${userid} , ${eggsallergy} , ${fishallergy} , ${milkallergy},${peanutsallergy},${sesameallergy} ,${shellfishallergy},${soyallergy},${treenutsallergy},${wheatallergy}  )',
      req.body)
    .then(function() {
      res.status(200)
        .json({
          status: 'success',
          message: 'One user preference was added'
        });
    })
    .catch(function(err) {
      console.log("This user already exist in the database");
      return next(err);
    });
}
/*
    id SERIAL PRIMARY KEY,
    userid  int REFERENCES allergies(userid) NOT NULL,
    barcode BIGINT REFERENCES products(barcode) NOT NULL,
    eggs BOOLEAN NOT NULL,
    fish BOOLEAN NOT NULL,
    milk BOOLEAN NOT NULL,
    peanuts BOOLEAN NOT NULL,
    sesame BOOLEAN NOT NULL,
    shellfish BOOLEAN NOT NULL,
    soy BOOLEAN NOT NULL,
    treenuts BOOLEAN NOT NULL,
    wheat BOOLEAN NOT NULL,
    result BOOLEAN NOT NULL
*/



function addnewproduct(req, res, next) {
  console.log(req);
  console.log('req.body ===>', req.body)
   db.none('insert into information ( userid ,barcode , product, eggs, fish , milk, peanuts, sesame, shellfish , soy , treenuts,wheat)' +
      'values(${userid}, ${barcode},${product}, ${eggs} , ${fish} , ${milk},${peanuts},${sesame} ,${shellfish},${soy},${treenuts},${wheat}  )',
      req.body)
    .then(function() {
      res.status(200)
        .json({
          status: 'success',
          message: 'One product allergy check result was added'
        });
    })
    .catch(function(err) {
      console.log(err);
      return next(err);
    });
}

// change the information inside the database
/*
 put
  {
    "id" : 12,
    "tweed": "I  can develop APIs",
  }
*/
// function updatetweed(req, res, next) {
//   db.none('update tweedrfeed set tweed=$1 where id=$2', [req.body.tweed,parseInt(req.params.id)
//     ])
//     .then(function() {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: ' one tweed was Updated'
//         });
//     })
//     .catch(function(err) {
//       console.log(err)
//       return next(err);
//     });
// }
// this function delete the tweeds which it's id was after url
// function deletetweed(req, res, next) {
//   let id = parseInt(req.params.id);
//   db.result('delete from tweedrfeed where id = $1', id)
//     .then(function(result) {
//       res.status(200)
//         .json({
//           status: 'success',
//           message: `Removed ${result.rowCount} tweed`
//         });
//     })
//     .catch(function(err) {
//       return next(err);
//     });
// }


// router.get('/api/:userid', db.getuserpref);
// router.post('/api/:userid', db.adduserpref);
// router.put('/api/:userid', db.updateuserpref);
// router.post('/api/:userid', db.addnewproduct);
// router.get('/api/:userid', db.getproduct);
// router.delete('/api/:id', db.deleteproduct);

//CRUD
module.exports = {
  //getuserpref: getuserpref, //read
  adduserpref: adduserpref, //add
  //updateuserpref:updateuserpref, //Edit
  addnewproduct: addnewproduct,   //add
  //getproduct: getproduct,   //read
  //deleteproduct: deleteproduct    //DELETE
};



