
import './App.css'
import UserCard from './components/UserCard'

function App() {


  return (
    <>
    <div className='container'>
      <UserCard name="Mors code" desc="Hello jee my name is Mors code" style={{"border-color":'red'}}/>
      <UserCard name="Anup Pradhan" desc="Hello jee my name is Anup Pradhan"/>
      <UserCard name="Ruki Mors" desc="Hello jee my name is Ruki Mors" />
    </div>
    </>
  )
}

export default App
