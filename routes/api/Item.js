const express = require('express')
const router = express.Router()

const Item = require('../../models/Item')


//@route   GET api/items
//@desc    Get all items
//@access  Public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

//@route   POST api/items
//@desc    Create new item
//@access  Public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})


module.exports = router;