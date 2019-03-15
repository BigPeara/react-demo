// import React from 'react';
import reqwest from 'reqwest'

function xFetch(url,options){
    let opts={...options};
    let xFt=reqwest({
        url,
        ...opts
    })
    // new Promise(function(resolve,reject){
    //     if(true){
    //         resolve()
    //     }else{
    //         reject()
    //     }
    // })
    return xFt
}

export default xFetch;