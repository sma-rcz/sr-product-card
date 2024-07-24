import React ,{ useCallback, useContext} from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'


interface ProductButtonsProps {
  className?: string;  // aqui se define el tipo de la propiedad para poder agrer stylos
  style?:React.CSSProperties; // se necesita para poder agregar estilos al componente React.CSSProperties
}



                          // se le asigna el tipo de las propiedades que se van a recibir de los estilos
export const ProductButtons = ({className ,style}:ProductButtonsProps) => {
  


  //Todo:MaxCount
    const {counter,increseBy ,maxCount} = useContext(ProductContext); // aqui se obtiene el estado del producto
  //Todo: isMaxReached = useCallback, dependencias [counter, maxCount]
  //TRUE si el count  === maxCount
  //FALSE si el count !== maxCount  

  /*
  const isMaxReached  = useMemo (() => counter === maxCount,[counter,maxCount] ); // se crea un memo para saber si el contador es igual al maximo*/
  
  const isMaxReached =  useCallback(
    () => !!maxCount && counter === maxCount,[counter,maxCount] ); // se crea un memo para saber si el contador es igual al maximo

    return (
      <div
      style={style} // se le asigna el estilo al componente
      className={`${styles.buttonsContainer} ${className}`}> {/* aqui se asigna los stilos de Classname */}
        <button
         disabled = {counter <= 0} // se desabilita el boton si el contador es igual a 0
          onClick={() => increseBy(-1)}
          className={styles.buttonMinus}>-</button>
  
        <div className={styles.countLabel}>{counter}</div>
  
        <button
          disabled = {isMaxReached()} // se desabilita el boton si el contador es igual al maximo
          onClick={() => increseBy(+1)}
          className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : '' } `} >+</button>
      </div>
      )
  
  }
  