import 'bootstrap/dist/css/bootstrap.min.css';
import './Assest/css/style.css';
import './Assest/css/responsive.css';
import Layout from './Component/Layout';
import Profile from './Component/Profile';
import UserProfile from './Component/UserProfile';

function App() {
  return (
    <div className="App">
         <Layout>
           <UserProfile />
           <Profile />
         </Layout>
    </div>
  );
}

export default App;
