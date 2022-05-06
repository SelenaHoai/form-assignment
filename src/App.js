import './App.css';
import UserForm from "./components/UserForm"

function App() {
  return (
    <div>
      <UserForm firstname="" lastname="" email="" password={45} confirmpassword={45} />

    </div>
  );
}

export default App;
