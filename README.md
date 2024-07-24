

# SR-PRODUCT-CARD

Este es un paquete de componentes de React que contiene un componente llamado `ProductCard` que muestra la información de un producto.


## Ejemplo
``` import {ProductCard,ProductImage,ProductTitle,ProductButtons } from 'sr-product-card' ```

``` 
  <ProductCard
              product={product}
              initialValues = {{
                count:6,
                maxCount:10,
              }}
            >
              {
                ({reset ,increseBy,count,maxCount,isMaxCountReached})=>(
                  <>
                  <ProductImage    />
                <ProductTitle  />
                <ProductButtons />
              
                  
                  </>
                )
                  
                
              }

             

            </ProductCard>



 ```


