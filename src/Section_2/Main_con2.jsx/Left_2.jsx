import React from 'react'
import { Zap, ArrowUpRight } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "26,7%",
    label: "Expected annual growth of eCom market size",
    bg: "bg-blue-500",
    textColor: "text-white",
  },
  {
    id: 2,
    value: "25%",
    label: "E-com share of the organized retail in 2020",
    bg: "bg-lime-300",
    textColor: "text-black",
  },
];

const Left_2 = () => {
  return (
    <div className='w-1/2 h-[calc(100vh-123px)] text-black flex flex-col justify-between'>
      {/* Heading */}
      <div className='text-4xl font-bold mt-13'>
        E-Com market is expected to exceed <span className='bg-lime-300 rounded-full px-2'>$300B</span> in 2027
      </div>

      <div className='flex items-start gap-3'>
        <Zap size={24} color="#6b7bd6" strokeWidth={1.5} className='shrink-0' />
        <p className='text-lg text-gray-600'>
          In India MSME contribution to eTailing sales is expected to grow between 60-70% annually to reach USD50Bn by FY 2027
        </p>
      </div>

      <div className='flex gap-4 mb-5'>
        {stats.map((item) => (
          <div
            key={item.id}
            className={`relative flex-1 h-44 rounded-3xl p-5 flex flex-col justify-end ${item.bg} ${item.textColor}`}
          >
            {/* Arrow circle */}
            <div className='absolute -top-1 -right-1 w-14 h-14 rounded-full bg-white border-8 border-amber-100 flex items-center justify-center'>
              <ArrowUpRight size={20} color="black" />
            </div>

            <h3 className='text-3xl font-bold'>{item.value}</h3>
            <p className='text-sm mt-1'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Left_2