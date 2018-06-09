const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        return res.status(200).json({
            status: `connectajf is running at port ${process.env.PORT || 3000}`
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            stack: err
        });
    }
});

module.exports = router;