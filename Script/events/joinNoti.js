module.exports.config = {
  name: "DIGITAL SERVIES HUB",
  eventType: ["log:subscribe"],
  version: "1.0.2",
  credits: "ALAMIN KHAN",
  description: "Welcome message with optional image/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];
  const paths = [
    join(__dirname, "cache", "joinGif"),
    join(__dirname, "cache", "randomgif")
  ];
  for (const path of paths) {
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
  }
};

module.exports.run = async function({ api, event }) {
  const fs = require("fs");
  const path = require("path");
  const { threadID } = event;
  
  const botPrefix = global.config.PREFIX || "/";
  const botName = global.config.BOTNAME || "𝗦𝗵𝗮𝗵𝗮𝗱𝗮𝘁 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁";

 
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    await api.changeNickname(`[ ${botPrefix} ] • ${botName}`, threadID, api.getCurrentUserID());

    api.sendMessage("চ্ঁলে্ঁ এ্ঁসে্ঁছি্ঁ 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 এঁখঁনঁ তোঁমাঁদেঁরঁ সাঁথেঁ আঁড্ডাঁ দিঁবঁ..!", threadID, () => {
      const randomGifPath = path.join(__dirname, "cache", "randomgif");
      const allFiles = fs.readdirSync(randomGifPath).filter(file =>
        [".mp4", ".jpg", ".png", ".jpeg", ".gif", ".mp3"].some(ext => file.endsWith(ext))
      );

      const selected = allFiles.length > 0 
        ? fs.createReadStream(path.join(randomGifPath, allFiles[Math.floor(Math.random() * allFiles.length)])) 
        : null;

      const messageBody = `╭•┄┅═══❁🌺❁═══┅┄•╮
     আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ
╰•┄┅═══❁🌺❁═══┅┄•╯

𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐬𝐨 𝐦𝐮𝐜𝐡 𝐟𝐨𝐫 𝐚𝐝𝐝𝐢𝐧𝐠 𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐢-𝐠𝐫𝐨𝐮𝐩-🖤🤗
𝐈 𝐰𝐢𝐥𝐥 𝐚𝐥𝐰𝐚𝐲𝐬 𝐬𝐞𝐫𝐯𝐞 𝐲𝐨𝐮 𝐢𝐧𝐚𝐡𝐚𝐥𝐥𝐚𝐡 🌺❤️

𝐓𝐨 𝐯𝐢𝐞𝐰 𝐚𝐧𝐲 𝐜𝐨𝐦𝐦𝐚𝐧𝐝:
${botPrefix}Help
${botPrefix}Info
${botPrefix}Admin

★ যেকোনো অভিযোগ অথবা হেল্প এর জন্য এডমিন ALAMIN KHAN কে নক করতে পারেন ★
➤𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐞𝐫: https://m.me/Iloveyouakalamin
➤𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: https://wa.me/+8801326251753

❖⋆═══════════════════════⋆❖
          𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 ➢ ALAMIN KHAN`;

      if (selected) {
        api.sendMessage({ body: messageBody, attachment: selected }, threadID);
      } else {
        api.sendMessage(messageBody, threadID);
      }
    });

    return;
  }

 
  try {
    const { createReadStream, readdirSync } = global.nodemodule["fs-extra"];
    let { threadName, participantIDs } = await api.getThreadInfo(threadID);
    const threadData = global.data.threadData.get(parseInt(threadID)) || {};
    let mentions = [], nameArray = [], memLength = [], i = 0;

    for (let id in event.logMessageData.addedParticipants) {
      const userName = event.logMessageData.addedParticipants[id].fullName;
      nameArray.push(userName);
      mentions.push({ tag: userName, id });
      memLength.push(participantIDs.length - i++);
    }
    memLength.sort((a, b) => a - b);

    let msg = (typeof threadData.customJoin === "undefined") ? `╭•┄┅═══❁🌺❁═══┅┄•╮
     আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ
╰•┄┅═══❁🌺❁═══┅┄•╯
📱 Root Service | 🔓 Unlock | 🛠️ FRP | 💻 Panel Sell
✔️ Respect Everyone
✔️ No Spam
✔️ No Toxic Behaviour
✔️ Follow Admin Rules
📩 Service নিতে ইনবক্স করুন।
🤝 Stay Connected & Grow Together!

নিচে তোমার কাজের সাথে মিলিয়ে একটা customized welcome/rules message দিলাম — ফোন রুট সার্ভিস ও প্যানেল সেলিং গ্রুপের জন্য সুন্দরভাবে সাজানো:

📌 𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑶𝒖𝒓 𝑹𝒐𝒐𝒕 & 𝑷𝒂𝒏𝒆𝒍 𝑪𝒐𝒎𝒎𝒖𝒏𝒊𝒕𝒚 👋
➤ এখানে Phone Root Service, Unlock, FRP, Custom Recovery ও বিভিন্ন Panel Service সম্পর্কিত আলোচনা করা হয়। 🔧📱
➤ সবাই ভদ্রভাবে কথা বলবেন এবং একে অপরকে সহযোগিতা করবেন। 🤝
➤ অযথা স্প্যাম, ঝগড়া বা উস্কানিমূলক কথা বলা থেকে বিরত থাকুন। 🚫
➤ কাজ সংক্রান্ত তথ্য স্পষ্টভাবে দিন যাতে দ্রুত সাপোর্ট দেওয়া যায়। ⚡
➤ গ্রুপের রুলস মেনে চলুন এবং এডমিনের নির্দেশনা অনুসরণ করুন। ✅
🔰 Trusted Root & Panel Service
📩 কাজের জন্য ইনবক্স করুন | Fast Response • Secure Service • Trusted Deal

›› প্রিয় {name},  
আপনি এই গ্রুপের {soThanhVien} নম্বর মেম্বার!

›› গ্রুপ: {threadName}

💌 🌺 𝐖 𝐄 𝐋 𝐂 𝐎 𝐌 𝐄 🌺 💌
╭─╼╾─╼🌸╾─╼╾───╮
  ALAMIN KHAN 🌺
╰───╼╾─╼🌸╾─╼╾─╯

❖⋆══════════════════════════⋆❖` : threadData.customJoin;

    msg = msg
      .replace(/\{name}/g, nameArray.join(', '))
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);

    const joinGifPath = path.join(__dirname, "cache", "joinGif");
    const files = readdirSync(joinGifPath).filter(file =>
      [".mp4", ".jpg", ".png", ".jpeg", ".gif", ".mp3"].some(ext => file.endsWith(ext))
    );
    const randomFile = files.length > 0 
      ? createReadStream(path.join(joinGifPath, files[Math.floor(Math.random() * files.length)])) 
      : null;

    return api.sendMessage(
      randomFile ? { body: msg, attachment: randomFile, mentions } : { body: msg, mentions },
      threadID
    );
  } catch (e) {
    console.error(e);
  }
};
