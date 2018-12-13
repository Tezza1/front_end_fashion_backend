const express = require('express');
const router = express.Router();

// @route       GET routes/frameworks
// @desc        lists all selected components
// @access      public
router.get('/', (req, res) => {
    res.json({
        msg: 'Hello from Frameworks'
    });
})

module.exports = router;