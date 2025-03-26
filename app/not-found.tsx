'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const NotFoundPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Image
        src='/images/logo.png'
        width={125}
        height={125}
        alt='MBGC logo'
        priority
      />
      <div className='p-6 rounded-lg w-1/3 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Not Found</h1>
        <p className='text-destructive'>Could not find requested page</p>
        <Button
          variant='outline'
          className='mt-4 ml-2'
          onClick={() => (window.location.href = '/')}
        >
          Back to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
