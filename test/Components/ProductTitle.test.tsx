import renderer from 'react-test-renderer';
import { ProductTitle,ProductCard} from '../../src/components';
import React from 'react';
import {  product } from '../data/products';

describe('ProductTitle', () => { 
    test('debe de mostrar el componente correctamente con el titulo personsalizado', () => {
        const wrapper =  renderer.create(
            <ProductTitle title='Coffe Mug Especial Edition' className='tu-custom' />
        )
        ///console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con el nombre del producto', () => {
        const wrapper =  renderer.create(
            <ProductCard product={product}>
                {
                    ()=>(
                        <ProductTitle  />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
 })