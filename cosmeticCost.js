//put your branch token in token.txt for this to work.

var userId = 17; //edit this to the user you want to find the cost of

const branch = require('./userConstructor');
const fs = require('fs');
var client = new branch.User();
fs.readFile('./token.txt','utf-8',(e,d)=>{
    if(e){console.log(e)}
    client.token = d;
    start();
});

async function start(){
    var cost = {"acorns":0,"gold":0};
    await client.fetchUserCosmetics(userId).then((cosmetics)=>{
        cosmetics.forEach(c => {
            cost[c.cosmetic.currency] += c.cosmetic.cost;
        });
    })

    await client.fetchUserData(userId).then((e)=>{
        console.log(`${e.display_name}'s cosmetics cost ${cost['acorns']} acorns and ${cost['gold']} golden acorns`);
    })
}