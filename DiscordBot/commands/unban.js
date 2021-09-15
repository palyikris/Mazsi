module.exports={
    name:'unban',
    description:"this is a unban command!",
    execute(message, args){
        message.guild.members.unban(688133765348065339);
        message.channel.send("Kis buzi megúszta");
    }
}