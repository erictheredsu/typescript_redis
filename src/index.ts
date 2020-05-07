import * as redis from "redis"
console.log("redis node.js demo!");

let client = redis.createClient(6379, "10.58.136.142");
client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("hello", "muggle", redis.print);
client.get("hello", (err, reply) => {
    if(err){
        console.log("Error %s ", err);
    }
    else{
        console.log("Reply %s ", reply);
    }
});

