import library from '../entity/library'
export class BookRepository extends library.Book {

    constructor() {
        super()
    }

    getBookByCategory(category) {
        return this.findAll({
            where: {
                category: category
            }
        })
    }

    getBookSortByName(isDesc?: false) {
        let order = (isDesc) ? 'DESC' : 'ASC'
        return this.findAll({
            order: [
                ['name', order]
            ]
        })
    }
}

const bookRepository: BookRepository = new BookRepository()

export default bookRepository
