import { ProductCard as ProductCardHOC } from './ProductCard';


import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCprops } from '../interfaces/interfaces';

//export{ ProductCard  as ProductCardHOC} from "./ProductCard";


//export{ ProductCard } from "./ProductCard";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";


// aqui se exporta el componente ProductCard con los elementos que se van a exportar todo esto es para los hijos de ProductCard
export const ProductCard:ProductCardHOCprops = Object.assign(ProductCardHOC, { // se le asigna a ProductCardHOC los elementos que se van a exportar
    Image: ProductImage,    
    Title: ProductTitle,
    Buttons: ProductButtons
});

export default ProductCard;
