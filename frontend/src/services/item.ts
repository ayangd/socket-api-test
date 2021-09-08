import { Optional } from '../react-app-env';
import Publisher from '../utils/publisher';
import { socket } from './index';

export interface ItemAttributes {
    id: number;
    name: string;
    price: number;
}

export interface ItemCreationAttributes extends Optional<ItemAttributes, 'id'> {}

export const ItemPublisher = new Publisher<ItemAttributes[]>();

export function addItem(item: ItemCreationAttributes) {
    socket.emit('addItem', item);
}

export function requestItems() {
    socket.emit('requestItems');
}

socket.on('receiveItems', (items: ItemAttributes[]) => {
    ItemPublisher.publish(items);
});