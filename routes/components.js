const express = require('express');
const router = express.Router();

// Load Component model
const Component = ('../model/Component');

// @route       GET routes/components
// @desc        main pages that lists all components
// @access      public
router.get('/', (req, res) => {
    res.json({
        msg: 'Hello from Components'
    });
});

// @route       GET routes/components/select
// @desc        select a component
// @access      public
router.post('/select', (req, res) => {
    Component.findOne({
        component: req.body.component
    })
    .then(component => {
        if(component) {
            console.log(component)
            // add component to the array
        }
        else {
            console.log("there was an error");
        }
    })
    .catch()
});


module.exports = router;