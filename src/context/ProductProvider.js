import React, { useState } from 'react';
import PropTypes from 'prop-types';
import productContext from './productContext';

const ProductProvider = ({ children }) => {
  const [quantity, setQuantity] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [client, setClient] = useState('');
  const [active, setActive] = useState('inative');
  const [refreshTable, setRefreshTable] = useState(true);
  const [productData, setProductData] = useState({});
  const [editing, setEditing] = useState(false)
  const [id, setId] = useState('')

  const productValues = {
    quantity,
    setQuantity,
    product,
    setProduct,
    price,
    setPrice,
    client,
    setClient,
    active,
    setActive,
    refreshTable,
    setRefreshTable,
    productData,
    setProductData,
    editing,
    setEditing,
    id,
    setId,
  };

  return (
    <productContext.Provider value={ productValues }>
      { children }
    </productContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default ProductProvider;
