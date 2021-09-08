export type GetPublication<T> = (t: T) => void;

export default class Publisher<T> {
    subscribers: GetPublication<T>[] = [];

    addSubscriber(subscriber: GetPublication<T>) {
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber: GetPublication<T>) {
        const index = this.subscribers.indexOf(subscriber);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    publish(t: T) {
        this.subscribers.forEach((sendPublication: GetPublication<T>) =>
            sendPublication(t)
        );
    }
}
