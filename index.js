const express = require('express');
const app = express();
const POST = 3000;

app.listen(POST, () => {
    console.log(`Example app listening on port ${POST}`)
   });

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

const products = [
    {
    title: 'Lâm (Le Min-ho NĐ)',
    src: 'https://f6-zpc.zdn.vn/3125203939910454588/d81249f83f24e67abf35.jpg'
    },
    {
    title: 'Trung 500k',
    src: 'https://f11-zpc.zdn.vn/897014204603346324/58d06b011dddc4839dcc.jpg'
    },
    {
    title: 'Yến Mũm Mĩm',
    src: 'https://b-f12-zpc.zdn.vn/5881743624889099190/f3a9cdbabb6662383b77.jpg'
    },
    {
    title: 'Thế Anh Ok',
    src: 'https://b-f14-zpc.zdn.vn/4709756215479523060/db417d49f6952fcb7684.jpg'
    },
    {
    title: 'Hiếu Nghiện',
    src: 'https://f3-zpc.zdn.vn/7551559460932374847/c444fbfb6e27b779ee36.jpg'
    },
   ]

   app.get('/', ((req, res) => {
    res.render('home', {data: products})
   }))

