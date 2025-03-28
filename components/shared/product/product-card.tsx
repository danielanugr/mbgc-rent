import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import ProductPrice from './product-price';
import { Product } from '@/types';

const ProductCard = ({ product }: { product: Product }) => {
  const rating = product.rating.toString();

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority
          />
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-2'>
        <div className='text-sx'>{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>
        <div className='flex-between gap-4'>
          <p>{rating}</p>
          {product.stock > 0 ? (
            <ProductPrice value={product.price} />
          ) : (
            <p className='text-destructive'>Out of stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
