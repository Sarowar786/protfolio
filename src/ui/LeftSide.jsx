import React from 'react'
import SocialLinks from './SocialLinks'
import { motion } from 'framer-motion'

export default function LeftSide() {
  return (
    <div className='flex flex-col justify-end items-center gap-6'>
      <SocialLinks />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className='w-[1px] h-32 bg-darkText' />
    </div>
  )
}
