import './App.css';
import { createUseStyles } from 'react-jss';
import {} from './services';
import { useEffect, useState } from 'react';
import { addItem, ItemAttributes, ItemPublisher, requestItems } from './services/item';

const useStyles = createUseStyles({
    App: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
    },
    LeftPanel: {
        backgroundColor: '#ddd',
        boxShadow: '1px 0 5px #777',
        height: '100vh',
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    ItemTable: {
        borderSpacing: '0',
        '& th, & td': {
            border: '1px solid black',
        },
        padding: '8px',
    },
});

function App() {
    const classes = useStyles();
    const [items, setItems] = useState<ItemAttributes[]>([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        let mounted = true;

        const updateItems = (items: ItemAttributes[]) => {
            if (mounted) {
                setItems(items);
            }
        };
        ItemPublisher.addSubscriber(updateItems);
        requestItems();

        return () => {
            mounted = false;
            ItemPublisher.removeSubscriber(updateItems);
        };
    }, []);

    return (
        <div className={classes.App}>
            <div className={classes.LeftPanel}>
                <div>Name:</div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>Price:</div>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button
                    onClick={() => addItem({ name, price: parseFloat(price) })}
                >
                    Add
                </button>
            </div>
            <div>
                <table className={classes.ItemTable}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {items.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default App;
