exports.createPostValidator = (req, res, next) => {
    //Validation for Title
    req.check('title', 'Write a title').notEmpty();
    req.check('title', 'Title must be between 4 to 150 Characters').isLength({
        min:4,
        max: 150
    });

    //Validation for Body
    req.check('body', 'Write a body').notEmpty();
    req.check('body', 'Body must be between 4 to 2000 Characters').isLength({
        min:4,
        max: 2000
    });

    //Checking for erros
    const errors = req.validationErrors()

    //If error, loop and show the errors as they occur.
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({
            error:firstError
        });
    }

    //proceed to the next middleware
    next();

};
