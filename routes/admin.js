const express = require("express")
const router = express.Router()

router.get("/", (request, response) => {
    
    //I'm not entirely sure how to pass in objects for the user's profile but here it is
    const profile = "User profile"

    return response
    .status(200)
    .render("admin", {profiles: profile})
})

module.exports = router