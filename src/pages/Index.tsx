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
          padding: '10px',
          paddingTop: '10px',
          paddingLeft: '15px',
          backgroundColor: 'white',
          boxSizing: 'border-box',
        }}
      >
        
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Raleway'] text-6xl font-semibold" style={{ color: '#214598' }}>
              Почему выбирают нас
            </h2>
            <div style={{ width: '200px', height: '4px', backgroundColor: '#E44343', margin: '0 auto' }} />
            <p className="font-['Raleway'] max-w-prose" style={{ color: '#09101C' }}>
              Поиск специализированного оборудования - ответственный и тонкий момент работы.
            </p>
          </motion.div>
        
            <div
              style={{
                display: 'grid',
                alignItems: 'stretch',
                gap: '2rem',
                width: '100%',
                maxWidth: '90%',
                margin: '0 auto',
                paddingBottom: '2rem',
                gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr 1fr',
              }}
            >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                border: '3px solid black',
                backgroundColor: '#ffffff',
                padding: '5px',
                transition: 'box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
            <h3 className="font-['Raleway'] text-center" style={{ color: 'rgb(33, 69, 152)' }}>Индивидуальный подбор:</h3>
            <ul className="font-['Raleway'] list-disc list-outside pl-6 text-left space-y-[6px]" style={{ color: '#09101C' }}>
              <li>
                Подбираем оборудование под ваше техническое задание — бесплатно подготовим варианты
              </li>
              <li>
                Выезд инженеров для оценки вашего производства и требований (по необходимости)
              </li>
            </ul>
            </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              border: '3px solid black',
              backgroundColor: '#ffffff',
              padding: '5px',
              transition: 'box-shadow 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 className="font-['Raleway'] text-center" style={{ color: 'rgb(33, 69, 152)' }}>Широкий выбор:</h3>
            <ul className="font-['Raleway'] list-disc list-outside pl-6 text-left space-y-[6px]" style={{ color: '#09101C' }}>
              <li>
                Предлагаем несколько вариантов на выбор — только от проверенных и надежных производителей, каждый из которых специализируется на определённых видах оборудования
              </li>
              <li>
                Проводим поиск специализированного оборудования по вашему запросу — даже самый крупный производитель не охватывает весь спектр!
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              border: '3px solid black',
              backgroundColor: '#ffffff',
              padding: '5px',
              transition: 'box-shadow 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
          <h3 className="font-['Raleway'] text-center" style={{ color: 'rgb(33, 69, 152)' }}>Профессиональный сервис:</h3>
          <ul className="font-['Raleway'] list-disc list-outside pl-6 text-left space-y-[6px]" style={{ color: '#09101C' }}>
          <li>
              Профессиональный монтаж оборудования в соответствии с условиями договора
            </li>
            <li>
              Гарантийное обслуживание: Стандартно 12–18 месяцев
            </li>
          </ul>
          </motion.div>
        </div>
      </div>

      <motion.div
            className="mx-auto flex w-[100%] flex-col items-center gap-y-[10px] p-12 text-center lg:w-[60%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-['Raleway'] max-w-prose" style={{ color: '#09101C' }}>
              Мы предлагаем:
            </p>
            <ul className="font-['Raleway'] list-disc list-outside pl-6 text-left space-y-[6px]" style={{ color: '#09101C' }}>
              <li>
                Полные производственные линии полного цикла
              </li>
              <li>
                Отдельные элементы линий, включая:
                <ul className="font-['Raleway'] list-disc list-outside pl-6 ml-4 text-left space-y-[6px]" style={{ color: '#09101C' }}>
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
            </motion.div>

      <motion.div
        className="mx-auto flex w-[100%] flex-col items-center gap-y-[10px] p-12 text-center lg:w-[60%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-prose">
          <p className="font-['Raleway']" style={{ color: '#09101C' }}>
            Работаем напрямую с ведущими производителями линий розлива из Китая:
          </p>
          <ul className="font-['Raleway'] list-disc list-outside pl-6 text-left space-y-[6px]" style={{ color: '#09101C' }}>
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
