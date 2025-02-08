import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import React from 'react'

type OopsProps = {
    desc: string;
}
export default function Oops({ desc }: OopsProps) {
    return (
        (<div className='h-[40vh] flex items-center justify-center sm:gap-4'>
            <Icon icon="tabler:mood-empty" width="34" height="34" className="text-primary" />
            <p className='text-primary font-bold'>{desc}</p>
        </div>)
    )
}
