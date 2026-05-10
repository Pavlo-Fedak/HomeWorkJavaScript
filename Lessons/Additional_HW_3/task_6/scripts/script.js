// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
// – знайти найбільшу книжку.
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//
// – знайти книжку/ки з найдовшою назвою
//
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор


let books = [
    {
        title: 'Harry Potter',
        pages: 350,
        authors: ['J. K. Rowling'],
        genres: ['fantasy', 'adventure']
    },
    {
        title: 'The Lord of the Rings',
        pages: 1200,
        authors: ['J. R. R. Tolkien'],
        genres: ['fantasy', 'adventure', 'classic']
    },
    {
        title: 'Good Omens',
        pages: 432,
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        genres: ['fantasy', 'comedy', 'fiction']
    },
    {
        title: 'Clean Code',
        pages: 464,
        authors: ['Robert Martin'],
        genres: ['programming', 'education']
    },
    {
        title: 'JavaScript The Definitive Guide',
        pages: 1096,
        authors: ['David Flanagan'],
        genres: ['programming', 'javascript','education' , 'education']
    }
];

// – знайти найбільшу книжку.

// let biggestBook = books[0];
//
// for (const book of books) {
//     if( book.pages > biggestBook.pages ) {
//         biggestBook = book;
//     }
// }
// console.log(biggestBook);


// – знайти книжку/ки з найбільшою кількістю жанрів

// let maxGenresBook = books[0];
//
// for (const book of books) {
//     if (book.genres.length > maxGenresBook.genres.length) {
//         maxGenresBook = book;
//     }
// }
//
// console.log(maxGenresBook);
//
// // – знайти книжку/ки з найдовшою назвою
//
// let longestTitleBook = books[0];
//
// for (const book of books) {
//     if (book.title.length > longestTitleBook.title.length) {
//         longestTitleBook = book;
//     }
// }
//
// console.log(longestTitleBook);
//
// // – знайти книжку/ки, які писали 2 автори
// for (const book of books) {
//     if (book.authors.length === 2) {
//         console.log(book);
//     }
// }

// – знайти книжку/ки, які писав 1 автор
for (const book of books) {
    if (book.authors.length === 1) {
        console.log(book);
    }
}
