import { Context } from 'koa'
import logger from '../../logger'
import httpConstants from '../constant/httpConstants'
import bookService from '../service/BookService'
import bookValidator from '../validation/BookValidator'
import { Book } from '../model/Book'


class BookController {
    constructor() { }

    async getBook(ctx: Context) {
        try {
            let validation = await bookValidator.getBook(ctx)
            if (!validation.isValid) {
                ctx.status = validation.status
                ctx.body = validation.data
                return
            }

            logger.info(`Controller : getBook, Request-Body : ${JSON.stringify(ctx.params)}`)

            // getting the book
            let book: Book = await bookService.getBook(ctx)

            ctx.status = httpConstants.HTTP_SUCCESS_OK
            ctx.body = book
        } catch (err) {
            ctx.status = httpConstants.HTTP_INTERNAL_SERVER_ERROR
            ctx.body = { error: err.message }

            logger.error(`Controller : getBook, Error : ${JSON.stringify(err)}`)
        }
    }

    async getAllBooks(ctx: Context) {
        try {
            let books: Array<Book> = await bookService.getAllBooks(ctx)

            ctx.status = httpConstants.HTTP_SUCCESS_OK
            ctx.body = books
            logger.info(`Controller : getAllBooks, Response-Body : ${JSON.stringify(ctx.body)}`)
        } catch (err) {
            ctx.status = httpConstants.HTTP_INTERNAL_SERVER_ERROR
            ctx.body = { error: err.message }

            logger.error(`Controller : getAllBooks, Error : ${JSON.stringify(err)}`)
        }
    }

    async addBook(ctx: Context) {
        try {
            let validation = await bookValidator.addBook(ctx)
            if (!validation.isValid) {
                ctx.status = validation.status
                ctx.body = validation.data
                return
            }

            logger.info(`Controller : addBook, Request-Body : ${JSON.stringify(ctx.request.body)}`)

            // adding the book
            await bookService.addBook(ctx)

            ctx.status = httpConstants.HTTP_CREATED
        } catch (err) {
            ctx.status = httpConstants.HTTP_INTERNAL_SERVER_ERROR
            ctx.body = { error: err.message }

            logger.error(`Controller : addBook, Error : ${JSON.stringify(err)}`)
        }
    }


    async updateBook(ctx: Context) {
        try {
            let validation = await bookValidator.updateBook(ctx)
            if (!validation.isValid) {
                ctx.status = validation.status
                ctx.body = validation.data
                return
            }

            logger.info(`Controller : updateBook, Request-Body : ${JSON.stringify(ctx.request.body)}`)
            logger.info(`Request-Params : ${JSON.stringify(ctx.params)}`)

            // adding the book
            let updatedCount = await bookService.updateBook(ctx)

            if (!updatedCount) {
                ctx.status = httpConstants.HTTP_CONFLICT
                ctx.body = { error: 'book does not exist.' }
            } else {
                ctx.status = httpConstants.HTTP_SUCCESS_OK
            }
        } catch (err) {
            ctx.status = httpConstants.HTTP_INTERNAL_SERVER_ERROR
            ctx.body = { error: err.message }

            logger.error(`Controller : updateBook, Error : ${JSON.stringify(err)}`)
        }
    }


    async deleteBook(ctx: Context) {
        try {
            let validation = await bookValidator.deleteBook(ctx)
            if (!validation.isValid) {
                ctx.status = validation.status
                ctx.body = validation.data
                return
            }

            logger.info(`Controller : deleteBook, Request-Body : ${JSON.stringify(ctx.request.body)}`)
            logger.info(`Request-Params : ${JSON.stringify(ctx.params)}`)

            // adding the book
            await bookService.deleteBook(ctx)

            ctx.status = httpConstants.HTTP_NO_CONTENT
        } catch (err) {
            ctx.status = httpConstants.HTTP_INTERNAL_SERVER_ERROR
            ctx.body = { error: err.message }

            logger.error(`Controller : deleteBook, Error : ${JSON.stringify(err)}`)
        }
    }

}

const bookController: BookController = new BookController()
export default bookController 