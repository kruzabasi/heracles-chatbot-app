let bot= new RiveScript();

const brains= [
    'rive/brain.rive'
//  'anyotherbrainfile.rive'
];
//bot.loadDirectory(dirName).then(botReady).catch(botNotReady);
bot.loadFile(brains).then(botReady).catch(botNotReady);

const message_containers=document.querySelector('.messages');
const form = document.querySelector('form');
var input_box=document.querySelector('input');
const input_box_lower=input_box.toLowercase();

form.addEventListener(‘submit’, (e) => {
 e.preventDefault();
 selfReply(input_box_lower.value);
 input_box_lower.value = ‘’;
});
function botReply(message){
 message_containers.innerHTML += `<div class=”bot”>${message}</div>`;
 location.href = ‘#edge’;
}
function selfReply(message){
 message_containers.innerHTML += `<div class=”self”>${message}</div>`;
 location.href = ‘#edge’;
 
 bot.reply(“local-user”, message).then(function(reply) {
 botReply(reply);
 });
}
function botReady(){
 bot.sortReplies();
 botReply(‘Hello’);
}
function botNotReady(err){
 console.log(“An error has occurred.”, err);
}
