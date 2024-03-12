const express = require('express');
const router = express.Router();
const {
    blog_delete,
    blog_create_post,
    blog_create_get,
    blog_details,
    blog_index
} = require('../controller/blogController');

router.get('/',blog_index);

router.post('/',blog_create_post);

router.get('/create',blog_create_get);

 router.get('/:id',blog_details);

router.delete('/:id',blog_delete);

// app.get('/about-them',(req,res)=>{
//  res.render('about');
// });

// app.get('/blog/create',(req, res)=>{
//     res.render('create')
// })


module.exports = router;