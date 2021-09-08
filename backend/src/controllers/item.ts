import { Socket } from 'socket.io';
import { Item } from '../models';
import { ItemAttributes } from '../models/item';

export default function createSocketEvents(socket: Socket) {
    socket.on('requestItems', () => {
        Item.findAll().then((items) => {
            socket.emit('receiveItems', items);
        });
    });

    socket.on('addItem', (item: ItemAttributes) => {
        Item.create(item).then((newItem) => {
            Item.findAll().then((items) => {
                socket.broadcast.emit('receiveItems', items);
                socket.emit('receiveItems', items);
            });
        });
    });
};