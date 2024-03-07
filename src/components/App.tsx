import { useState } from 'react';
import '../styles/App.css';
import { LoginButton } from './LoginButton';
import REPL from './REPL';

/**
 * This is the highest level component of the application.
 * It renders the main layout of the app and manages the user's login state.
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Mock</h1>
        <LoginButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>

      { isLoggedIn && <REPL /> }
    </div>
  );
}

export default App;