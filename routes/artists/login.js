const express = require("express")
const router = express.Router()

router.get("/", (request, response) => {
    return response
    .status(200)
    .render("artists/login",)
})

module.exports = router