function createPost(user, postArray) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newPost = `Post: ${user.username} - ${user.post}`;
      console.log(`New post created: ${newPost}`);
      postArray.push(newPost); 
      resolve(newPost);
    }, 1000);
  });
}

function deleteLastPost(posts) {
  return new Promise((resolve, reject) => {
    if (posts.length === 0) {
      reject("No post to delete!");
    } else {
      setTimeout(() => {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      }, 1000);
    }
  });
}

function updateLastUserActivityTime(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date().toISOString(); 
      console.log(`Last activity time updated: ${user.lastActivityTime}`);
      resolve(user.lastActivityTime);
    }, 1000);
  });
}

function userActivity() {
  const user = {
    username: "Aniket",
    post: "Hello World!",
    lastActivityTime: new Date().toISOString(),
    posts: [],
  };

  Promise.all([createPost(user, user.posts), updateLastUserActivityTime(user)])
    .then(([newPost, lastActivityTime]) => {
      console.log(`All posts created: ${user.posts}`);
      console.log(`User's last activity time: ${lastActivityTime}`);
      return deleteLastPost(user.posts); 
    })
    .then((deletedPost) => {
      console.log(`Post deleted: ${deletedPost}`);
      console.log(`New set of posts: ${user.posts}`);
    })
    .catch((error) => {
      console.error(error);
    });
}
userActivity();
