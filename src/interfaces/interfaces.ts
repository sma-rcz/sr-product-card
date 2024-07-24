

import { ProductTitleProps } from '../components/ProductTitle';
import { ProductImageProps } from "../components/ProductImage";
import { Props  as ProductCardProps} from "../components/ProductCard";



export interface Product {
    id: string,
    title?: string,
    img?: string,
}

/*
interface ProductButtonsProps {
  counter: number,
  increseBy: (value: number) => void
}*/

export interface ProductContextProps {
    counter: number;
    product: Product;
    maxCount?: number;

    increseBy: (value: number) => void;

}
export interface ProductCardHOCprops {
    ({children,product,}:ProductCardProps ): JSX.Element,
    Image: ( Props: ProductImageProps) => JSX.Element,  // aqui se le asigna el tipo de las propiedades que se van a recibir de los estilos en los argumentos
    Title: ( Props: ProductTitleProps) => JSX.Element, // aqui se le asigna el tipo de las propiedades que se van a recibir de los estilos en los argumentos
    Buttons: ({className}:{className?:string}) => JSX.Element // aqui se le asigna el tipo de las propiedades que se van a recibir de los estilos en los argumentos

}

export interface onChangeArgs {
    product: Product,
    count: number
}


 //aqui se extiende la interfaz de Product para agregar una propiedad counter
 export interface ProductCart extends Product {
    count: number
  }

  export interface InitialValues {
    count?: number,
    maxCount?: number
  }

  export interface ProductCardHadnlers {
    count:number;
    isMaxCountReached: boolean;
    maxCount?:number;
    product:Product;

    increseBy: (value: number) => void;
    reset: () => void;
  }