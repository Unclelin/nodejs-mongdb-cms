var mongoose = require('mongoose');
var conn = mongoose.createConnection('mongodb://127.0.0.1:27017/lincms');
// 链接错误
// conn.on('error', function(error) {
//     console.log(error);
// });;
//
// conn.connection.on('open' ,function(){
//     console.log("连接成功");
// });

// Schema 结构
var articleSchma = new mongoose.Schema({
    article_title :{type : String},
    article_content : {type : String, default : '无'},
    create_time : {type : Date, default: Date.now},
    release  : {type : String},
    author : {type : String},
    image : {type : String},
    vist : {type : Number}
});

// model
var mongooseModel = conn.model('mongoose', articleSchma);

// 添加 mongoose 实例方法
// articleSchma.methods.findbyusername = function(username, callback) {
//     return this.model('mongoose').find({username: username}, callback);
// }

// 添加 mongoose 静态方法，静态方法在Model层就能使用
// articleSchma.statics.findbytitle = function(title, callback) {
//     return this.model('mongoose').find({title: title}, callback);
// }



// 增加记录 基于 entity 操作
// var doc = {article_title : '哈哈哈', article_content : '哈哈哈哈哈哈哈哈哈哈哈哈', release : 'www.163.com',author:'linjm',image:'1234', vist: 1};
// var mongooseEntity = new mongooseModel(doc);
// mongooseEntity.save(function(error) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('saved OK!');
//     }
//     // 关闭数据库链接
//     db.close();
// });