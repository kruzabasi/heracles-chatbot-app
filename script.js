var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



let bot = new RiveScript();

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

const brains = [
  'https://gist.githubusercontent.com/benjamin-bala/6ad440da644d80c33f22e6266c087d0c/raw/ecf426567e926cec48f6dda8b5adf5bfe0943983/brain.rive'
];
const anagram =[
'https://gist.githubusercontent.com/benjamin-bala/984cfdacdd7e89aa86f58bb04948daec/raw/2273bbcd7bc9504a50fbbd3774c3a50c550fa73a/anagram.rive'
];
bot.loadFile(anagram).catch(botNotReady);
bot.loadFile(brains).then(botReady).catch(botNotReady);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = '';
});

function botReply(message){
  message_container.innerHTML += `<div class="bot">${message}</div>`;
  location.href = '#edge';
}

function selfReply(message){
  message_container.innerHTML += `<div class="self">${message}</div>`;
  location.href = '#edge';
  
  bot.reply("local-user", message).then(function(reply) {
    botReply(reply);
  });
}

function botReady(){
  bot.sortReplies();
  botReply('Hello, What is your name?');
}

function botNotReady(err){
  console.log("An error has occurred.", err);
}