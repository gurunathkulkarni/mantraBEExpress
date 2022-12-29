exports.sendResponse = (res, statusCode, message, data, error) => {
    return res.status(statusCode).send({ message, data, error });
}