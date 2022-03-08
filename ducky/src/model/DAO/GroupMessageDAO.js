import { Message } from "../objects/messages/GroupMessage";

export class GroupMessageDAO {

    constructor(connection) {
        this.connection = connection;    
    }

    /**
     * create a new group message
     * @param {GroupMessage} message
     * @returns {boolean} 
     */
    create(message) {
        //
        return false;        
    }

    /**
     * update group message
     * @param {GroupMessage} message
     * @returns {boolean} 
     */
    update(message) {
        //
        return false;
    }

    /**
     * delete group message
     * set the message status to deleted
     * @param {Message} message
     * @returns {boolean} 
     */
    delete(message) {
        //
        return false;
    }

    /**
     * delete group message by id
     * set the message status to deleted
     * @param {int} messageId
     * @returns {boolean} 
     */
    deleteById(messageId) {
        //
        return false;
    }

    /**
     * @returns all group messages
     */
    all() {
        let messages = [];
        //
        return messages;
    }

    /**
     * @param {int} messageId 
     * @returns {GroupMessage} group message by id
     */
    getById(messageId) {
        let message = null;
        //
        return message;
    }

    /**
     * @param {int} groupId 
     * @returns group message list
     */
    getByGroup(groupId) {
        let messages = [];
        //
        return messages;
    }

    /**
     * @param {int} userId
     * @returns list of group messages sent or received by a user
     */
    getByUser(userId) {
        let messages = [];
        //
        return messages;
    }

    /**
     * @param {int} userId 
     * @param {int} groupId 
     * @returns list of group messages sent or received by a user in group
     */
    getByUserGroup(userId, groupId) {
        let messages = [];
        //
        return messages;
    }

    /**
    * @param {int} userId
    * @returns list of group messages sent by a user
    */
    getBySenderUser(userId) {
        let messages = [];
        //
        return messages;
    }

    /**
    * @param {int} userId
    * @param {int} groupId
    * @returns list of group messages sent by a user in group
    */
     getBySenderUserGroup(userId, groupId) {
        let messages = [];
        //
        return messages;
    }
   
    /**
     * @param {string} text 
     * @returns list of group messages that contains the text
     */
    getByTextContent(text) {
        let messages = [];
        //
        return messages;
    }

    /**
     * @param {int} group
     * @param {string} text 
     * @returns list of group messages that contains the text
     */
     getByTextContentGroup(groupId, text) {
        let messages = [];
        //
        return messages;
    }
}