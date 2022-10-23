import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components';
import { products } from '../data/products';

const product = {
  id: '1',
  title: 'Coffemug - Sin imagen',
  //   img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, increaseBy, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};
