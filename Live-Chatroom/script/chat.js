/**************** GOALS(TODOS) *****************/
// Adding new chat to the documents
// Seting up real time listener to get new chat
// Updating the username
// Updating the room.

class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chat = db.collection('chat');
    this.unsub;
  }

  async Addchat (message){  /**** Adding document to the DB(chat) collections ****/
    const now = new Date();   // Format a chat object
    const chat = {
      message,
      room: this.room,
      username: this.username,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    const response = await this.chat.add(chat);   /**** Save the document to the DB ****/
    return response;
  };

  getChat(callBack){  /**** Seting the real time listener for the chat ****/
    this.chat
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const doc = change.doc.data();
            callBack(doc);
          }
        })
      })
  }

  updateUserName(username){   /**** Updating the username ****/
    this.username = username;
    localStorage.setItem('username', username);
  }
  updateRoom(room){   /**** Updating the Room ****/
    this.room = room;
    console.log("room updated successfully!");
    if (this.unsub) {
      this.unsub();
    }
  }
};



// setTimeout(() => { //**** For testing perpose ***/
//   chatroom.updateRoom('gaming');
//   chatroom.getChat((data) => {
//     console.log(data);
//   });
// }, 1000);
