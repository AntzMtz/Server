// const dbConnection = require('../../config/dbConnection');
// module.exports = app => {
//   const connection = dbConnection();
  // app.get('/', (req, res) => {
  //   connection.query('SELECT * FROM Usuarios', (err, result) =>{
  //     res.render('news/news',{
  //       UsuarioRes: result
  //     })
  //   })
      
  // });
  // app.post('/news',(req,res)=>{
  //   const{IdU,Nom,Pass}=req.body;
  //   connection.query('Insert into Usuarios set ?',
  //   {
  //     IdUser:IdU,
  //     Nombre:Nom,
  //     Password:Pass
  //   }
  //   , (err,result)=>{
  //     res.redirect('/');
  //   });
  //   console.log(req.body);
    
  // });
// }




// module.exports = app => {

//   const connection = dbConnection();

//   app.get('/news', (req, res) => {
//     connection.query('SELECT * FROM news', (err, result) => {
//       res.render('news/news', {
//         news: result
//       });
//     });
//   });

//   app.post('/news', (req, res) => {
//     const { title, news } = req.body;
//     connection.query('INSERT INTO news SET ? ',
//       {
//         title,
//         news
//       }
//     , (err, result) => {
//       res.redirect('/news');
//     });
//   });
// };
module.exports = app => {
  app.get('/', (req, res) => {
      res.send('Hola Mundo')
  });
}