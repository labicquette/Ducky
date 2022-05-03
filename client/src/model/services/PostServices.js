import axios from "axios";
import { Services } from "./Services";

export class PostServices extends Services {

    static createPost(post, success, failure) {
        this.instance.post('/1/posts', {
            user_id: post.user_id,
            reply_to_id: post.reply_to_id,
            time: new Date(),
            text: post.text,
            private: post.private,
            media: post.media,
            polls: post.polls,
            hashtags: post.hashtags,
            mentionned_users_ids = post.mentionned_users_ids,
        })
    }

}