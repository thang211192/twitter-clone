import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Widgets() {
    return (
        <div className="widgets">
            <div className='widgets__input'>
            <SearchIcon className="widgets_searchIcon"/>
            <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className='widgets__widgetContainer'>
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId="1367325196332503043"/>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="PlayStation"
                options={{height: 400}}
                />
                <TwitterShareButton
                    url={'https://facebook.com/saurabhnemade'}
                    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
                />
            </div>
        </div>
    )
}

export default Widgets
