"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';

export default function ChallengeNotFound() {
  const router = useRouter(); 
  return (
    <div className='h-screen flex flex-col gap-2 sm:gap-4 items-center justify-center'>
      <h2 className='text-lg sm:text-xl font-semibold'>404 | Challenge Not Found</h2>
      <p className='text-lg sm:text-md leading-tight'>Could not find requested challenge</p>

      <Button classNames="bg-primary text-white hover:bg-primary/90 font-semibold p-3" label="Return to Home" onClick={() => router.push('/admin/dashboard/hackathons')} />
    </div>
  )
}