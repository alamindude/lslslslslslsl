module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "Alamin kHAN",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি বস, ${name} কে আবার এড করতে পারলাম না। 
সম্ভবত উনি বটকে ব্লক করেছে অথবা তার প্রাইভেসি সেটিংসের কারণে এড করা যায় না। 
\nALAMIN KHAN`, event.threadID)
   } else api.sendMessage(`শোন, ${name}, ℹ️ এই গ্রুপ থেকে বের হওয়ার আগে এডমিনের অনুমতি নেওয়া আবশ্যক। আপনি অনুমতি ছাড়াই গ্রুপ ত্যাগ করেছেন, তাই আপনাকে পুনরায় গ্রুপে যুক্ত করা হয়েছে। ALAMIN KHAN \nALAMIN KHAN`, event.threadID);
  })
 }
}
