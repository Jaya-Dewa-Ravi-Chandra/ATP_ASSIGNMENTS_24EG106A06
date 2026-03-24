/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise

 */
class Book
{
    title='';
    author='';
    pages=0;
    isAvailable=true;
    constructor(title,author,pages,isAvailable)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow()
    {
        this.isAvailable=false;
    }
    returnBook()
    {
        this.isAvailable=true;
    }
    getInfo()
    {
        console.log(`${this.title}\n${this.author}\n${this.pages}\nis Available:`,this.isAvailable)
    }
    isLongBook()
    {
        return this.pages>300;
    }
}
/*1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books */
const a=new Book('JujutsuKaisen',"Gege atukami",265,true)
const b=new Book('Harry Potter',"J.K Rowling",410,true)
const c=new Book('1984',"George Orwell",328,true)
const d=new Book('The Hobbit',"J.R.R Tolkien",310,true)
const e=new Book('Atomic Habits',"James Clear",250,true)

const books=[a,b,c,d,e]
books.map(book=>book.getInfo())
b.borrow()
c.borrow()
console.log("availability after borrowing:")
console.log(b.title,b.isAvailable)
console.log(c.title,c.isAvailable)
b.returnBook()
console.log("availability after returning:")
console.log(b.title,b.isAvailable)
let count=0
books.map(book=>{
    if(book.isLongBook()) 
        count++
})
console.log("number of long books:",count)
console.log("Available books:")
books.filter(book=>{
    if(book.isAvailable) 
    console.log(book.title)
})

