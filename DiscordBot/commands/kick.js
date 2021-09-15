module.exports={
    name: 'kick',
    description: "This command kicks a member",
    execute(message, args){
        const member=message.mentions.users.first();
        if(member){
        const  memberTarget= message.guild.members.cache.get(member.id);
        if(message.member.roles.cache.has('823271948196380743')||message.member.roles.cache.has('473511698045599754')||message.member.roles.cache.has('831087807232737300')||message.member.roles.cache.has('831130271339774004')||message.member.roles.cache.has('710219787946557646')||message.member.roles.cache.has('473509811162578946')){
        member.send("Bahaha u been mazsistruck! p.s.:u suck");
        let channel = message.channel;
        channel.createInvite({unique: true})
        .then(invite => {
        member.send("Nesze te szerencsétlen: https://discord.gg/" + invite.code);
        });
        const  memberTarget= message.guild.members.cache.get(member.id);    
        memberTarget.kick();
            
        }else{
            message.channel.send("Csicska vagy ehhez!")
        }
    }
        else{
            message.channel.send('I cant kick this thot...');
        }
    
    }  
}