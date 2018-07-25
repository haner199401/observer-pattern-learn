/**
 * @author haner
 * @date 2018/7/25
 * @brief
 */


function Observer(){
    this.update = function(){
        throw new Error('实现该接口！')
    };
}

export default Observer;
