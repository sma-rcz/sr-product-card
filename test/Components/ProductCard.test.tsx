import renderer from 'react-test-renderer';
import ProductCard from '../../src/components';
import { product } from '../data/products';
import React from 'react';

const  {act} = renderer;
describe('Pruebas en el ProductCard', () => { 
    test('debe de mostrar el componenete correctamente ', () => {
        const wrapper =  renderer.create (
            <ProductCard product={product}> 
                {
                    ()=> (
                        <h1></h1>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
      
    });

    test('debe de incrementar el contador ', () => {

        const wrapper = renderer.create(
            <ProductCard product={product}>
                {
                    ({count,increseBy})=> ( 
                        <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={()=> increseBy(2)}></button>
                        </>
                    )
                }
            </ProductCard>
        

        )
        let tree = wrapper.toJSON();
        //console.log(tree);
        expect(tree).toMatchSnapshot();
    

      //  (tree as any).children[2].props.onClick();
      act(()=> (tree as any).children[2].props.onClick());

        tree = wrapper.toJSON();
        //console.log((tree as any).children[1].children[0])
        expect(((tree as any).children[1].children[0])).toBe("2");


    });

    
 })