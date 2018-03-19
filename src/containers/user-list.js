import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectUser, deleteUser, editUser, updateUser} from '../actions'
import {List, Image, Button,Input,Form} from 'semantic-ui-react'

class UserList extends Component {
    constructor(props){
        super(props)
        //const { first,last} = this.props.editmodeuser
        this.state={
            first: null,
            last: null
        }
    }

    componentWillReceiveProps(newProps){ //console.log('props' , newProps.users);
         let editmodeuser = newProps.users.filter(u => u.editMode === true)
         console.log(editmodeuser[0].first);
         //this.setState({first: editmodeuser[0].first, last: editmodeuser[0].last})
    }

     onChange =(e)=> {
         switch(e.target.name){
             case 'first': this.setState({ first: e.target.value}); break;
             case 'last': this.setState({ last: e.target.value}); break;
             default: return
         }
     }

    createListItems = ()=>{
        //the props user came from allReducers users
        const {users} = this.props
        return users.map( user => {
            return (
                <List.Item key={user.id}>
                  <Image avatar  bordered src={user.image} onClick={()=>this.props.selectUser(user)}/>
                    <List.Header>
                            {user.first} {user.last}
                        {
                            user.editMode &&
                            <Form>
                            <Input focus placeholder='first' name='first' defaultValue={user.first} onChange={this.onChange}/>
                            <Input focus placeholder='last' name='last' defaultValue={user.last} onChange={this.onChange}/>
                            <Button type='button' onClick={()=>this.props.updateUser(user.id,this.state.first, this.state.last)}>Update</Button>
                            </Form>
                        }
                    </List.Header>
                    <List.Content>
                    <Button icon='delete' type='button' onClick={()=> this.props.deleteUser(user.id)}></Button>
                    <Button icon='edit' type='button' onClick={()=> this.props.editUser(user.id)}></Button>
                    </List.Content>
                </List.Item>

            )
        })
    }



    render() {
        return (
            <List  verticalAlign='middle'>
                {this.createListItems()}
            </List>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        users: state.users
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {selectUser: selectUser, deleteUser: deleteUser, editUser: editUser,
          updateUser: updateUser},
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList)
