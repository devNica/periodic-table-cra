import './App.css';
import Container from './components/container/Container';
import { TableProvider } from './context/TableContext';

function App() {
  return (
    <div className="App">
      <TableProvider>
        <Container />
      </TableProvider>

    </div>
  );
}

export default App;
