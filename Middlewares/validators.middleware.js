const { body, validationResult } = require('express-validator');

const { AppError } = require('../Utils/appError.util');

const checkRegistry = async (req, res, next) => {
    const errors = validationResult(req);

    //console.log(errors);
    if (!errors.isEmpty()) {
		// Array has errors
        const errorMsgs = errors.array().map(err => err.msg);
        const message = errorMsgs.join(' ');
        return next(new AppError(message, 400));
	}
    next();
};

const createRegistryValidators = [
    body('entranceTime')
    .isDate().withMessage('Invalid Entrance time.'),
    
    body('exitTime')
    .isDate().withMessage('Exit Time must be empty.')
    .isEmpty().withMessage('Exit Time must be  empty.'),
    checkRegistry,
];

module.exports = { createRegistryValidators };