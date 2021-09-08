import { Model, Optional, Sequelize } from 'sequelize';
import { DOUBLE, INTEGER, STRING } from 'sequelize';

export interface ItemAttributes {
    id: number;
    name: string;
    price: number;
}

export interface ItemCreationAttributes
    extends Optional<ItemAttributes, 'id'> {}

class Item
    extends Model<ItemAttributes, ItemCreationAttributes>
    implements ItemAttributes
{
    id!: number;
    name!: string;
    price!: number;

    readonly createdAt!: Date;
    readonly updatedAt!: Date;
}

function initItem(sequelize: Sequelize) {
    return Item.init(
        {
            id: {
                type: INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: STRING,
                allowNull: false,
            },
            price: {
                type: DOUBLE,
                allowNull: false,
            },
        },
        { tableName: 'Item', sequelize }
    );
}

export default initItem;