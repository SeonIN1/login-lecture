"use strict";

const output = {
    home : (req,res) => {
        res.render("home/index");
    },
    login : (req,res) => {
        res.render("home/login");
    },
};

const users = {
    id : ["kimseonin","seonin","sunin"],
    psword : ["1234","1234","12345"],
}

const process = {
    login : (req,res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success : true,
                })
            }
        }
        return res.json({
            success : false,
            msg:"로그인에 실패 하셨습니다",
        })
    },
};


// const home = (req,res) => {
//     res.render("home/index");
// }

// const login = (req,res) => {
//     res.render("home/login");
// }

module.exports = {
    // home,
    // login
    output,
    process
}