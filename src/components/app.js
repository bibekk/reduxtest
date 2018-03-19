import React from 'react'
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'
import AddUser from '../containers/add-user'
import Counter from '../containers/counter'
import { Container ,Divider,Message} from 'semantic-ui-react'


const App = () => (
    <Container style={{padding: '10px'}}>
    <Message info size='tiny'
       header='Was this what you wanted?'
       content="Did you know it's been a while?"
    />
    <Counter/>
      <h2>Users</h2>
      <AddUser/>
      <UserList/>

      <Divider/>
      <h2>User Detail</h2>
      <UserDetail/>
    </Container>
)

/*

class  App extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return(
            'test'
        )
    }
}
*/

export default App
