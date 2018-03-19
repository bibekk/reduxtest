import {GET_USERS, EDIT_USER, ADD_USER, DELETE_USER, SELECT_USER, UPDATE_USER} from '../actions'

 const initialState ={
     users:
        [
            {
                id : 1,
                first: 'usr1',
                last :'lst1',
                image: 'http://s5.tinypic.com/70ak35_th.jpg'
            },
            {
                id : 2,
                first: 'usr2',
                last :'lst2',
                image: 'http://s5.tinypic.com/72tysz_th.jpg'
            },
       ],
       selecteduser: {}
}

export default function  rootReducer(state = initialState, action){
    switch(action.type){
        case GET_USERS:
             return Object.assign({},state,{users: action.payload.users})
        case ADD_USER:
           return Object.assign({},state,{users:[...state.users, action.payload.user]})
        case DELETE_USER:
            return deleteUserReducer(state,action)
        case EDIT_USER:  return editUserReducer(state,action)
        case SELECT_USER: return Object.assign({},state,{ selecteduser: action.payload.user})
        case UPDATE_USER: return updateUserReducer(state,action)
        default: return state
    }
}


const updateUserReducer =(state,action) =>{
    let _users =[], _suser = {}
     _users = state.users.map( user =>
       (user.id === action.userid)?
          Object.assign({},user, {first: action.first, last: action.last, editMode: false}): user
    )

    let selectedUser = state.selecteduser
    if(state.selecteduser.id === action.userid){
        _suser = Object.assign({},selectedUser, {first: action.first, last: action.last, editMode: false})
    }else{
        _suser = selectedUser
    }

     return Object.assign({},state,{users: _users},{selecteduser: _suser })
}

const deleteUserReducer = (state,action) =>{
    return Object.assign({},state,{users:  state.users.filter(user => user.id !== action.userid)})
}

const editUserReducer  =  (state,action) =>{
    let _users =[]
     _users = state.users.map( user =>
       (user.id === action.userid)?
          Object.assign({},user, {editMode: true}): user
    )
    return Object.assign({},state,{users: _users})

}
