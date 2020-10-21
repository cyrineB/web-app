const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/users.json';
    
 
    // READ
    app.get('/users', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        res.send(JSON.parse(data))
        //a= JSON.parse(data );
        //id= (a["1"]["id"]);
        //res.send({id});
        //console.log(data);
      });
    });
   
    //app.get("/GetuserId", (req, res) => {
      //fs.readFile(dataPath, 'utf8', (err, data) => {
        //if (err) {
          //throw err;
        //}
  
        //res.send(JSON.parse(data));
      //});

    //})
 
}
  module.exports = userRoutes;