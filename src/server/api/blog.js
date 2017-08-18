// Dependencies 
import express from 'express';	

// Data
import posts from '../../data/posts';
import post from '../../data/post';

// Express router
const Router = express.Router();

Router.get('/posts',(req, res, next) => {
	res.json(posts);
});

Router.get('/posts',(req, res, next) => {
	res.json(post);
});

export default Router;