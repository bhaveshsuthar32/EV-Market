// Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.message); // Log the error for debugging purposes

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Default to 500 if no status code set
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Hide stack trace in production
    });
};

module.exports = errorHandler;
