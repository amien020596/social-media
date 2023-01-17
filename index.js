// SIDEBAR

const menuItem = document.querySelectorAll('.menu-item');

// MESSAGES 
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEMES
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');

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
  message.forEach(user => {
    let name = user.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = 'flex';
    } else {
      user.style.display = 'none';
    }
  })
}

// searach chat
messageSearch.addEventListener('keyup', searchMessage)
console.log('messageNotification', messageNotification);
// highlight messages card when message menu item clicked
messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messageNotification.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.transition = 'all 300ms ease';
    messages.style.boxShadow = 'none';
  }, 2000);
});

// THEMES CUSTOMIZATION
const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

const closeThemeModal = (e) => {
  console.log('e.target.classList', e.target.classList)
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}

theme.addEventListener('click', openThemeModal)

themeModal.addEventListener('click', closeThemeModal)

// FONT SIZE 


const changeActiveSize = () => {
  fontSize.forEach(size => {
    size.classList.remove('active');
  })
}

fontSize.forEach(size => {
  let fontSize;

  size.addEventListener('click', () => {
    changeActiveSize()
    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '5.4rem')
      size.classList.add('active');
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '-7rem')
      size.classList.add('active');
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('----sticky-top-left', '-2rem')
      root.style.setProperty('----sticky-top-right', '-17rem')
      size.classList.add('active');
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      root.style.setProperty('----sticky-top-left', '-5rem')
      root.style.setProperty('----sticky-top-right', '-25rem')
      size.classList.add('active');
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left', '-10rem')
      root.style.setProperty('----sticky-top-right', '-33rem')
      size.classList.add('active');
    }

    document.querySelector('html').style.fontSize = fontSize;
  })


});