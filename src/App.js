import React from 'react';
import Form from './components/Form';
import RenderTable from './components/RenderTable';
import ProductProvider from './context/ProductProvider';

function App() {
  return (
    <ProductProvider>
      <Form />
      <RenderTable />
    </ProductProvider>
  );
}

export default App;
