module.exports={
    name:'szarvagyok',
    description:"this is a szarvagyok command!",
    execute( message, args){
        if(message.member.roles.cache.has('831087807232737300')){
            message.delete({ timeout: 1000 });
            message.channel.send('Ne mondj ilyeneket!');
        } else{
            message.channel.send('Igen, de fel a fejjel!');
        }
    }
}