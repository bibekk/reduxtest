import React,{Component} from 'react'
//import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Label,Segment,Image} from 'semantic-ui-react'
//import {selectUser} from '../actions'


class UserDetail extends Component {

    render() {
        const {selecteduser} = this.props
        if (selecteduser.id === undefined){
            return (<div><h5>user not selected</h5></div>)
        }

        return (
            <Segment >
                <Image label={{ as: 'a', color: 'green', content: selecteduser.first, icon: 'user', ribbon: 'right' }} src={selecteduser.image} alt={selecteduser.first} />
                <Label tag> {selecteduser.last}</Label>
            </Segment>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        selecteduser: state.selecteduser
    }
}

/*
const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {selectUser: selectUser},
        dispatch
    )
}*/

export default connect(mapStateToProps)(UserDetail)
