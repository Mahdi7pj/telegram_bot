const { Telegraf } = require('telegraf');
const { inlineKeyboard } = require('telegraf/markup');

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
      [{ text:"👨‍💻ارتباط با ادمین", callback_data:"btn-3"},{text:"آدرس کانال تلگرامی ما ",callback_data:"btn-4"}],
      [{text:"کمک نیاز دارم",callback_data:"btn-5"}]

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
bot.action("btn-5",(ctx)=>{
  ctx.reply("چه کمکی از دستم برمیاد",{
    reply_markup:{
      inline_keyboard:[
        [{text:"درباره ما",callback_data:"btn-6"},{text:"ارتباط با پشتیبانی",callback_data:"btn-7"}]
      ]
    }
  })
})
bot.action("btn-6",(ctx)=>{
  ctx.reply("این یک ربات تلگرامی فروشگاهی جهت تست ساخته شده است")
})
bot.action("btn-7",(ctx)=>{
  ctx.reply("ایدی پشتیبانی : \n @")
})

const { Telegraf } = require('telegraf');
// فرض بر این است که PORT در جای دیگری تعریف شده است، مثلاً: const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 3000; // مطمئن شوید که این خط وجود دارد و به درستی تعریف شده است

const WEBHOOK_URL = 'https://telegram-bot-v8u3.onrender.com'; // در اینجا نیازی به اسلش انتهایی نیست، Telegraf در صورت نیاز با مسیر آن را اضافه می‌کند
const bot = new Telegraf(process.env.BOT_TOKEN); // مطمئن شوید که BOT_TOKEN به درستی بارگذاری شده است

// هندلرهای ربات شما (bot.start, bot.help و غیره) در اینجا قرار می‌گیرند

// راه اندازی ربات در حالت وب هوک
bot.launch({
  webhook: {
    domain: WEBHOOK_URL,
    port: PORT,
    secretPath: '/telegraf-webhook' // این مسیر در URL وب هوک استفاده خواهد شد: WEBHOOK_URL/telegraf-webhook
  }
}).then(() => {
  console.log('Bot started with webhook!');
  // حذف این خط: bot.telegram.setWebhook(WEBHOOK_URL + bot.webhookSecretPath || '');
  // bot.launch({ webhook: ... }) خودش وب هوک را در تلگرام تنظیم می کند.
}).catch(err => {
  console.error('Error starting bot:', err);
});

// این خطوط برای توقف آرام سرور در صورت سیگنال‌های SIGINT/SIGTERM هستند.
// در محیط‌هایی مانند Render که فرایندها توسط پلتفرم مدیریت می‌شوند، ممکن است
// اینها کمتر حیاتی باشند اما داشتنشان ضرری ندارد.
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
