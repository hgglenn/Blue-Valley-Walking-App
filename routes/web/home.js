var express = require("express");

var router = express.Router();

console.log("Home");

router.get("/", function(req, res)
{
    console.log("Home Page");
    res.render("home/");
});

router.get("/about", function(req, res)
{
    console.log("About Page");
    res.render("home/about");
});

router.get("/login", function(req, res)
{
    console.log("Login Page");
    res.render("home/login");
});

router.get("/forgot_password", function(req, res)
{
    console.log("Forgot Password Page");
    res.render("home/forgot_password");
});

router.get("/create_an_account", function(req, res)
{
    console.log("Create Account Page");
    res.render("home/create_an_account");
});

module.exports = router;
