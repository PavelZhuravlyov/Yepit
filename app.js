var express   = require('express'),
	HttpError = require('./error').HttpError,
	nconf     = require('./config'),	
	app       = express();

app.use(require('./middleware/sendHttpError'));
app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/publick'));


app.get('/news', function(req, res, next){
	res.render('news', {
		title: "Новости" 
	});
});

app.use(function(req, res, next){
	next(err);
});

app.use(function(err, req, res, next){
	if(typeof err == 'number') err = new HttpError(err);
	else if(err instanceof HttpError) res.sendHttpError(err);
	else {
		if(app.get('env') == 'development'){
		res.render('error', {
			title: "Error!",
			error: new HttpError(404, "Page not found")
		});
		} else{
			err = new HttpError(500);
			res.sendHttpError(err);	
		}
	}
});

app.listen(3000);