import './styles/App.module.scss';
import { Routes, Route } from "react-router-dom";
import HomePage from './views/homePage/HomePage';
import ConfirmPage from './views/confirmPage/ConfirmPage';
import ProtectedRoutes from './routes/ProtectedRoutes';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/confirm" element={<ConfirmPage/>} exact></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
