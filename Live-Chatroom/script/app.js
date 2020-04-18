/*** DOM Queries ***/
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newUsername = document.querySelector('.new-name');
const alertUser = document.querySelector('.update-mssg');
const roomUpdate = document.querySelector('.chat-room');

/***  Add a chat ***/
newChatForm.addEventListener('submit', e => { 
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.Addchat(message)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
});

/*** Update username ***/ 
newUsername.addEventListener('submit', e => {
  e.preventDefault();
  const username = newUsername.name.value.trim();
  chatroom.updateUserName(username);
  newUsername.reset();
  alertUser.textContent = `Your name was updated to ${username} `; /*** Show then hide update message ***/
  setTimeout(() => alertUser.textContent = "", 3000)
});

roomUpdate.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChat(chat => chatUI.render(chat));
  }
});

/*** storing username in the localstorage ***/ 
const username = localStorage.username ? localStorage.username : 'name';

/**** Chatroom & chatUI instances ****/
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username); 

chatroom.getChat((data) => { /*** Get the chat & render ***/
  chatUI.render(data);
});