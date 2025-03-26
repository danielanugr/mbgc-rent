import { cn } from '@/lib/utils';

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  //get the int/float
  const strNumber = value.toString();

  const firstPart = strNumber.slice(0, strNumber.length - 3);
  const secondPart = strNumber.slice(-3);

  return (
    <p className={(cn('text-2xl'), className)}>
      <span className='text-xs align-super'>Rp</span>
      {firstPart}
      <span className='text-xs align-super'>.{secondPart}</span>
    </p>
  );
};

export default ProductPrice;
