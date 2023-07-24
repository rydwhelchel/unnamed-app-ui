import { Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
    </Routes>
  );
}

export default App;
