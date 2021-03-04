import { Avatar, Button } from '@material-ui/core'
import React,{useState} from 'react'
import './TweetBox.css'
import database from './firebase'

function TweetBox() {
    const [TweetMessage, setTweetMessage] = useState('')
    const [TweetImage, setTweetImage] = useState('')
    const sendTweet = (e) => {
        e.preventDefault();

        database.collection('posts').add({
            displayName: "Thắng",
            username: "vanthang",
            verified: true,
            text: TweetMessage,
            image: TweetImage,
            avatar : "https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/116712349_1136919406692362_6264826831671252910_o.jpg?_nc_cat=100&ccb=3&_nc_sid=dbb9e7&_nc_ohc=NoB-DmVy21oAX9Z1zQD&_nc_ht=scontent.fhan2-6.fna&tp=27&oh=89de25350d6dae28353b9f61d2b55f4c&oe=6064D423"  
        });
        setTweetImage("");
        setTweetMessage("")

    }
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar
                        src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/116712349_1136919406692362_6264826831671252910_o.jpg?_nc_cat=100&ccb=3&_nc_sid=dbb9e7&_nc_ohc=NoB-DmVy21oAX9Z1zQD&_nc_ht=scontent.fhan2-6.fna&tp=27&oh=89de25350d6dae28353b9f61d2b55f4c&oe=6064D423"
                    />
                    <input 
                    value={TweetMessage}
                    onChange={e => setTweetMessage(e.target.value)}
                    placeholder="What's happening?" type="text"/>
                    <input 
                    value={TweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL" type="text"/>
                </div>
                <Button 
                onClick={sendTweet}
                type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
