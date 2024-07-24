import renderer from 'react-test-renderer';
import { ProductImage ,ProductCard } from '../../src/components';
import React from 'react';
import { product2 } from '../data/products';
describe('debe de mostrar el Componente de la img', () => { 

    test('debe de mostrar el component con el url de img', () => {
        const wrapper = renderer.create(
            <ProductImage img='img/imagen-personalizada.jpg'  />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
      
    });

    test('debe de mostrar la imagen con el nombre   ', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    ()=>(
                        <ProductImage  />
                    )
                }


            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
      
    })
    
    
 })