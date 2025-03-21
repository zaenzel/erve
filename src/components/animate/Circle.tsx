'use client'
import { motion } from "framer-motion"
import { IoFlowerSharp } from "react-icons/io5"

const Circle = ({ classname, x }: { classname?: string, x: number }) => {
    return (
        <motion.div
            className={`${classname} absolute rounded`}
            style={{ left: `${x}%` }}
            initial={{ y: "-111vh", opacity: 1 }}
            animate={{ y: "100vh", opacity: 0 }}
            transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0
            }}
        >
            <IoFlowerSharp className="text-2xl" />
        </motion.div>
    )
}

export default Circle