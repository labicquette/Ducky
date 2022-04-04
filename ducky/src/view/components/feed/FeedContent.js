import React from "react";
import { FeedContentHome } from "./FeedContentHome";
import { FeedContentMessages } from "./FeedContentMessages";
import { FeedContentStories } from "./FeedContentStories";

import { Post } from "../../../model/objects/posts/Post";
import { PostPrologue } from "../../../model/objects/posts/PostPrologue";
import { User } from "../../../model/objects/users/User";
import { Messages, MessagesStatus } from "../../../model/objects/messages/Messages";
import { Stories } from "../../../model/objects/stories/Stories";
import { FeedContentFriends } from "./FeedContentFriends";

export class FeedContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // Test
        let user = new User(
            'abcdefghijklmnopqrstuvwxyz',
            'benkabongo25',
            'Ben',
            'Kabongo'
        );
        user.profilePicture = require('../../../ressources/profil_test.png');

        let postPrologue = new PostPrologue(user, 'a commenté');

        let text = 'It is a long established fact that a reader will be distracted ' +
        'by the readable content of a page when looking at its layout. The point of ' +
        'using Lorem Ipsum is that it has a more-or-less normal distribution of ' +
        'letters, as opposed to using Content here, content here, making it look '+ 
        'like readable English. Many desktop publishing packages and web page editors '+
        'now use Lorem Ipsum as their default model text, and a search for ' +
        'lorem ipsum will uncover many web sites still in their infancy. Various ' +
        'versions have evolved over the years, sometimes by accident, sometimes on ' +
        'purpose (injected humour and the like).';

        let postReplyTo = new Post(
            'abcdefghijklmnopqrstuvwxyz',
            user,
            null,
            new Date(5, 3, 2022),
            text,
            'Caen, France',
            'privé'
        );

        let post = new Post(
            'abcdefghijklmnopqrstuvwxyz',
            user,
            postReplyTo,
            new Date(),
            text,
            'Paris, France',
            'public',
            postPrologue
        );

        let messages = new Messages(
            'abcdefghijklmnopqrstuvwxyz',
            require('../../../ressources/profil_test.png'),
            'Ben Kabongo',
            new Date('02 April 2022 13:49'),
            MessagesStatus.send
        );

        let stories = new Stories(
            'abcdefghijklmnopqrstuvwxyz',
            require('../../../ressources/profil_test.png'),
            'Ben Kabongo',
            new Date('02 April 2022 13:49'),
            false,
            false
        )

        stories.addStorie([1, 2, 3])

        // 


        let content = null;
        switch(this.props.contentId) {

            case 'stories':
                content = (
                    <FeedContentStories 
                        storiesList={[stories, stories, stories, stories, stories, stories]}/>
                );
                break;

            case 'messages':
                content = (
                    <FeedContentMessages 
                        messagesList={[messages, messages, messages, messages, messages, messages,
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, messages, messages, messages, 
                            messages, messages, messages, messages, ]} />
                );
                break;

            case 'profil':
                break;

            case 'friends':
                content = (
                    <FeedContentFriends />
                )
                break;

            case 'suggestions':
                break;

            case 'statistics':
                break;

            case 'parameters':
                break;

            default: // home
                content = (
                    <FeedContentHome 
                        stories={[1,2,3,4,5]} 
                        posts={[post, post, post, post]} />
                );
        }
        return (
            <div className='feed-content'>
                {content}
            </div>
        );
    }
}