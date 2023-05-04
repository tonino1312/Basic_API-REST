const { Router } = require("express");
const router = Router();


router.get('/test', (req, res)=>{
    const data = {
        "name" : "Carlos",
        "website": "carlos.com"
    };
    res.json(data);
});

module.exports = router;