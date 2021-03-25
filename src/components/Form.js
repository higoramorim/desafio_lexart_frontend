import React, { useContext, useEffect, useState } from 'react';
import { addProduct, updateProduct } from '../service/Api';
import { handleShowProducts } from '../service/handleShowProducts';
import productContext from '../context/productContext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


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

const Form = () => {
  const classes = useStyles();

  const {quantity, price, id, product, client, active, setQuantity, setPrice, setProduct, setClient, setActive, setRefreshTable, editing, setEditing
  } = useContext(productContext);

  const onSubmit = (e) => {
    console.log('onsubmit')
    e.preventDefault()
    if(!editing){
      addProduct({ quantity, price, product, client, active })
    setRefreshTable(true)
    }
  }

  useEffect(() => {
    handleShowProducts();
    console.log('useeffect')
  }, [editing]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if(editing){
      const products = {quantity, price, product, client, active}
      updateProduct(id, products)
      setEditing(false)
      setRefreshTable(true)

    }  
  }

  const toggleChecked = (value) => setActive(value)

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <h1>Form</h1>
          <form>
        <InputLabel />
        Quantity:
        <Input 
        type="number" 
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}/>
        

        <InputLabel />
        Price:
        <Input 
        type="number" 
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}/>

        <InputLabel />
        Product:
        <Input 
        type="text" 
        name="product" 
        value={product}
        onChange={(e) => setProduct(e.target.value)}/>

        <InputLabel />
        Client:
        <Input 
        type="text" 
        name="client"
        value={client}
        onChange={(e) => setClient(e.target.value)}/>

        <InputLabel />
        Active:
        <input 
        type="checkbox" 
        name="inative"
        //checked={active}
        id="checkbox"
        value={active}
        onChange={(e) => {
          toggleChecked(e.target.value)}
        }
        />
        <br />
        <Button variant="contained" color="primary" href="#contained-buttons"
        type="submit" 
        name="enviar"
        onClick={editing ? handleUpdate: onSubmit }
        >
          Enviar
        </Button>
      </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Form;
