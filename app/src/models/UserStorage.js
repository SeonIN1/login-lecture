"use strict";

class UserStorage {
    static #users = {
        id : ["kimseonin","seonin","sunin"],
        psword : ["1234","1234","12345"],
        name : ["김선인","선인김","나팀장"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;