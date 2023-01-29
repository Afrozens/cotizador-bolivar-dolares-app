import Calculator from "./Calculator";
import { motion } from "framer-motion";

const CalculatorSection = () => {
  return (
    <section id="calculadora" className="h-[80vh] w-full flex flex-col justify-evenly items-center bg-gray-200">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-4xl mt-16 p-2 font-bold text-center tracking-[0.4rem]"
      >
        Conversor de Divisas
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" text-lg sm:text-2xl mb-2 p-4 font-light text-center tracking-[0.3rem]"
      >
        Convierte Bolívares a Dólares a través de las tasas de DolarToday
      </motion.h3>
      <Calculator />
    </section>
  );
};

export default CalculatorSection;
