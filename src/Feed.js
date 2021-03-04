import React,{useState,useEffect} from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import database from './firebase'
import FlipMove from 'react-flip-move';
function Feed() {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        database.collection('posts').
        orderBy("text","desc").
        onSnapshot(snapshot => (
            setposts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            <FlipMove>
            {posts.map(cons => (
                <Post
                key={cons.text}
                displayName={cons.displayName}
                username={cons.username}
                verified={cons.verified}
                text={cons.text}
                image={cons.image}
                avatar={cons.avatar}
                />
            ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed
