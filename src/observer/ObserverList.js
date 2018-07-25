
/**
 * @author haner
 * @date 2018/7/25
 * @brief
 */


class ObserverList {

    constructor() {
        this.observers = [];
    }

    add(obj){
        return this.observers.push( obj );
    }

    get(index){
        if( index > -1 && index < this.observers.length ){
            return this.observers[ index ];
        }
    }

    count(){
        return this.observers.length;
    }

    indexOf(obj, startIndex){
        let i = startIndex;

        while( i < this.observers.length ){
            if( this.observers[i] === obj ){
                return i;
            }
            i++;
        }

        return -1;
    }

    removeAt(index){
        this.observers.splice( index, 1 );
    }
}

export default ObserverList;
