// SIDEBAR

const menuItem = document.querySelectorAll('.menu-item');

// MESSAGES 
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


// remove active class item 

const changeActiveItem = () => {
  menuItem.forEach(item => {
    item.classList.remove('active');
  })
}
menuItem.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem()
    item.classList.add('active');

    if (item.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none';
    } else {
      document.querySelector('.notifications-popup').style.display = 'block';
    }
  })
})

// search chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(message)
  message.forEach(user => {
    console.log(user)
    let name = user.querySelector('h5').textContent.toLowerCase();
    console.log(name)
    if (name.indexOf(val) != -1) {
      user.style.display = 'flex';
    } else {
      user.style.display = 'none';
    }
  })
}

// searach chat
messageSearch.addEventListener('keyup', searchMessage)

// highlight messages card when message menu item clicked
messageNotification.addEventListener('click', () => {
  message.style.boxShadow = '0 0 1rem var(--color-primary)';
  messageNotification.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
});