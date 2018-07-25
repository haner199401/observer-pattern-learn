/**
 * @author haner
 * @date 2018/7/25
 * @brief
 */


class PubSub {
    constructor() {
        this.events = {};
    }

    has(key) {
        return !!this.events[key];
    }

    indexOf(listeners, listener) {
        let i = 0;

        while (i < listeners.length) {
            if (listeners[i] === listener) {
                return i;
            }
            i++;
        }

        return -1;
    };

    publish(key, args) {
        let listeners = this.events[key];
        if (!listeners) return;
        let len = listeners.length;

        while (len--) {
            listeners[len](args);
        }
    }

    subscribe(key, listener) {
        let listeners = this.events[key] = this.events[key] || [];
        // 不重复添加事件
        if (this.indexOf(listeners, listener) === -1) {
            listeners.push(listener);
        }

        window.events = this.events;
    }

    unsubscribe(key) {

    }


}

export default PubSub;
