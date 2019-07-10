import {
    Sequelize,
    DataTypes,
    IntegerDataType
} from 'sequelize';

export interface BookAttributes {
    name?: string;
    author_name?: string;
    category?: string;
    price?: number;
    total_page?: number;
}

export interface BookInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    name: string;
    author_name: string;
    category: string;
    price: number;
    total_page: number;

}

export default (sequelize: Sequelize, DataTypes) => {
    var Book = sequelize.define('Book', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        total_page: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Book
};
