import classes from './Post.module.css';

function Post(props) {

    return (
        <li className={`${classes.post} text-pretty overflow-hidden`}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    );
}

export default Post;