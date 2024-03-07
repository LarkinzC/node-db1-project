const router = require('express').Router()
const md = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try{
    const accounts = await Account.getAll()
    res.json(accounts)
  } catch(err) {
    next(err)
  }
})

router.get('/:id', md.checkAccountId, async (req, res, next) => {
 res.json(req.account)
})

router.post('/', 
md.checkAccountPayload, 
md.checkAccountNameUnique, 
(req, res, next) => {
  // DO YOUR MAGIC
  try{

  } catch(err) {
    next(err)
  }
})

router.put('/:id', 
md.checkAccountPayload, 
md.checkAccountId,
md.checkAccountNameUnique,
(req, res, next) => {
  // DO YOUR MAGIC
  try{

  } catch(err) {
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{

  } catch(err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  })
})
 
module.exports = router;
