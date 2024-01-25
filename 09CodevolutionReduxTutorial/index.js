const {createStore,applyMiddleware}=require("redux");
const {thunk}=require("redux-thunk")

const FETCH_DATA_REQUEST='FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS='FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE='FETCH_DATA_FAILURE';

const initialState={
    loading:false,
    data:[],
    error:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST:return {
            ...state,
            loading:true
        };
        break;
        case FETCH_DATA_SUCCESS:return {
            ...state,
            loading:false,
            data:action.payload
        };break;
        case FETCH_DATA_FAILURE:return {
            ...state,
            loading:false,
            data:[],
            error:action.payload
        };break;
        default:state;
    }
}

const createFetchRequest=()=>{
    return {
        type:FETCH_DATA_REQUEST
    }
}

const createFetchSuccess=(data)=>{
    return {
        type:FETCH_DATA_SUCCESS,
        payload:data
    }
}

const createFetchFailure=(err)=>{
    return {
        type:FETCH_DATA_FAILURE,
        error:err
    }
}

const store=createStore(reducer,applyMiddleware(thunk));

function fetchData(){
    return function inside(dispatch){
        dispatch(createFetchRequest());

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            dispatch(createFetchSuccess(res));
        }).catch((err)=>{
            dispatch(createFetchFailure(err));
        })
    }
}

store.subscribe(()=>{
    console.log(store.getState());
})

store .dispatch(fetchData());



