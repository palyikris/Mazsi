module.exports={
    name:'keressukmeg',
    description:"this is a keressukmeg command!",
    execute( message, args){
        const member=message.mentions.users.first();
        if(member){
        const  memberTarget= message.guild.members.cache.get(member.id);
       
        member.send("Sas but true that u r scum!:)");
        message.channel.send(`Tudod ${member}, elindultam megkeresni h ki a fasz kérdezett, és hát nem találtam meg bazmeg.`);
    }
}
}