import { RiReactjsLine } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { RiPhpLine } from "react-icons/ri";
import { motion } from "framer-motion";


export function Tecnologia() {
    return (
        <div className="p-24">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Tecnologia
            </motion.h2>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {[ 
                    { Component: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
                    { Component: FaFlutter, color: "text-blue-500", duration: 2 },
                    { Component: RiPhpLine, color: "text-purple-400", duration: 6 },
                    { Component: FaJs, color: "text-yellow-400", duration: 2.5 }
                ].map(({ Component, color, duration }, index) => (
                    <motion.div
                key={index}
                className="p-4"
                initial={{ y: -10 }}
                animate={{ y: [10, -10] }}
                transition={{
                    duration: duration || 2, // Define um valor padrão se undefined
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                        <Component className={`text-7xl ${color}`} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}