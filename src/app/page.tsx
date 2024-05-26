"use client";
import { motion } from "framer-motion";
import { Navigation } from '@/components/Navigation'
import Image from 'next/image'
import { Reservation } from "@/components/Reservation/Reservation";

export default function Page() {
  return (
    <main className="w-full max-h-full min-h-screen bg-gray-950">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, translateX: -300 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          type: "spring",
          duration: 1.3,
        }}
        className="p-2"
      >
        <div className="w-full mx-auto h-40 lg:w-[60%] lg:h-80 relative">
          <Image src="/DRIVE-FIRST-CLASS.png" quality={100} alt="Logo" loading="lazy" fill={true} />
        </div>
      </motion.div>
      <Reservation />
    </main>
  )
}
