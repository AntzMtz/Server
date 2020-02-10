const express=require('express');
const morgan=require('morgan')
const HBS=require('express-handlebars')
const path=require('path');

//Inicialización 
const app = express();
//configuración
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));

app.engine('.HBS',HBS({
    defaultLayout:'main',
    layoutDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.HBS',
    helpers:require('./lib/handlebars')
}));
app.set('view engine', '.HBS');
//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());
//Global variable
app.use((req,res,next)=>{
    next();
});
//Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/autentication'));
app.use('/links',require('./routes/links.js'));
//Public
app.use(express.static(path.join(__dirname,'public')))
//Iniciar servidor
app.listen(app.get('port'), ()=>{
    console.log("El servidor corre en el puerto: "+app.get('port'));
} );
// app.listen(app.get('port') ,()=>{
//     console.log("El servidor corre en el puerto: "+app.get('port'));
    
// })