const express = require('express')
const router = express.Router()

const Item = require('../../models/Item')
const { json } = require('body-parser')


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

router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    try {
        const item = newItem.save();
        res.status(200).json(item);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});


module.exports = router;