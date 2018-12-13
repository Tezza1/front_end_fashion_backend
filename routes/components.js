const express = require('express');
const router = express.Router();

// @route       GET routes/components
// @desc        main pages that lists all components
// @access      public
router.get('/', (req, res) => {
    res.json({
        msg: 'Hello from Components'
    });
})

module.exports = router;