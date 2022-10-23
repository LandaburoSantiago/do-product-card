import React from 'react';
const renderer: any = require('react-test-renderer');
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { products } from '../data/products';
describe('ProductImage', () => {
  test('Debe de mostrar el componente sin la imagen', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente correctamente con la imagen', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
