import React, { useState, useEffect, useContext } from 'react';
import productContext from '../context/productContext';
import { deleteProduct } from '../service/Api';
import { handleShowProducts } from '../service/handleShowProducts';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const handleDelete = async (id, setRefreshTable) => {
  await deleteProduct(id);
  setRefreshTable(true);
  console.log(id);
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const RenderTable = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const { refreshTable, setRefreshTable, setEditing, setQuantity, setProduct, setPrice, setClient, setActive, setId } = useContext(productContext);
  console.log(refreshTable);

  useEffect(() => {
    handleShowProducts(refreshTable, setProducts);
  }, [products, refreshTable]);

  useEffect(() => {
    setRefreshTable(false);
  }, [products, setRefreshTable]);

  const handleEdit = (product) => {
    setId(product._id)
    setQuantity(product.quantity)
    setProduct(product.product)
    setPrice(product.price)
    setClient(product.client)
    setActive(product.active)
  }

  return (
      <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
      <Paper className={classes.paper}>
      <h1>ABM Stock</h1>
        <div style={{ height: 520, width: '100%' }}>
        <thead>
          <tr>
            <th>_id</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Client</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.quantity}</td>
              <td>{product.product}</td>
              <td>{product.price}</td>
              <td>{product.client}</td>
              <td>{product.active}</td>
              <td>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  onClick={()  => {
                    setEditing(true)
                    handleEdit(product)
                  }}
                >
                  Select
                </Button>
              </td>
              <td>
                <Button
                  variant="contained"
                  color="secondary"
                  href="#contained-buttons"
                  onClick={() => handleDelete(product._id, setRefreshTable)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        </div>
      </Paper>
      </Grid>
      </Grid>
      </div>
  );
};

export default RenderTable;
