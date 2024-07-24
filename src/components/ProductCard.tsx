import React, { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { InitialValues, onChangeArgs, Product, ProductCardHadnlers, ProductContextProps } from '../interfaces/interfaces';



// Contexto para compartir el estado del producto a sus hijos
export const ProductContext = createContext({} as ProductContextProps); // se inicializa con un objeto vacio y se le asigna el tipo de dato que va a tener
const { Provider } = ProductContext  // destructuring para obtener el provider





export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args:ProductCardHadnlers) => JSX.Element;
  className?: string; // se define el tipo de la propiedad para poder agrer stylos
  style?:React.CSSProperties; // se necesita para poder agregar estilos al componente React.CSSProperties
  onChange?: (args:onChangeArgs) => void; // se define el tipo de la propiedad para poder agrer stylos
  value?:number;
  initialValues?:InitialValues
}



// Componente que renderiza la tarjeta del producto
export const ProductCard = ({ children, product,className ,style, onChange ,value,initialValues}: Props) => {
  const { counter, increseBy, maxCount
    , isMaxCountReached, reset} = useProduct(
    {
      onChange, // se le pasa la funcion onChange al hook
      product, // se le pasa el producto al hook
      value,
      initialValues,
      
   

  });


  return (
    <>{/* se envuelve todo en el provider para que los hijos puedan acceder al estado del producto */}
      <Provider value={{

        counter,
        increseBy,
        product,
        maxCount,
      }}>
        <div 
        style={style}
        className={`${styles.productCard} ${className}`}>

          {/* <span className={styles.productDescription}>{product.title}</span>*/}

          {children({
            count:counter,
            isMaxCountReached,
            maxCount:maxCount,
            product,
            increseBy,
            reset
          })}



        </div>
      </Provider>

    </>

  )
}

