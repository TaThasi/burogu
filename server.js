const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/cors.config');
const verifyJWT = require('./middlewares/jwt.middleware')
const app = express();
const PORT = process.env.PORT || 8080


app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());




app.use('/register', require('./routes/register.route'));
app.use('/login', require('./routes/login.route'));

app.use('/get-all-post', require('./routes/post/get.all.post.route'))
app.use('/get-post', require('./routes/post/get.post.route'))

app.use('/refreshtoken', require('./routes/refreshToken.route'));
app.use('/logout', require('./routes/logout.route'));
app.use('/u/get-user', require('./routes/get.user.route'));
app.use(verifyJWT);
app.use('/follow', require('./routes/user/follow.route'));
app.use('/add-post', require('./routes/post/add.post.route'));
app.use('/add-comment', require('./routes/comment/post.comment'));
app.use('/vote', require('./routes/vote/vote.route'));
app.use('/bookmark', require('./routes/post/add.bookmark.route'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})