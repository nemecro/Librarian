"use strict"

const booksInLibrary = [];

const bookSection = document.querySelector('#bookSection');

function Book(title, author, pageCount, readStatus){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;

    this.icon = getRandomBookIcon();
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title = 'Untitled', author = 'Author unknown', pageCount = 'N/A', readStatus = 'not read'){
    booksInLibrary.push(new Book(title, author, pageCount, readStatus));
}

function renderBooks(){
    bookSection.replaceChildren();
    createBookCardElements();
}

function changeBookStatus(book){
    book.readStatus = book.readStatus === true ? false : true;
    renderBooks();
}

function removeBookFromLibrary(book){
    booksInLibrary.splice(booksInLibrary.indexOf(book), 1);
    renderBooks();
}

function createBookCardElements(){
    booksInLibrary.forEach(book => {
    const bookCardContainer = document.createElement('div');
    bookCardContainer.classList.add('bookCardContainer');

    const bookProfileContainer = document.createElement('div');
    bookProfileContainer.classList.add('bookProfileContainer');
    
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('iconContainer');
    iconContainer.innerHTML = book.icon;

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
    readStatus.textContent = book.readStatus === true ? 'read' : 'not read';
    readStatus.classList.add('bookPara');

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttonsContainer');

    const changeStatusBtn = document.createElement('button');
    changeStatusBtn.classList.add('changeBtn');
    changeStatusBtn.textContent = 'Change status';
    changeStatusBtn.addEventListener('click', () => changeBookStatus(book));

    const removeBookBtn = document.createElement('button');
    removeBookBtn.classList.add('removeBtn');
    removeBookBtn.textContent = 'Delete';
    removeBookBtn.addEventListener('click', () => removeBookFromLibrary(book));

    bookProfileContainer.append(iconContainer, textContainer);
    buttonsContainer.append(changeStatusBtn, removeBookBtn);
    minorInfoContainer.append(pageCount, readStatus);
    textContainer.append(title, author, minorInfoContainer);
    bookCardContainer.append(bookProfileContainer, buttonsContainer);
    bookSection.append(bookCardContainer);
    })
}

function getRandomBookIcon(){
    return `
      <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Book body with rounded corners -->
        <rect x="4" y="4" width="56" height="72" rx="12" fill="${getRandomHexColor()}"/>
        <!-- Spine line -->
        <rect x="12" y="6" width="3" height="58" rx="1.5" fill="${getRandomHexColor()}"/>
        <!-- Bottom rounded bar (pages) -->
        <rect x="9" y="62" width="50" height="12" rx="6" fill="#FDF6ED"/>
    </svg>
    `;
}

function getRandomHexColor() {
  // Generate a random number between 0 and 0xFFFFFF (16777215)
  const randomInt = Math.floor(Math.random() * 16777216);
  // Convert to hexadecimal and pad with leading zeros if necessary
  const hexColor = '#' + randomInt.toString(16).padStart(6, '0');
  return hexColor;
}

// FORM RELATED
const newBookDialog = document.querySelector('#newBookDialog');
const openFormBtn = document.querySelector('#openFormBtn');
const dialogCloseBtn = document.querySelector('#dialogCloseBtn');
const dialogSubmitBtn = document.querySelector('#dialogSubmitBtn');

const newBookForm = document.querySelector('#newBookForm');
const formTitleField = document.querySelector('#title');
const formAuthorField = document.querySelector('#author');
const formPageCountField = document.querySelector('#pageCount');
const formReadStatusFieldYes = document.querySelector('#yes');

openFormBtn.addEventListener('click', () => {
    newBookDialog.showModal();
});

dialogCloseBtn.addEventListener('click', () => {
    newBookDialog.close();
})

newBookForm.addEventListener('submit', () => {
    // the ternary checks are neccessary for the function to assign default values in case the fields were left empty
    addBookToLibrary(formTitleField.value === '' ? undefined : formTitleField.value, formAuthorField.value === '' ? undefined : formAuthorField.value, formPageCountField.value === '' ? undefined : formPageCountField.value, formReadStatusFieldYes.checked);
    renderBooks();
});

