"use client";

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className='h-screen flex flex-col gap-2 sm:gap-4 items-center justify-center'>
      <h2 className='text-lg sm:text-xl font-semibold'>404 | Page Not Found</h2>
      <p className='text-lg sm:text-md leading-tight'>Could not find requested resource</p>

      <Button className="primary-btn" onClick={() => router.push('/')} >Return to Home</Button>
    </div>
  )
}