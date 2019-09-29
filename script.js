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
  'https://gist.githubusercontent.com/benjamin-bala/6ad440da644d80c33f22e6266c087d0c/raw/17ad459de274b80f29095d3bf9383a29132f8227/brain.rive'
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

//days array
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursdäy", "Friday", "Saturday"];
//months array
var month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//to distinuish each msg timestamp fro the other
var j = 0;
//get all classes in an array,same class name tho
var classesbot = [];
function botReply(message){
  message_container.innerHTML += `<p class='testbot'></p>
                  <div class="bot">${message}</div>`;
  classesbot = document.getElementsByClassName('testbot');
  classesbot[j].innerHTML= day[new Date().getDay()] + " , " + month[new Date().getMonth()] + " , " + new Date().getFullYear() +' || ' + new Date().getHours() + ":" + addZero(new Date().getMinutes());
 //increment variable, so next timestamp will not affect previous
  j= j+1;
  location.href = '#edge';


}

//same procedure as above
var i = 0;
var classes = [];
function selfReply(message){
  
  message_container.innerHTML += `<p class='testself'></p>
                  <div class="self">${message}</div>`;
  classes = document.getElementsByClassName('testself');
  
  bot.reply("local-user", message).then(function(reply) {
    botReply(reply);
  });

  classes[i].innerHTML= day[new Date().getDay()] + " , " + month[new Date().getMonth()] + " , " + new Date().getFullYear() +' || ' + new Date().getHours() + ":" + addZero(new Date().getMinutes());
     i= i+1;
  location.href = '#edge';


}
function addZero(minute){ //incase minute is returned as a single number, add a '0' to it as prefix
if (minute < 10)
{
    return ("0"+minute); 
}
else{            
    return minute;
}
}

function botReady(){
  bot.sortReplies();
  botReply('Hello');
}

function botNotReady(err){
  console.log("An error has occurred.", err);
}