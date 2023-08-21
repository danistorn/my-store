function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err); //MIDDLEWARE DE TIPO ERROR, porque le enviamos el error
}


function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}


function boomErrorHandler(err, req, res, next) {
  if(err.isBoom) { //cada vez que un error es generado por la libreria boom, le agrega la propiedad "isBoom"
    const { output } = err;
    res.status(output.statusCode).json(output.payload); //status quou dinamico
  } else {
    next(err); //Middleware del tipo normal.
  }
}



module.exports = { logErrors, errorHandler }
