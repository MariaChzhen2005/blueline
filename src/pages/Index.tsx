// import type { CarouselProps } from "@material-tailwind/react";
import { CarouselDefault } from '../components/Carousel';
import { motion } from 'framer-motion';
import useWindowWidth from '../hooks/useWindowWidth';

function Index() {
  const windowWidth = useWindowWidth();

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

      <div
        style={{
          margin: '0 auto',
          width: '100%',
          padding: '0',
          paddingLeft: '3rem',
          backgroundColor: '#ECECEC',
        }}
      >
        <div
          style={{
            display: 'grid',
            alignItems: 'center',
            gap: '2rem',
            gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr',
          }}
        >
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Raleway'] text-6xl font-semibold" style={{ color: '#214598' }}>
              Почему выбирают нас
            </h2>
            <div style={{ width: '200px', height: '4px', backgroundColor: '#E44343' }} />
            <p className="font-['Raleway'] max-w-prose" style={{ color: '#09101C' }}>
              Поиск специализированного оборудования- ответственный и тонкий момент работы.
            </p>
            <p className="font-['Raleway'] max-w-prose" style={{ color: '#09101C' }}>
              Мы предлагаем:
            </p>
            <ul className="font-['Raleway'] list-disc list-inside text-left" style={{ color: '#09101C' }}>
              <li>
                Полные производственные линии полного цикла
              </li>
              <li>
                Отдельные элементы линий, включая:
                <ul className="font-['Raleway'] list-disc list-inside ml-4 text-left" style={{ color: '#09101C' }}>
                  <li>
                    <a href="/equipment">Этикетировщики</a>
                  </li>
                  <li>
                    Пакетировочные машины
                  </li>
                  <li>
                    Укупорочное оборудование
                  </li>
                  <li>
                    Разливные машины
                  </li>
                </ul>
              </li>
            </ul>
            <p className="font-['Raleway'] text-2xl font-semibold" style={{ color: '#09101C' }}>Индивидуальный подбор:</p>
            <ul className="font-['Raleway'] list-disc list-inside text-left" style={{ color: '#09101C' }}>
              <li>
                Подбираем оборудование под ваше техническое задание — бесплатно подготовим варианты
              </li>
              <li>
                Выезд инженеров для оценки вашего производства и требований (по необходимости)
              </li>
            </ul>
            <p className="font-['Raleway'] text-2xl font-semibold" style={{ color: '#09101C' }}>Широкий выбор:</p>
            <ul className="font-['Raleway'] list-disc list-inside text-left" style={{ color: '#09101C' }}>
              <li>
                Предлагаем несколько вариантов на выбор — только от проверенных и надежных производителей, каждый из которых специализируется на определённых видах оборудования
              </li>
              <li>
                Проводим поиск специализированного оборудования по вашему запросу — даже самый крупный производитель не охватывает весь спектр!
              </li>
                
            </ul>
            <p className="font-['Raleway'] text-2xl font-semibold" style={{ color: '#09101C' }}>Профессиональный сервис:</p>
            <ul className="font-['Raleway'] list-disc list-inside text-left" style={{ color: '#09101C' }}>
            <li>
                Профессиональный монтаж оборудования в соответствии с условиями договора
              </li>
              <li>
                Гарантийное обслуживание: Стандартно 12–18 месяцев
              </li>
            </ul>
            

            
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="../src/assets/slider_1.jpeg"
              alt="slider_1"
              className="rounded-lg shadow-lg"
              style={{ maxWidth: '400px' }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mx-auto flex w-[90%] flex-col items-center gap-y-[10px] p-12 text-center lg:w-[60%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-prose">
          <p className="font-['Raleway']" style={{ color: '#09101C' }}>
            Работаем напрямую с ведущими производителями линий розлива из Китая:
          </p>
          <ul className="font-['Raleway'] list-disc list-inside text-left" style={{ color: '#09101C' }}>
            <li>
              Tom Group Intelligent Equipment Co.
            </li>
            <li>
              Guangdong Guanhong Intelligent Equipment Co.
            </li>
            <li>
              Hangzhou Yongsun Intelligent Co.
            </li>
            <li>
              Dongguan the Way Machinery Equipment Co.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Index;
