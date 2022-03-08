import { Message } from "../objects/messages/Message";
import { MessageLikeDAO } from "./MessageLikeDAO";

export class MessageDAO {

    constructor(connection) {
        this.connection = connection;    
    }

    /**
     * create a new message
     * @param {Message} message
     * @returns {boolean} 
     */
    create(message) {
        //
        return false;        
    }

    /**
     * update message
     * @param {Message} message
     * @returns {boolean} 
     */
    update(message) {
        //
        return false;
    }

    /**
     * delete message
     * set the message status to deleted
     * @param {Message} message
     * @returns {boolean} 
     */
    delete(message) {
        //
        return false;
    }

    /**
     * @returns all messages
     */
    all() {
        let messages = [];
        //
        return messages;
    }

    /**
     * @param {int} messageId 
     * @returns {Message} message by id
     */
    getById(messageId) {
        let message = null;
        //
        return message;
    }

    /**
     * @param {int} messageId 
     * @returns list of messages likes by message id
     */
    getLikes(messageId) {
        let messageLikes = [];
        //
        return messageLikes;
    }

    /**
     * @param {int} userId
     * @returns list of messages sent or received by a user
     */
    getByUser(userId) {
        let messages = [];
        //
        return messages;
    }

    /**
    * @param {int} userId
    * @returns list of messages sent by a user
    */
    getBySenderUser(userId) {
        let messages = [];
        //
        return messages;
    }

    /**
     * @param {int} userId
     * @returns list of messages received by a user
     */
     getByRecipientUser(userId) {
        let messages = [];
        //
        return messages;
    }

    /**
     * @param {int} currentUserId current user
     * @param {int} otherUserId other user
     * @param {string} text filtering by textual content if specified
     * @returns list of messages sent between two users
     */
    getBySentBetweenUsers(currentUserId, otherUserId, text) {
        let messages = [];
        //
        return messages;
    }
   
    /**
     * @param {string} text 
     * @returns list of messages that contains the text
     */
    getByTextContent(text) {
        let messages = [];
        //
        return messages;
    }
}