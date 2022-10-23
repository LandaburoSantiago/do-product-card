# SL-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Santiago Landaburo

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'sl-product-card'
```

```
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
```
