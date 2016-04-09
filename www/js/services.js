angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },{
    id: 5,
    name: 'Dog Bachelor A',
    lastText: 'You on your way?',
    face: 'img/dog-1.png'
  }, {
    id: 6,
    name: 'Dog Bachelor B',
    lastText: 'Hey, it\'s me',
    face: 'img/dog-2.jpg'
  }, {
    id: 7,
    name: 'Dog Bachelor C',
    lastText: 'I should buy a boat',
    face: 'img/dog-3.jpg'
  }, {
    id: 8,
    name: 'Foolish Cat A',
    lastText: 'Look at my mukluks!',
    face: 'img/cat-2.jpg'
  }, {
    id: 9,
    name: 'Foolish Cat B',
    lastText: 'This is wicked good ice cream.',
    face: 'img/cat-3.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

window.addEventListener('native.keyboardshow', function(){
  document.body.classList.add('keyboard-open');
  console.log('add listener Keyboard-open');
});
