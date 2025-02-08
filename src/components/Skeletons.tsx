import * as React from "react"

type CSProps = {
    count: number;
}
export const MetricSkeleton: React.FC<CSProps> = ({ count }) => {
    return (
        <div className='grid sm:grid-cols-3 sm:gap-4'>
            {Array.from({ length: count }).map((_, index) => (<div key={index} className='bg-gray-300/90 sm:p-4 border rounded-md border-[#E4E7EC] cursor-pointer animate-pulse'>
                <div className={`h-4 `}>
                </div>
            </div>))}
        </div>
    )
}

export const AdminMetricSkeleton: React.FC = () => {
    return (
        <div className="grid sm:grid-row-2 sm:gap-4">
        <div className='grid sm:grid-cols-2 sm:gap-4'>
            {Array.from({ length: 2 }).map((_, index) => (<div key={index} className='bg-gray-300/90 sm:p-4 border rounded-md border-[#E4E7EC] cursor-pointer animate-pulse'>
                <div className={`h-24 `}>
                </div>
            </div>))}
        </div>
        <div className='grid sm:grid-cols-3 sm:gap-4'>
            {Array.from({ length: 3 }).map((_, index) => (<div key={index} className='bg-gray-300/90 sm:p-4 border rounded-md border-[#E4E7EC] cursor-pointer animate-pulse'>
                <div className={`h-24 `}>
                </div>
            </div>))}
        </div>
        </div>
    )
}

export const TabsSkeleton: React.FC<CSProps> = ({ count }) => {
    return (
        <div className='grid sm:grid-cols-5 sm:gap-4'>
            {Array.from({ length: count }).map((_, index) => (<div key={index} className='bg-gray-300/90 sm:p-4 border rounded-md border-[#E4E7EC] cursor-pointer animate-pulse'>
                <div className={`h-4 `}>
                </div>
            </div>))}
        </div>
    )
}

export const CardSkeleton: React.FC<CSProps> = ({ count }) => {
    return (
        <div className='grid sm:grid-cols-3 sm:gap-4'>
            {Array.from({ length: count }).map((_, index) => (<div key={index} className='bg-gray-300/90 sm:p-4 border rounded-md border-[#E4E7EC] cursor-pointer animate-pulse'>
                <div className={`h-96 `}>
                </div>
            </div>))}
        </div>
    )
}