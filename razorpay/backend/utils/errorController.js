const CustomError = require('./customError')

const devErrors = (res, error) => {
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stackTrace: error.stack,
        error: error
    })
}

const prodErrors = (res, error) => {
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message
    })
}

const castErrorHandler = (err) => {
    const message = `Invalid value for ${err.path}:${err.value}!`
    return new CustomError(message, 400)
}

const duplicateKeyErrorHandler = (err) => {
    const keys = Object.keys(err.keyValue);
    const firstKey = keys[0];
    const message = `${firstKey} already exists. Please try with a different value.`
    return new CustomError(message, 400)
}

const validationErrorHandler = (err) => {
    const errors = Object.values(err.errors).map(val => val.message);
    const errorMessages = errors.join(', ');
    const message = `Invalid input data : ${errorMessages}`
    return new CustomError(message, 400)
}

const handleExpiredJWT = (err) => {
    return new CustomError('JWT has expired', 401)
}

const handleJWTError = (err) => {
    return new CustomError('Invalid Token, Please Login', 401)
}

module.exports = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500
    error.status = error.status || 'error'

    if (process.env.NODE_ENV === 'production') {
        if (error.name === 'CastError') error = castErrorHandler(error)
        if (error.code === 11000) error = duplicateKeyErrorHandler(error)
        if (error.name === 'ValidationError') error = validationErrorHandler(error)
        if (error.name === 'TokenExpiredError') error = handleExpiredJWT(error)
        if (error.name === 'JsonWebTokenError') error = handleJWTError(error)
        prodErrors(res, error)
    } else if (process.env.NODE_ENV === 'development') {
        devErrors(res, error)
    }
}