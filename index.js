const { Telegraf } = require('telegraf')

const bot =new Telegraf(process.env.bot_token);

bot.start((ctx) =>{
    ctx.reply('سلام به ربات فروشگاه mahdi7pj  خوش آمدید \n چه کمکی از من برمیاد\n /help')
})
bot.help((ctx)=>{
    ctx.reply('این یک ربات فروشگاهی هست.برای ارتباط با ما میتوانید از روش های زیر استفاده کنید .\nآدرس پشیبانی تلگرام👨‍💻:\nآدرس سایت🛒:\nشماره تماس📞:')
})
bot.command('menu',(ctx)=>{
ctx.reply("🎉سلام به ربات فروشگاهی ما خوش آمدید",{
  reply_markup : {
    inline_keyboard: [
      [ { text:"🛒ادرس فروشگاه" , callback_data:"btn-1"} , { text:"🌐آدرس سایت" , callback_data:"btn-2"}],
      [{ text:"👨‍💻ارتباط با ادمین", callback_data:"btn-3"}],
      [{text:"آدرس کانال تلگرامی ما ",callback_data:"btn-4"}]
    ]
  }
})

})
bot.action("btn-1",(ctx)=>{
ctx.reply(" تهران ، خیابان جمهوری و...")
})
bot.action("btn-2",(ctx)=>{
ctx.reply("آدرس سایت : WWW.")
})
bot.action("btn-3",(ctx)=>{
  ctx.reply("@")
})
bot.action("btn-4",(ctx)=>{
  ctx.reply("@")
})

// --- این خطوط را به جای bot.launch() اضافه کنید ---
const PORT = process.env.PORT || 3000; // Render پورت را در process.env.PORT قرار می‌دهد

// URL واقعی سرویس Render شما که خودتان ارسال کردید:
const WEBHOOK_URL = 'https://telegram-bot-v8u3.onrender.com/'; 

// راه‌اندازی ربات در حالت وب‌هوک
bot.launch({
  webhook: {
    domain: WEBHOOK_URL, // آدرس پایه برای وب‌هوک شما
    port: PORT,           // پورتی که وب سرور شما روی آن گوش می‌دهد
    // secretPath: '/telegraf-webhook' // (اختیاری) اگر می‌خواهید مسیر وب‌هوک شما امن‌تر باشد، می‌توانید این خط را فعال کنید
  }
}).then(() => {
  console.log('Bot started with webhook!');
  // اگر از secretPath استفاده می‌کنید، باید Webhook را به تلگرام معرفی کنید:
  // bot.telegram.setWebhook(WEBHOOK_URL + (bot.webhookSecretPath || ''));
  // برای بیشتر موارد، bot.launch به خودی خود تنظیمات اولیه وب‌هوک در تلگرام را انجام می‌دهد.
}).catch((err) => {
  console.error('Error starting bot:', err);
});
// --- پایان بخش اضافه شده ---
