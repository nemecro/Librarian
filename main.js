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

