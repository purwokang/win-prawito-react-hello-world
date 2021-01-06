const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}

// ! 4 step dalam memahami redux

// * Reducer
// Suatu fungsi yang digunakan untuk mengupdate store. Hanya reducer yang bisa mengupdate store.
// Reducer biasa disebut juga sebagai agen, yang memiliki banyak task list
const rootReducer = (state = initialState, action) => {
    // console.log(action);
    // if (action.type === 'ADD_AGE') {
    //     return {
    //         ...state,
    //         age: state.age + 1
    //     }
    // }
    // if (action.type === 'CHANGE_VALUE') {
    //     return {
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }
    // return state;

    // mengganti if dengan switch:
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}


// * Store
// Sebuah wadah besar yang menyimpan value atau state secara global
const store = createStore(rootReducer);
console.log(store.getState());


// * Subscription
// Proses pemanggilan store yang kita perlukan
store.subscribe(() => {
    console.log('store change: ', store.getState());
})


// * Dispatching Action
// Proses pemanggilan instruksi / task list yang disediakan reducer 
store.dispatch({ type: 'ADD_AGE' })
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 })
console.log(store.getState());



