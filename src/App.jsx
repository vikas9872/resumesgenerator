import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <>
      <ResumeProvider>
        <Main />
      </ResumeProvider>
    </>
  );
}

export default App;