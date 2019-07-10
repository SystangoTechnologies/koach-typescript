import { Context } from 'koa'
import library from '../db/entity/library'
import { Book } from '../model/Book';

class BookService {
    constructor() { }

    // service for retrieving the single book using book id
    async getBook(ctx: Context): Promise<Book> {

        let bookId = parseInt(ctx.params.id)

        let bookModel = await library.Book.findByPk(bookId)

        let book: Book = new Book()

        if (bookModel) {
            book.setId(bookModel.id)
            book.setName(bookModel.name)
            book.setAuthorName(bookModel.author_name)
            book.setCategory(bookModel.category)
            book.setPrice(bookModel.price)
            book.setTotalPage(bookModel.total_page)
        }

        return book
    }

    // service for retrieving the all books
    async getAllBooks(ctx: Context): Promise<Array<Book>> {
        let bookModels = await library.Book.findAll()

        let books: Array<Book> = new Array<Book>()

        for (let bookModel of bookModels) {
            let book: Book = new Book()
            book.setId(bookModel.id)
            book.setName(bookModel.name)
            book.setAuthorName(bookModel.author_name)
            book.setCategory(bookModel.category)
            book.setPrice(bookModel.price)
            book.setTotalPage(bookModel.total_page)
            books.push(book)
        }

        return books
    }

    // service for adding the book
    async addBook(ctx: Context) {

        let name: string = ctx.request.body.name
        let authorName: string = ctx.request.body.authorName
        let category: string = ctx.request.body.category
        let price: number = ctx.request.body.price
        let totalPage = ctx.request.body.totalPage

        // adding book into database
        await library.Book.create({
            name: name,
            author_name: authorName,
            category: category,
            price: price,
            total_page: totalPage
        })
    }

    // service for updating the book
    async updateBook(ctx: Context) {

        let bookId = parseInt(ctx.params.id)
        let bookDetials = ctx.request.body

        // updating book detials into database
        let updateData = await library.Book.update(bookDetials, {
            where: {
                id: bookId
            }
        })

        return updateData[0]
    }

    // service for deleting the book
    async deleteBook(ctx: Context) {

        let bookId = parseInt(ctx.params.id)

        // deleting book from database
        let book = await library.Book.destroy({
            where: {
                id: bookId
            }
        })

    }

}


let bookService: BookService = new BookService()
export default bookService