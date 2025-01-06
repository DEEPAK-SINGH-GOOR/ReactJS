import { useState } from 'react';
import Form from './Form';
import Product from './Product';
import ReverseTimer30 from './ReverseTimer30';
import ReverseTimer1Hour from './ReverseTimer1Hour';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ReverseTimer30 />
      <Form />
      <ReverseTimer1Hour />
      <Product products={[]} />

      
    </div>
  );
}

export default App;
