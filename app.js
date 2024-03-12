const express = require('express'); // loading the express module
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express(); // creating an instance of express which implies the server

// register the view engine
app.set('view engine','ejs'); // by default ejs knows to look into the views folder we have created
//app.set('views', 'where the folder for the views is'); // if the views where in another folder then the views folder

const dbURI = 'mongodb://127.0.0.1:27017/note-tuts';
mongoose.connect(dbURI)
.then((result) =>{
    console.log('connected to the database!');
    app.listen(3000); // listening to incoming request using port 3000, you don't need to specify that it is localhost in this case
})
.catch((err) =>{
    console.log(err)
});

// app.get('/add-blog', (req,res)=>{
//     const blog = new Blog({
//         title: 'Second blog',
//         snippet: 'About second new blog',
//         body: 'this is my second body'
//     });

//     blog.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err)
//     });
// });

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/singl-blog',(req,res)=>{
//     Blog.findById('65eef0f114f573e4ae2f2a2b')
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

// app.get('/',(req, res)=>{
//    res.send('<p>Hello developer</p>'); //listeing to the get method and responsing back 
//    // you don't have to specify the content-type it automatically set the value
//    // you dont need to specify the status code here, but in some cases you will have to manually do that.
// });


// get method
// app.get('/',(req,res)=>{
//  res.sendFile('./views/index.html', {root: __dirname}); // when you are sending static files
// });

// app.get('/', (req,res)=>{
//  res.render('index')
// });

app.use((req,res,next)=>{
    console.log('New request made:');
    console.log('Host name: ', req.hostname);
    console.log('path: ',req.path);
    console.log('method: ',req.method);
    next();
});

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
//     const blogs = [
//         {title:'Under the same sky', snippet: 'The love story of two country sweethearts that were not meant to fall inlove'},
//         {title:'The storm', snippet: 'The love story of two country sweethearts that were not meant to fall inlove'},
//         {title:'The storm over paradise', snippet: 'The love story of two country sweethearts that were not meant to fall inlove'},
//         {title:'Alora', snippet: 'The love story of two country sweethearts that were not meant to fall inlove'},
//     ];
//  res.render('index', {title: 'Home', blogs: blogs}); // passing data as a response to the client

 res.redirect('/blogs');
});

// app.get('/about-them',(req,res)=>{
//  res.sendFile('./views/about.html', {root: __dirname});
// });
 app.get('/about',(req,res)=>{
 res.render('about',{title: 'About'});
});
 app.use('/blogs',blogRoutes);

// redirecting users
app.get('/about-us',(req,res)=>{
    res.redirect('/about-them');
});


// 404 using middleware
// app.use((req,res)=>{
//     res.status(404);
//     res.sendFile('./views/404.html', {root: __dirname})
// });

// app.use((req,res)=>{
//     res.status(404);
//     res.render('404');
// });

app.use((req,res)=>{
    res.status(404);
    res.render('404',{title: '404 page'});
});