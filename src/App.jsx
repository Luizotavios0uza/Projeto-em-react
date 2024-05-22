import './App.css'

import { Round } from './components/Round';

import { Square } from './components/Square';

import { Triangle } from './components/Triangle'

function App() {
    return (
    <div className="App">

           <Round></Round>
           <hr/>
           <Square></Square>
           <hr />
           <Triangle></Triangle>
    </div>
    )
}
export default App;