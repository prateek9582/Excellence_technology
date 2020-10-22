const userModel = require("../models/userModel");


module.exports.highestscore = async function(req,res){
    try{
        let users = await userModel.find();
        // console.log(users)
        if(users.length > 0){ 
            let alluser =[];  
            let user = users[0];
            // console.log(user);
            for(var i = 1 ; i < users.length ; i++){
                if((user.first_round + user.second_round + user.third_round) < (users[i].first_round + users[i].second_round + users[i].third_round)){
                    // console.log(users[i]);
                    user = users[i];
                }
            }
            for(var i = 0 ; i < users.length ; i++){
                if((user.first_round + user.second_round + user.third_round) == (users[i].first_round + users[i].second_round + users[i].third_round)){
                    // console.log(users[i]);
                    alluser.push(users[i]);
                }
            }
            // console.log(user)
            res.json({
                highest_scoring_candidate:alluser
            })
        }
        else{
            res.json({
                data:"no user in database"
            })
        }
    }catch(err){
        res.json({
            err
        })
    }
}

module.exports.averagescore = async function(req,res){
    try{
        let users = await userModel.find();
        let round1 = 0;
        let round2 = 0; 
        let round3 = 0;
        for(var i = 0 ; i < users.length ; i++){
            round1 = round1 + users[i].first_round;
            round2 = round2 + users[i].second_round;
            round3 = round3 + users[i].third_round;
        }
        round1 = round1/users.length;
        round2 = round2/users.length;
        round3 = round3/users.length;
        res.json({
            avg_of_first_round : round1,
            avg_of_third_round : round2,
            avg_of_second_round : round3
        })
    }catch(err){
        res.json({
            err
        })
    }
}