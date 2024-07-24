import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'


export interface ProductTitleProps {
  title?:string,
  className?:string,
  style?:React.CSSProperties
}



export const ProductTitle = ({ title,className,style }:ProductTitleProps ) => {

  
    const {product} = useContext(ProductContext);
    /*
    if(title  === ''){
      title = product.title
    }*/
   //title ? title === ' ' : product.title
    
    return (<span 
      style={style}
      className={`${styles.productDescription} ${className}`}>{ title = title === '' ? product.title : title}</span>)
  }