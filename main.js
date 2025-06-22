"use strict"

const booksInLibrary = [];

function Book(title, author, pageCount, readStatus){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;

    this.id = crypto.randomUUID();
}

function addBookToLibrary(title = 'Untitled', author = 'Author unknown', pageCount = 'Not answered', readStatus = 'Not specified'){
    booksInLibrary.push(new Book(title, author, pageCount, readStatus));
}

function renderBooks(){
    const bookSection = document.querySelector('#bookSection');

    booksInLibrary.forEach(book => {
        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('h4');
        author.textContent = book.author;

        const pageCount = document.createElement('p');
        pageCount.textContent = book.pageCount;

        const readStatus = document.createElement('p');
        readStatus.textContent = book.readStatus;

        bookSection.append(title, author, pageCount, readStatus);
    })
}