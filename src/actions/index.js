
export const ADD_USER ='ADD_USER'
export const EDIT_USER ='EDIT_USER'
export const SELECT_USER = 'SELECT_USER'
export const DELETE_USER = 'DELETE_USER'
export const GET_USERS = 'GET_USERS'
export const UPDATE_USER = 'UPDATE_USER'




export const getUsers = ()=>{
    return {
        type: GET_USERS
    }
}

export const selectUser =(user) => {
    //console.log('user clicked', user.first)
    return {
        type: SELECT_USER,
        payload : {user}
    }
}

export const addUser = (user) =>{
    //console.log(user);
    return {
        type: ADD_USER,
        payload:{ user}
    }
}

export const deleteUser = (userid) =>{
    //console.log(user);
    return {
        type:DELETE_USER,
        userid: userid
    }
}

export const editUser = (userid) =>{
    return {
        type: EDIT_USER,
        userid: userid
    }
}

export const updateUser = (userid,first,last) =>{
    return {
        type: UPDATE_USER,
        userid: userid,
        first: first,
        last: last
    }
}
