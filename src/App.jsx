import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import WebFont from 'webfontloader';
import Main from './Components/Main';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
    <>
      <ResumeProvider>
        <Main />
      </ResumeProvider>
    </>
  );
}

export default App;