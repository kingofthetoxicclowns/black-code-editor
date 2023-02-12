var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about')
var adminRouter = require('./routes/admin')
var deleteRouter = require('./routes/delete')
var editRouter = require('./routes/edit')
var editorRouter = require('./routes/editor')
var loginRouter = require('./routes/login')
var logoutRouter = require('./routes/logout')
var createRouter = require('./routes/create')
const PORT = 3000

var app = express();
login = false;

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/admin', adminRouter);
app.use('/delete', deleteRouter);
app.use('/edit', editRouter);
app.use('/editor', editorRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/create', createRouter);

app.use(function(req,res,nest) {
  res.status(404).render('../views/pages/error')
});

app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});