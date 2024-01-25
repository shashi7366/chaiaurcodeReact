const store=require("./app/store");
const cakeActions=require("./features/cake/CakeSlice").cakeActions;
const {fetchUsers}=require("./features/users/users");

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});

console.log(store.getState());
// store.dispatch(cakeActions.cakeOrdered());
// store.dispatch(cakeActions.cakeRestored(3));

store.dispatch(fetchUsers());


