"use strict"

const booksInLibrary = [];

function Book(title, author, pageCount, readStatus){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
}

let book1 = new Book('War and Peace', 'Leo Tolstoy', '972', true);

