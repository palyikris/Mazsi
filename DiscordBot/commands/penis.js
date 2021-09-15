const { Client, Intents, MessageAttachment } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports={
    name:'penis',
    description:"this is a penis command!",
    execute( message, args){
        const member=message.mentions.users.first();
        if(member.id==="831548775474135101"){
            message.channel.send("Le se tudom mérni, olyan nagy.")
        }
        else if(member.id==="353096458263592960"){
            message.channel.send("Xd, ez egy retek nagy 0.")
        }
        else{

        let reps =Math.floor(Math.random() * 20+1);
        const size =`${message.author}`+", "+"<@"+member+">"+" farka "+reps+" cm.";
        message.channel.send(size);
    }
    }
}