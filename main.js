"use strict"

const booksInLibrary = [];

const bookSection = document.querySelector('#bookSection');

function Book(title, author, pageCount, readStatus){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;

    this.id = crypto.randomUUID();
}

function addBookToLibrary(title = 'Untitled', author = 'Author unknown', pageCount = 'N/A', readStatus = 'N/A'){
    booksInLibrary.push(new Book(title, author, pageCount, readStatus));
}

function renderBooks(){
    bookSection.replaceChildren();
    createBookCardElements();
}

function createBookCardElements(){
    booksInLibrary.forEach(book => {
    const bookCardContainer = document.createElement('div');
    bookCardContainer.classList.add('bookCardContainer');
    
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('iconContainer');
    iconContainer.innerHTML = `
      <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Book body with rounded corners -->
        <rect x="4" y="4" width="56" height="72" rx="12" fill="${getRandomHexColor()}"/>
        <!-- Spine line -->
        <rect x="12" y="6" width="3" height="58" rx="1.5" fill="${getRandomHexColor()}"/>
        <!-- Bottom rounded bar (pages) -->
        <rect x="9" y="62" width="50" height="12" rx="6" fill="#FDF6ED"/>
    </svg>
    `;

    const textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');

    const title = document.createElement('h3');
    title.textContent = book.title;
    title.classList.add('bookTitle');

    const author = document.createElement('h4');
    author.textContent = book.author;
    author.classList.add('bookAuthor');

    const minorInfoContainer = document.createElement('div');
    minorInfoContainer.classList.add('minorInfoContainer');

    const pageCount = document.createElement('p');
    pageCount.textContent = book.pageCount;
    pageCount.classList.add('bookPara');

    const readStatus = document.createElement('p');
    readStatus.textContent = book.readStatus;
    readStatus.classList.add('bookPara');

    minorInfoContainer.append(pageCount, readStatus)
    textContainer.append(title, author, minorInfoContainer);
    bookCardContainer.append(iconContainer, textContainer);
    bookSection.append(bookCardContainer);
    })
}

function getRandomHexColor() {
  // Generate a random number between 0 and 0xFFFFFF (16777215)
  const randomInt = Math.floor(Math.random() * 16777216);
  // Convert to hexadecimal and pad with leading zeros if necessary
  const hexColor = '#' + randomInt.toString(16).padStart(6, '0');
  return hexColor;
}

const newBookDialog = document.querySelector('#newBookDialog');
const openFormBtn = document.querySelector('#openFormBtn');
const dialogCloseBtn = document.querySelector('#dialogCloseBtn');
const dialogSubmitBtn = document.querySelector('#dialogSubmitBtn');

openFormBtn.addEventListener('click', () => {
    newBookDialog.showModal();
});

dialogCloseBtn.addEventListener('click', () => {
    newBookDialog.closest();
})



addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
renderBooks();