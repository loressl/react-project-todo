import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../template/custom.css';

import Menu from '../template/menu';
import Routes from './routes';

function App() {
  return (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
