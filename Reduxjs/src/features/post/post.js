

 const getPost = async () => {
     const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
     return  responce.json();
}

export default getPost;