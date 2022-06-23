const { app }  = require('./app')

//Utils
const { db } = require('./Utils/dataBase.util');

db.authenticate()
    .then(() => console.log('---DataBase Authenticated---'))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log('----DataBase Synced----'))
    .catch(err => console.log(err));
    
app.listen(3000, () => {
    console.log('** Check In - Check Out App **');
});