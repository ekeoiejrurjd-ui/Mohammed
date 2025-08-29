module.exports = async ({ text, sock, from }) => {
  if (text.toLowerCase() === 'الاوامر') {
    const tarzanMessage = `
┏━━━━━━━━━━━━━━━━━━━┓
✨ *قائمة أوامر بوت إيتاشي * ✨
┗━━━━━━━━━━━━━━━━━━━┛

📵 *امر تكريش أي رقم*:
✅ *bug 967737xxxxxx*

🎯 *الأوامر الإضافية*:
🖼️ *img* ➤ البحث عن الصور
🔍 *emix* ➤ دمج الإيموجيات في ملصق
🎥 *tiktok* ➤ تحميل فيديوهات تيك توك

⚡ *مميزات قادمة*:
✅ الردود التلقائية
✅ قوائم تفاعلية
✅ دعم التحميل من جميع المنصات

━━━━━━━━━━━━━━━━━━━━━━
🤖 *بوت إيتاشي * ⚔️
> استمتع بأفضل تجربة واتساب بوت!
`;

    await sock.sendMessage(from, {
      image: { url: 'https://b.top4top.io/p_3489wk62d0.jpg' }, // ضع رابط صورتك هنا
      caption: tarzanMessage,
      footer: "⚔️ إيتاشي | بوت احترافي",
      buttons: [
        { buttonId: "img", buttonText: { displayText: "🖼️ بحث صور" }, type: 1 },
        { buttonId: "emix", buttonText: { displayText: "😎 دمج الإيموجيات" }, type: 1 },
        { buttonId: "tiktok", buttonText: { displayText: "🎥 تيك توك" }, type: 1 }
      ],
      headerType: 4
    });
  }
};
