import React from 'react';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items
import { useGlobalContext } from './context';

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <div className='loading'></div>;
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
