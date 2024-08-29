// add middlewares here related to actions
const authentication = (req, res, next) => {
    if(true){
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}
module.exports = authentication