import xFetch from '../utils/request'

const url='www.baidu.com'
const UPDATE_LOAD='UPDATE_LOAD';


function getMens(data,callback){
    return dispatch=>{
        xFetch(url,{
            data:data,
            method:'post'
        }).then((result)=>{
            callback();
            dispatch(getMensData(result))
            debugger
        })
    }
}

function getMensData(data){
    return{
        type:UPDATE_LOAD,
        payload:data
    }
}

export{getMens}