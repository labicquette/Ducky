import { Storie } from "../objects/stories/Storie";
import { StorieLikeDAO } from "./StorieLikeDAO";
import { StorieReportDAO } from "./StorieReportDAO";
import { StorieViewDAO } from "./StorieViewDAO";

export class StorieDAO {
 
    constructor(connection) {
        this.connection = connection;
    }

    create(storie) {
        //
        return false;
    }

    update(storie) {
        //
        return false;
    }

    delete(storie) {
        //
        return false;
    }

    deleteById(storieId) {
        //
        return false;
    }

    getById(storieId) {
        let storie = null;
        //
        return storie;
    }

    getLikes(storieId) {
        let storieLikes = [];
        //
        return storieLikes;
    }

    getReports(storieId) {
        let storieReports = [];
        //
        return storieReports;
    }

    getViews(storieId) {
        let storieViews = [];
        //
        return storieViews;
    }

    getByUserId(userId) {
        let stories = [];
        //
        return stories;
    }

    getByUserTime(userId, time) {
        let stories = [];
        //
        return stories;
    }

    getByStorieGroupId(storieGroupId) {
        let stories = [];
        //
        return stories;
    }

}