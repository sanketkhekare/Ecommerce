import R from 'ramda';
const initialState = [];

export default (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT_TO_BASKET':
        // console.log("Inside basket reducer");
            return(
                R.append(action.payload,state)
            );
        case 'REMOVE_PRODUCT_FROM_BASKET':
            return(
                R.without(R.of(action.payload),state)
            );
        case 'CLEAN_BASKET':
            return initialState;
        default:
            return state;
    }
};