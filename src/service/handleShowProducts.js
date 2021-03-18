import { getProduct } from '../service/Api'

export function handleShowProducts(refreshTable, setProducts){
  if (refreshTable){
    getProduct().then((product) => {
      setProducts(product.data)
      console.log('product.data', product.data)
    })
  }
}