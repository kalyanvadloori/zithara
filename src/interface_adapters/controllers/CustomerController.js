const router = require('express').Router()
const _ = require('lodash')
const moment = require('moment');

const CustomerUseCases = require('../../application_business_rules/use_cases/CustomerUseCases')
const CustomerRepositoryMySql = require('../storage/CustomerRepositoryMySql')
const CustomerRepository = require('../../application_business_rules/repositories/CustomerRepository')

const customerRepository = new CustomerRepository(new CustomerRepositoryMySql())
const customerUseCases = new CustomerUseCases()

router.post('/add', async (req, res) => {

    const { name, email,total_order } = req.body
    var dt = moment().format()

    try{    

        const result = await customerUseCases.add({name, email,total_order,created_at:dt}, customerRepository)
        if (_.isObject(result)){
      
        return res.status(200).json({ status:200, 
            message: 'Your Data successfully added..!'
        })

          }  else {       
           return res.status(203).json({ status: 203,
             message: 'something went wrong..!'
            })
               }
    

} catch (err) {
    res.status(500).json({
        status: "500",
        message: "Internal Server Error",
        error: err.message 
    });
   }
})


router.put('/updatebyid/:id', async (req, res) => {
    console.log('c')

    var {name,email,total_order} = req.body
    try{
    var dt = moment().format()
        const result = await customerUseCases.update(req.params.id,{name,email,total_order,updated_at:dt}, customerRepository)
    
        if (result.length > 0) {

            return res.status(200).json({
                status: 200,
                message: 'successfully updated..!'
            })
    
 }else{
            res.status(202).json({
                status: 202,
                message: "Plese enter valid details",
            });

        }

} catch (err) {
    res.status(500).json({
        status: "500",
        message: "Internal Server Error",
        error: err.message
    });
}
})


router.get('/listbyemail/order', async (req, res) => {

    var {name,email,total_order} = req.body
    try{ 
        var result = await customerUseCases.getlist({name,email,total_order}, customerRepository)

        if (result.length > 0) {
           
            return res.status(200).json({
                status: 200,
                message: 'successfully fetched.!',
                result:result,
            })
    
 }else{
            res.status(202).json({
                status: 202,
                message: "Plese enter valid data",
            });

        }

} catch (err) {
    res.status(500).json({
        status: "500",
        message: "Internal Server Error",
        error: err.message
    });
}
})


module.exports = router