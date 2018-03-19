import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addUser} from '../actions'
import { Button, Input , Popup, Form} from 'semantic-ui-react'



class AddUser extends Component {
    constructor(props){
        super(props)
        this.state ={
            id: 20,
            first: null,
            last: null,
            images :['http://s8.tinypic.com/fk6yck_th.jpg','http://s5.tinypic.com/2qvcfvq_th.jpg','http://s5.tinypic.com/dfwpd_th.jpg',
                    'http://s8.tinypic.com/2w53kvk_th.jpg','http://oi63.tinypic.com/23mugkj.jpg'],
            image: null,
        }
    }

  Change =(e) =>{
      switch(e.target.name){
          case 'first': this.setState({ first: e.target.value}); break;
          case 'last': this.setState({ last: e.target.value}); break;
          case 'url': this.setState({ image: e.target.value}); break;
          default: return
      }
  }

    addUser = (e) =>{
        this.props.addUser({
                                id: this.state.id  ,
                                first: this.state.first,
                                last : this.state.last ,
                                image: this.state.images[Math.floor(Math.random() * Math.floor(this.state.images.length))]
                            })
        this.setState({id: this.state.id + 1})
        e.preventDefault()
    }

    render() {
        return (
            <Form>
            <Input focus placeholder='first' name='first' onChange={this.Change}/>
            <Input focus placeholder='last' name='last' onChange={this.Change}/>
            <Input focus placeholder='image' name='url' onChange={this.Change}/>

              <Popup
                  trigger={<Button basic color='blue' onClick={this.addUser}> Add </Button>}
                  content='Click to add user'
                  position='right center'
                  />
            </Form>
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
        {addUser: addUser},
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(AddUser)
