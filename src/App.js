import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LayOut from './Component/LayOut';
import Dashboard from './Page/Dashboard';
import UserLog from './Page/UsersLog';
import User from './Page/User';
import Settings from './Page/Settings';
import Company from './Component/Company';
import Branch from './Component/Branch';
import Help from './Page/Help';
import { Logout } from './Page/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Dashboard />} />
          <Route path="userlog" element={<UserLog />} />
          <Route path="user" element={<User />} />
          <Route path="settings" element={<Settings />}>
            <Route path="company" element={<Company />} />
            <Route path="branch" element={<Branch />} />
            <Route path="help" element={<Help />} />
           <Route path='logout' element={<Logout />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



