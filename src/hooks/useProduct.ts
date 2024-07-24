import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';




interface useProductArgs {
    product:Product, // se define el tipo de la propiedad para poder agrer stylos
    onChange?: (args:onChangeArgs) => void // se define el tipo de la propiedad para poder agrer stylos
    value?:number;
    initialValues?:InitialValues

}
                                                      //intialValues es un objeto que puede tener las propiedades count y maxCount
export const useProduct = ( {onChange,product ,value=0 ,initialValues}:useProductArgs) => {

      const  { count ,maxCount} = initialValues || {}; // se destructura el objeto initialValues y se asigna un valor por defecto

    const [counter, setcounter] = useState<number>(count  || value); // se crea un estado para el contador

    

   const isMounted = useRef(false); // se crea una referencia para saber si el componente esta montado
   console.log(count);
 
    const increseBy = (value: number) => { // se crea una funcion que recibe un valor y lo suma al contador
        const newValue = Math.max(counter + value, 0); // se obtiene el valor maximo entre el contador y el valor que se le pasa a la funcion

        if(maxCount  && newValue > maxCount){
        return setcounter(maxCount);
       }
        setcounter(newValue);
        onChange && onChange({count: newValue ,product }); // se verifica si la funcion onChange existe y se le pasa el contador y el producto
    }
    
      useEffect(() => {
      if(!isMounted.current) return; // si el componente no esta montado no se ejecuta el efecto
        setcounter( value); // se asigna el valor al contador
    }, [ value]); // se ejecuta cuando el valor de las dependencias cambia

    useEffect(() => {
      isMounted.current = true; // se asigna true a la referencia para saber que el componente esta montado
    }, []);

    const reset =() =>{
      setcounter(count || value);
    }


    
    
    

  return {
    counter,
    isMaxCountReached : !!count && maxCount  ===counter,
    maxCount,
    increseBy,
    reset

  }
}
