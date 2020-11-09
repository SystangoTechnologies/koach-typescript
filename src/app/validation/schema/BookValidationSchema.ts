import Joi from 'joi';
class BookValidationSchema {
  constructor() { }
  static getBookSchema = Joi.object({
    id: Joi.number().positive().required()
  })

  static addBookSchema = Joi.object({
    name: Joi.string().required(),
    authorName: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().positive().required(),
    totalPage: Joi.number().positive().required()
  })

  static updateBookSchema = Joi.object({
    name: Joi.string(),
    authorName: Joi.string(),
    category: Joi.string(),
    price: Joi.number().positive(),
    totalPage: Joi.number().positive()
  })

  static deleteBookSchema = Joi.object({
    id: Joi.number().positive().required()
  })

}
export default BookValidationSchema;