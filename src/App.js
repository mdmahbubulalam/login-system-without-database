import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Welcome from './components/Welcome/Welcome';

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }

  const [user, setUser] = useState({name:"", email: ""});
  const [error, setError] = useState("");

  const handleLogin = (details) => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password){
      setUser({
        name:details.name,
        email:details.email
      })
    }else{
     setError('Invalid credential')
    }
  }

  const handleLogout = () => {
      setError('');
      setUser({
        name: "",
        email:""
      })
  }

  return (
    <>
      {
        user.email 
        ?
          <Welcome handleLogout={handleLogout} user={user}/>
        :
          <LoginForm handleLogin={handleLogin} error={error} />
      }
      
     
    </>
  );
}

export default App;
