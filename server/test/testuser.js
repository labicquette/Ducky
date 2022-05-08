const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../index.js'); // c'est l'app "express"
//import { describe, it } from 'mocha'
const mocha = require('mocha');
const { expect } = require('chai');
const cookieParser = require('cookie-parser');

// Configurer chai
chai.use(chaiHttp);
chai.should();


var get_cookies = function(request) {
    var cookies = {};
    request.headers && request.headers.cookie.split(';').forEach(function(cookie) {
      var parts = cookie.match(/(.*?)=(.*)$/)
      cookies[ parts[1].trim() ] = (parts[2] || '').trim();
    });
    return cookies;
  };

mocha.describe("Test de l'API user", () => {
    mocha.it("user", (done) => {
        const test = "Test Mocha Users : "
        const request = chai.request.agent(app.default).keepOpen();
        const name = "pipotest24"
        const user = {
            username: name,
            password: name,
            lastname: name,
            firstname: name,
            sex: "Homme",
            phone: name,
            mail: name,
            birthday:"2022-03-05",
            country : "France",
            creation_time:"2022-05-04T21:01:00.369Z",
            online     : false,
            private    : false,
            deleted    : false,
            banished   : false,
            ban        : null,
            messages : [],
            notifications : [],
            stories : [],
            stories_by : [],
            stories_groups : [],
            posts : [],
            posts_by : [],
            mentionnedPosts : [],
            followers : [],
            followings : [],
        };

        request
            .post('/1/users')
            .send(user)

            .then((res) => {
                res.should.have.status(200);
                expect(res).to.have.cookie('user_id')
                return Promise.all([
                     request
                         .get(`/1/users/uY9UbdOwK6S1QlCx`)
                         .then((res) => {
                             console.log(test + "GET /1/users/:user_id")
                             res.should.have.status(200)
                         }),

                    request
                        .get(`/1/users/4`)
                        .then((res) => {
                            console.log(test + "wrong GET /1/users/:user_id")
                            res.should.have.status(200)
                        }),
                    request
                    .get('/1/users/me')
                    .then((res)=> {
                        console.log(test + "GET /1/users/me")
                        res.should.have.status(200)
                    }),
                    request
                    .patch('/1/users/uY9UbdOwK6S1QlCx')
                    .then((res)=> {
                        console.log(test + "PATCH /1/users/:userid")
                        res.should.have.status(403)
                    }),
                    request
                    .delete('/1/users/uY9UbdOwK6S1QlCx')
                    .then((res)=> {
                        console.log(test + "DELETE /1/users/:userid")
                        res.should.have.status(403)
                    })
                    
                ])
            })
            .then(() => done(), (err) => done(err))
            .finally(() => {
                request.close()
            })

    })
})

