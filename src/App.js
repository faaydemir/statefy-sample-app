import Navigation from './components/navigation';
import { Routes, Route } from 'react-router-dom';
import User from './pages/user';
import Home from './pages/home';

function App() {
  return (
    <div style={{padding:40}}>
      <Navigation />
      <Routes >
        <Route exact path="/" element={<Home />} ></Route>
        <Route path='user' element={<User />} ></Route>
      </Routes >
    </div>
  );
}

export default App;
