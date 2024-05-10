const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(8080, function()
{
    console.log("listening on 8080");
});

app.get('/', function(req,res)
{
    res.sendFile(__dirname + '/title.html');
})

app.get('/search', function(req,res)
{
    res.sendFile(__dirname + '/search.html');
})
app.get('/login', function(req,res)
{
    res.send("login");
})
app.get('/signUp', function(req,res)
{
    res.send("signUp");
})
app.get('/logout', function(req,res)
{
    res.send("logout");
})
app.get('/home', function(req,res)
{
    res.sendFile(__dirname + '/home.html');
})
app.get('/search', function(req,res)
{
    res.send("search");
})