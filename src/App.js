import logo from './logo.svg';
import './App.css';


const num = 5555;
const singer = {
  name: 'Mahfuz',
  job: 'Singing'
}
const singer2 = {
  name: 'Abul Hayat',
  job: 'Acting'
}
const singerStyle = {
  color: 'blue',
  backgroundColor: 'khaki',
  borderRedious: '20px',
}

function App() {
  return (
    <div className="App">
      <Person name='Maruf Hossain' naika='Alone'></Person>
      <Person name="Abul Hayat" naika='Morjina'></Person>
      <Person name='Keu na' naika='Nai nai'></Person>
      <h2>Friend Details</h2>
      <Friend name='NIJEI NIJER FRIEND'></Friend>
      <Friend name="TORE KOMU KN"></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.naika}</p>
    </div>
  )
}
function Friend(props) {
  console.log(props)
  return (
    <div className='friend'>
      <h4>{props.name}</h4>
    </div>
  )
}

export default App;
