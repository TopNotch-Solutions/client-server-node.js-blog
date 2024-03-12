const Blog = require('../model/blog');

const blog_index = (req,res) =>{
    Blog.find()
    .sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title: 'All blogs', blogs:result})
    })
    .catch((err)=>{
        console.log(err)
    });
}
const blog_details = (req,res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/blogs'});
    })
    .then((err)=>{
        console.log(err);
    });
}
const blog_create_get = (req,res) =>{
    res.render('create',{title: 'Create Blog'})
}
const blog_create_post = (req,res) =>{
     const blogs = new Blog(req.body);

    blogs.save()
    .then((result)=>{
        res.redirect('blogs');
    })
    .catch((err)=>{
        console.log(err);
    });
}
const blog_delete = (req,res) =>{
     const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/blogs'});
    })
    .then((err)=>{
        res.render('404',{title: '404'});
    });
}
module.exports = {
    blog_delete,
    blog_create_post,
    blog_create_get,
    blog_details,
    blog_index
}