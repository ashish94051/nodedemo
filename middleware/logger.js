
const logger = (req, res, next) =>{
  // console.log('logger executed');
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};

module.exports = logger;
