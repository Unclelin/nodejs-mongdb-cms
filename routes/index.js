var express = require('express');
//var http = require('http');
var url = require("url");
var querystring = require("querystring");
var router = express.Router();

//var article = require('../database/db');

router.get('/', function(req, res, next) {
  res.render('index', { title:'home'});
});

router.get('/newarticle', function(req, res, next) {
    res.render('newarticle', { title:'添加文章'});
});

router.post('/addarticle', function(req, res, next) {
    var db = req.db;
    var collection = db.get("article");
    console.log("addarticle---begining");
    var title = req.body.article_title;
    var content = req.body.article_content;
    var release = req.body.release;
    var author = req.body.author;
    var image = req.body.image;

    console.log("addarticle---title="+title);
    var articleData= {"article_title": title, "article_content": content, "release": release, "author": author, "image": image, "create_time": "2015-09-14 11:25:25"};
    collection.insert(articleData,function (err, doc) {
        if (err) {
            res.render("insert erro");
        } else {
            res.redirect("/articleList");
        }
    });
});

router.get("/delarticle" , function (req , res , next) {
    console.log("delarticle......")
    var db = req.db;
    var collection = db.get('article');
    var articleId = req.query.articleId;
    console.log("articleId="+articleId);
    var deleteData={"_id":articleId};
    collection.remove(deleteData, function (err, doc) {
        if (err) {
            res.render("remove fail");
        } else {
            res.redirect("/articleList");
        }
    });
});

/* GET Articlelist page. */
router.get('/articleList', function(req, res) {
    console.log("find...");
    var db = req.db;
    var collection = db.get('article');
    //console.log(collection);
    collection.find({},{},function(e,docs){
        console.log(docs);
        res.render('articleList', { "title":"列表页",
            "items" : docs
        });
    });
    db.close;
});


// var resdata = [{"article_title":"啦啦","article_content":"哈哈哈哈哈哈","create_time":"2015-09-14 11:25:25","release":"来源网易新闻","author":"jerry","image":"http://cms-bucket.nosdn.127.net/7361659cad4f43e6a99dec842a03248e20170511144531.jpeg"}];
router.get('/article', function(req, res, next) {
    console.log("detail...");
    var db = req.db;
    var collection = db.get('article');

    var articleId = req.query.articleId;

    console.log(articleId);

    var queryStr = {"_id" : articleId };
    //var queryStr = {"article_title" : "1234" };
    collection.find(queryStr, function (erro , doc) {
        console.log(doc);
        if(erro){
            res.render({"title" : "查找失败"})
        }else{
            console.log("success");
            res.render("article" , {"title" : "详细页", "dataDoc" : doc });
            //res.render("article" , {"title" : "详细页"});
        }
    });
});

//console.info("running index.js");
module.exports = router;
