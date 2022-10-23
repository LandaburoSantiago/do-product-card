import React from 'react';
const renderer: any = require('react-test-renderer');
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { products } from '../data/products';
describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Prueba titulo" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente correctamente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
