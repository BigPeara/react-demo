import _ from 'lodash'
const switchMap={};
const initDa={};
const UPDATE_LOAD='UPDATE_LOAD';


switchMap[UPDATE_LOAD]=(state,action)=>{
    return Object.assign({},state,action.payload)
}

function initData(state=initDa,action){
    if(_.isEqual(action.type,UPDATE_LOAD)&&switchMap[action.type]){
        return switchMap[action.type](state,action);
    }else{
        return state;
    }
}

export{
    initData
}

