const express = require('express');
const { requireSingIn } = require('../contollers/userContollers');
const { createPostController, getAllPostController, getUserPostController, deletePostController, updatePostController } = require('../contollers/postContollers');


const router = express.Router();

router.post("/create-post", requireSingIn, createPostController);
router.get("/get-all-post", getAllPostController);

router.get('/get-user-post', requireSingIn, getUserPostController);

router.delete('/delete-post/:id', requireSingIn, deletePostController);

//UPDATE POST
router.put("/update-post/:id", requireSingIn, updatePostController);

module.exports =  router;