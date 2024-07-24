import React,{ useContext } from "react";
import { ProductContext } from "./ProductCard";
import NoImg from '../assets/no-image.jpg' // Ajusta la ruta según sea necesario
import styles from '../styles/styles.module.css'

// Componente que renderiza la imagen del producto desde una funcion  que recibe la url de la imagen

export interface ProductImageProps {
  img?: string | undefined;
  className?: string;
  style?:React.CSSProperties;
}




export const ProductImage = ({ img = '',className,style }:ProductImageProps ) => {

    const  {product  } = useContext(ProductContext);
    let imgToshow:string
    if( img){
      imgToshow = img
    }else if(product.img){
      imgToshow = product.img
    }
    else{
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      imgToshow = NoImg
    }
  
  
  
  
    return (<img 
      className={`${styles.productImg} ${className}`} src={imgToshow }  alt='Coffee mug' width='200px' height='200px'
      style={style}
      
      />)
  }

