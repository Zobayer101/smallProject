import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/post/postSlice";


const Post = () => {
    const {post,isLoding,isError,error} = useSelector(state=>state.post);
    const dispach = useDispatch();
    useEffect(() => {
        dispach(fetchPost());
    }, [dispach]);
    let content;
    if (isLoding) {
      content=<h1>Loding....</h1>
    }
    if (!isLoding && isError&&error) {
        content=<h1>somthing was wrong....</h1>
    }
    if (!isError && !isLoding && post) {
        content = <ul>{post.map((post) => (
             <li key={post.id}>{post.title}</li>
        )) }</ul>
    }

    return content;
}

export default Post;