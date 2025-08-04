import type { CarouselProps } from "@material-tailwind/react";
import { CarouselDefault } from '../components/Carousel';
import { motion } from 'framer-motion';

function Index() {
  return (
    <div>
      <CarouselDefault />
      <motion.div
        className="mx-auto flex w-[90%] flex-col items-center gap-y-[10px] p-12 text-center lg:w-[60%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="font-['Raleway'] text-6xl font-semibold" style={{ color: '#214598' }}>
          Приветствуем Вас на сайте компании Блу Лайн!
        </h1>
        <div style={{ width: '300px', height: '4px', backgroundColor: '#E44343' }} />
        <p className="font-['Raleway'] max-w-prose" style={{ color: '#09101C' }}>
          Если вы производите химическую продукцию, то вы попали на
          правильный сайт. Компания Блу Лайн найдет для вас любое химическое
          сырье в Китае, сведет напрямую с поставщиком, либо окажет услуги по
          поставке химического сырья от производителя до вашего склада.
        </p>
      </motion.div>
    </div>
  );
}

export default Index;
