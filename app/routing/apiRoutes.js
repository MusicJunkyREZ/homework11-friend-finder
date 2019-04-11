//Do not need path because not pushing to front end
var friends = require("../data/friends");


module.exports = function (app) {

    console.log("api routes")

    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log(friends);
    });

    app.post("/api/friends", function (req, res) {
        
        var newFriend = req.body;
        var yourScore = 0;
        var finalBestFriend = {
            name: "",
            photo: "",
            diff: Infinity 
        }

        for (var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] === "1 (Strongly Disagree)") {
                newFriend.scores[i] = 1;
            } else if (newFriend.scores[i] === "2 (Disagree)") {
                newFriend.scores[i] = 2;
            } else if (newFriend.scores[i] === "3 (Neutral)") {
                newFriend.scores[i] = 3;
            } else if (newFriend.scores[i] === "4 (Agree)") {
                newFriend.scores[i] = 4;
            } else if (newFriend.scores[i] === "5 (Strongly Agree)") {
                newFriend.scores[i] = 5;
            } else {
                return;
            }
            yourScore += newFriend.scores[i]
        };

        console.log(newFriend.scores);
        console.log(yourScore);
    

        var differencesArray = [];

        for (var i = 0; i < friends.length; i++) {

            var compFriend = friends[i];
            var totalDifference = 0;

            for (var j = 0; j < compFriend.scores.length; j++) {
                var difference = Math.abs(compFriend.scores[j] - newFriend.scores[j])
                totalDifference += difference;
            }

            // differencesArray[i] = totalDifference;
            if (totalDifference <= finalBestFriend.diff){
                finalBestFriend.name = compFriend.name;
                finalBestFriend.photo = compFriend.photo;
                finalBestFriend.diff = totalDifference;
            }
        };
        console.log(totalDifference)

        // var bestFriendNum = differencesArray[0]
        // var bestFriendIndex = 0;

        // for (var i = 0; i < differencesArray.length; i++) {
        //     if (differencesArray[i] < bestFriendNum) {
        //         bestFriendNum = differencesArray;
        //         bestFriendIndex = i;
        //     }
        // // }

        // console.log(differencesArray)
        // console.log(bestFriendIndex)

        

        res.json(finalBestFriend);
        friends.push(newFriend);
        //another try//////////////////////////////////////////////////////

        // console.log("hit it")
        // var newFriend = req.body;
        // var yourScore = 0;

        // for (var i = 0; i < newFriend.scores.length; i++) {
        //     if (newFriend.scores[i] === "1 (Strongly Disagree)") {
        //         newFriend.scores[i] = 1;
        //     } else if (newFriend.scores[i] === "2 (Disagree)") {
        //         newFriend.scores[i] = 2;
        //     } else if (newFriend.scores[i] === "3 (Neutral)") {
        //         newFriend.scores[i] = 3;
        //     } else if (newFriend.scores[i] === "4 (Agree)") {
        //         newFriend.scores[i] = 4;
        //     } else if (newFriend.scores[i] === "5 (Strongly Agree)") {
        //         newFriend.scores[i] = 5;
        //     } else {
        //         return;
        //     }
        //     yourScore += newFriend.scores[i]
        // };

        // console.log(yourScore)

        // console.log(friends)

        // var possibleFriendScore = [];
        // var loopThrough = function(){
        //         for (var i = 0; i < friends.length; i++) {
        //         var possibleFriend = friends[i];
        //         console.log(possibleFriend)
        //         // console.log(possibleFriend[i].scores)
                
        //         for (var j=0; j < possibleFriend.scores.length; i++){

        //             if (possibleFriend.scores[j] === 1){
        //                 possibleFriendScore += 1;
        //             } else if (possibleFriend.scores[j] === 2){
        //                 possibleFriendScore += 2
        //             } else if (possibleFriend.scores[j] === 3){
        //                 possibleFriendScore += 3
        //             } else if (possibleFriend.scores[j] === 4){
        //                 possibleFriendScore += 4
        //             } else if (possibleFriend.scores[j] === 5){
        //                 possibleFriendScore += 5
        //             } else {
        //                 return;
        //             }   
        //             loopThrough();
        //         };              
        //     }
        // }
        // console.log(possibleFriendScore)


        //another try///////////////////////////////////////////////////////
        // var counts = [4, 9, 15, 6, 2],
        //     goal = 5;

        // var closest = counts.reduce(function (prev, curr) {
        //     return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        // });

        // console.log(closest);

        // var theBestFriend = function () {
        //     if (yourScore)
        // }

        // console.log(bestFriendIndex)

        // friends.push(newFriend);

        // res.json(friends[bestFriendIndex]);

    })
    
}