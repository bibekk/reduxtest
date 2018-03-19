import React from 'react'
import {connect} from 'react-redux'
import {Statistic} from 'semantic-ui-react'

class Counter extends React.Component{
    render () {
        return (
            <Statistic>
            <Statistic.Value>{this.props.totalusers}</Statistic.Value>
            <Statistic.Label>Total Users</Statistic.Label>
          </Statistic>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        totalusers: state.users.length
    }
}


export default connect(mapStateToProps)(Counter)
