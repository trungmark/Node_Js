var express = require("express");
var app = express(); // tao 1 ung dung tu express module
// var port = 5000;
//để cho lên heroku thay bằng cổng sau
var port = process.env.PORT || 5000;

app.listen(port,function (){
    console.log("Server is running....");
});
// cap quyen truy cap cac file static (css, img, jquery...)
app.use(express.static("public"));
app.set("view engine","ejs");// Báo rằng sẽ sử dụng ejs làm view engine
var count = 0;// dem so luong nguoi vao web
var products = [
    {
        id:1,
        name:"Product 1",
        image:"Images/labs2.png"
    },
    {
        id:2,
        name:"Product 2",
        image:"Images/labs2.png"
    },
    {
        id:3,
        name:"Product 3",
        image:"Images/labs2.png"
    },
    {
        id:4,
        name:"Product 4",
        image:"Images/labs2.png"
    }
];
// routing - bo dinh tuyen (nhan vien cua van phong)
app.get("/",function (req,res){ // trang chu
res.send("<html><head><title</head></html>"); // html- chỉ là 1 chuỗi đối với máy chủ
res.sendFile(__dirname+"/public/demobootstrap.html");  //__dirname -> xuất cho chúng ta 1 chuỗi đường dẫn chính xác trên máy tính đến thư mục này
count++;
    res.render("home",{
        count: count
    });// tu dong hieu de lay file home.ejs trong thu muc views
});

// app.get("/ke-toan",function (req,res){
//     // res.send("Xin chao, vui long nop tien..");
//     // res.sendFile(__dirname+"/public/assignment3.html");
//     count++;
//     res.render("ketoan",{
//         products:products
//     });
// });
app.get("/chi-tiet",function (req,res){
    var masp=req.query.id;
    res.render("chitiet",{
        masp:masp,
    });
});


//su dung tham so tinh
app.get("/chi-tiet2/:id",function (req,res){
    var masp=req.params.id;
    var p={};
    for(var i=0; i<products.length;i++){
        if(products[i].id==masp){
            p=products[i];
            break;
        }
    }
    res.render("chitiet",{
        masp:masp,
        p:p
    });
});