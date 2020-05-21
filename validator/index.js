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



exports.userSignUpValidator = (req, res, next) => {
  //Name not null and between 4-10 characters
  req.check("name", "Name is required").notEmpty();
  //Email is not null, valid and normalized
    req.check("email", "Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 2,
            max: 32
        })

    //Check for password
    req.check('password', 'Password is required').notEmpty();
    req.check('password')
        .isLength({min:6})
        .withMessage("Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must conatin a number")


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
