import { RouterManager } from '../core/RouterManager'
import bookController from '../controller/BookController'

const bookRouterManager: RouterManager = new RouterManager('/books')

bookRouterManager.get('/:id', bookController.getBook)

bookRouterManager.get('/', bookController.getAllBooks)

bookRouterManager.post('/', bookController.addBook)

bookRouterManager.put('/:id', bookController.updateBook)

bookRouterManager.delete('/:id', bookController.deleteBook)


export default bookRouterManager

