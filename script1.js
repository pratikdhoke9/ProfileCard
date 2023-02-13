// (function(){
//     var name = "first";
//     setTimeout(function(){
//         console.log(name);
//     },1000)
// })();
// {
//     let name = "first";
//     setTimeout(function(){
//         console.log(name);
//     },1000)
// }
//print();
// var name="file2";
// console.log(name);

                    //function call by normal way or plane way
/*
'use strict';

var demo=function(x,y){
    console.log(this);
    console.log(x,y);
}

//demo();

                    //function call by object

var obj={
    'prop1' : 2,
    'print' : function(){
        console.log(this);
    }
}
//obj.print();
demo.call(obj,3,4);

demo.apply(obj,[5,6]);
*/

// function vehicle(numWheel,price){
//     this.numWheel=numWheel;
//     this.price=price;
//     this.setPrice = function(){
//         return this.price;
//     }
// }
// var vehicle1 = new vehicle(2,50000);
// var vehicle2 = new vehicle(4,500000);

// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const homeStarting ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil deserunt labore ab modi? Excepturi ipsam, commodi quibusdam aut sunt tempore eos deleniti exercitationem, praesentium blanditiis aspernatur maxime. Necessitatibus, deleniti?";
// const app= express();

// app.set('view engine','ejs');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// app.get("/", function(req,res){
//     res.render("index", {startingContent: homeStarting})
// });