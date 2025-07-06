const { Telegraf } = require('telegraf')

const bot =new Telegraf('7668968463:AAGQ7Dzhddnrq5ANx1yff6mgKmH_2WIadm4')

bot.start((ctx) =>{
    ctx.reply('سلام به ربات فروشگاه    خوش آمدید \n چه کمکی از من برمیاد\n /help')
})



bot.launch()