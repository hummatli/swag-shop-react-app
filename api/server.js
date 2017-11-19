var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

// Configures
//link format inlocal = "mongodb://localhost/yelp_camp_v10"
//link format in mongo lab = "mongodb://<dbuser>:<dbpassword>@ds149865.mlab.com:49865/sattar-yelp-camp"
var dburl = process.env.DATABASEURL || /*default*/"mongodb://localhost/swag-shop"

mongoose.connect(dburl, { useMongoClient: true }, function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log("CONNECTED TO DB")
    }
} )

var Product = require('./model/product')
var WishList = require('./model/wishlist')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, function() {
   console.log("Swag Shop API running ...") 
})