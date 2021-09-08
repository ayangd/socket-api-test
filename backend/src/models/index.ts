import { Sequelize } from 'sequelize';
import initItem from './item';

export const sequelize = new Sequelize('sqlite:../database.sqlite');
export const Item = initItem(sequelize);
