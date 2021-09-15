
module.exports={
    name: 'leave',
    description: "This command disconnects a member",
    execute( message, args){
        if(message.member.roles.cache.has('831087807232737300') || message.member.roles.cache.has('823271948196380743')||message.member.roles.cache.has('473511698045599754')||message.member.roles.cache.has('831130271339774004')||message.member.roles.cache.has('710219787946557646')||message.member.roles.cache.has('326658349062029312')){
        const member=message.mentions.users.first();
        if(member){
            const  memberTarget= message.guild.members.cache.get(member.id);
            memberTarget.send("Bahaha u been mazsistruck!");
            memberTarget.leave();
        }else{
            message.channel.send('I cant disconnect this thot...');
        }
    }else{
        message.channel.send('U dont have the guts...')
    }
    }
}