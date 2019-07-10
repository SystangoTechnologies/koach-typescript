export class Book {
    id: number
    name: string
    authorName: string
    category: string
    price: number
    totalPage: number

    constructor() {
        this.id = 0
        this.name = null
        this.authorName = null
        this.category = null
        this.price = 0
        this.totalPage = 0
    }

    setId(id: number) {
        this.id = id
    }

    setName(name: string) {
        this.name = name
    }

    setAuthorName(authorName: string) {
        this.authorName = authorName
    }

    setCategory(category: string) {
        this.category = category
    }

    setPrice(price: number) {
        this.price = price
    }

    setTotalPage(totalPage: number) {
        this.totalPage = totalPage
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getAuthorName(): string {
        return this.authorName
    }

    getCategory(): string {
        return this.category
    }

    getPrice(): number {
        return this.price
    }

    getTotalPage(): number {
        return this.totalPage
    }
}