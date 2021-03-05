import React, { useEffect, useState } from 'react'
import FlipMove from 'react-flip-move'
import './Feed.css'
import database from './firebase'
import Post from './Post'
import TweetBox from './TweetBox'
function Feed() {
    const [posts, setposts] = useState([]);
    let postRef = React.createRef();
    useEffect(() => {
        database.collection('posts')
        .orderBy("text","desc")
        .onSnapshot(snapshot => (
            setposts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            <FlipMove className="flip-wrapper" typeName="ul">
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
