// Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

// Webpack Configuration
import webpackConfig from '../../webpack.config.babel';

// Api 
import blogApi from './api/blog';

// Helpers
import * as hbsHelper from '../libs/handlebars';

// Utils
import { isMobile } from '../libs/utils/device';

//Server port 
const port = 3000;

// Enviroment 
const isDevelopment = process.env.NODE_ENV !== 'production';

//Express app
const app = express();

// Public 
app.use(express.static(path.join(__dirname,'../public')));

// Handlebars setup
app.engine('.hbs',exphbs({
	extname:'.hbs',
	helpers: hbsHelper
}));


// View engine setup
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', '.hbs');

//Webpack Compiler
const webpackCompiler = webpack(webpackConfig);

//Webpack middleware
if(isDevelopment){
	app.use(webpackDevMiddleware(webpackCompiler));
	app.use(webpackHotMiddleware(webpackCompiler));
}

// Device detector
app.use((req, res, next) =>{
	res.locals.isMobile = isMobile(req.headers['user-agent']);
	return next();
});

// Api dispatch
app.use('/api/blog', blogApi);

//Sending all the trafic to react
app.get('*',(req, res) =>{
	res.render('frontend/index',{
		layout: false
	});
});

//listen port
app.listen(port, err => {
	if(!err){
		open(`http://localhost:${port}`);
	}
});	