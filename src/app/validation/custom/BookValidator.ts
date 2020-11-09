import { Context } from 'koa'
import httpConstants from '../../constant/HttpConstants'
import BookValidationSchema from '../schema/BookValidationSchema';
import joiValidator from '../joi/validator';
export class BookValidator {
    constructor() { }

    async getBook(ctx: Context) {
        //joi validation for request
        await joiValidator.joiValidation(ctx.params, BookValidationSchema.getBookSchema);

        let response = {
            isValid: true,
            status: httpConstants.HTTP_SUCCESS_OK,
            data: {}
        }

        return response
    }

    async addBook(ctx: Context) {
        joiValidator.joiValidation(ctx.request.body, BookValidationSchema.addBookSchema)
        let response = {
            isValid: true,
            status: httpConstants.HTTP_SUCCESS_OK,
            data: {}
        }

        return response
    }

    async updateBook(ctx: Context) {
        joiValidator.joiValidation(ctx.request.body, BookValidationSchema.updateBookSchema)
        let response = {
            isValid: true,
            status: httpConstants.HTTP_SUCCESS_OK,
            data: {}
        }

        let bookDetails = ctx.request.body

        if (Object.keys(bookDetails).length === 0) {
            response.isValid = false
            response.status = httpConstants.HTTP_UNPROCESSABLE_ENTITY
            response.data['error'] = 'Please provide book details to update'
            return response
        }

        return response
    }

    async deleteBook(ctx: Context) {
        await joiValidator.joiValidation(ctx.params, BookValidationSchema.deleteBookSchema);

        let response = {
            isValid: true,
            status: httpConstants.HTTP_SUCCESS_OK,
            data: {}
        }

        return response
    }
}

const bookValidator: BookValidator = new BookValidator()

export default bookValidator