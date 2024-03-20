import './App.css'
import Container from './components/container/Container'
import ChemicalElementDetail from './components/elements/ChemicalElementDetail'
import store from './redux/store'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Container/>}/>
          <Route path='/element/:id' element={<ChemicalElementDetail/>}/>
        </Routes>
      </Provider>

    </div>
  );
}

export default App;
