// import type { CarouselProps } from "@material-tailwind/react";
import { CarouselDefault } from '../components/Carousel';
import { motion } from 'framer-motion';
import useWindowWidth from '../hooks/useWindowWidth';
import tomLogo from '../assets/partners/TomIntelligentEquipment.png';
import guanghongLogo from '../assets/partners/GuangdongGuanhongIntelligentEquipment.png';
import youngsunLogo from '../assets/partners/HangzhouYoungsunIntelligent.jpeg';
import dongguanLogo from '../assets/partners/DongguanThe WayMachineryEquipment.jpeg';

function Index() {
  const windowWidth = useWindowWidth();
  const listItemMotionVariants = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };
  const listContainerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

  return (
    <div>
      <CarouselDefault />
      <motion.div
        className="mx-auto flex w-[90%] flex-col items-center gap-y-2 p-12 text-center lg:w-[60%]"
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
          правильный сайт.
        </p>
        <h3 className="font-['Raleway'] max-w-prose text-6xl" style={{ color: '#09101C' }}>
        Компания Blue Line поможет найти необходимое сырье 
        в Китае и организует прямые поставки от производителя до вашего склада. 
        </h3>
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
                border: '3px solid #09101C',
                backgroundColor: '#ffffff',
                padding: '5px',
                transition: 'box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                height: '100%',
                minWidth: 0,
                minHeight: 0,
                alignSelf: 'stretch',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
            <h3 className="font-['Raleway'] text-center" style={{ color: 'rgb(33, 69, 152)' }}>Индивидуальный подбор</h3>
            <ul className="font-['Raleway'] list-disc list-outside pl-6 text-left space-y-[6px] marker:text-[#E44343]" style={{ color: '#09101C' }}>
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
              border: '3px solid #09101C',
              backgroundColor: '#ffffff',
              padding: '5px',
              transition: 'box-shadow 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
              boxSizing: 'border-box',
              minHeight: 0,
              alignSelf: 'stretch',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 className="font-['Raleway'] text-center" style={{ color: 'rgb(33, 69, 152)' }}>Широкий выбор</h3>
            <ul className="font-['Raleway'] list-disc list-outside pl-6 text-left space-y-[6px] marker:text-[#E44343]" style={{ color: '#09101C' }}>
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
              border: '3px solid #09101C',
              backgroundColor: '#ffffff',
              padding: '5px',
              transition: 'box-shadow 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
              boxSizing: 'border-box',
              minHeight: 0,
              alignSelf: 'stretch',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
          <h3 className="font-['Raleway'] text-center" style={{ color: 'rgb(33, 69, 152)' }}>Профессиональный сервис</h3>
          <ul className="font-['Raleway'] list-disc list-outside pl-6 text-left space-y-[6px] marker:text-[#E44343]" style={{ color: '#09101C' }}>
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

      <motion.section
        className="mx-auto flex w-full flex-col items-center gap-y-3 px-6 py-12 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.08 }}
        aria-labelledby="we-offer"
      >
        <h3 className="font-['Raleway'] text-center" style={{ color: 'rgb(33, 69, 152)' }}>Мы предлагаем</h3>

        <motion.div
          className="grid w-[88%] mx-auto gap-[10px]"
          variants={listContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          style={{ gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(5, 1fr)' }}
        >
          <a href="index" className="group block no-underline hover:no-underline">
            <motion.div
              variants={listItemMotionVariants}
              className="flex h-[80px] items-center justify-center bg-[#ECECEC] p-[20px] transition-shadow duration-200 group-hover:shadow-sm"
            >
              <h4 className="font-['Raleway'] text-xl text-[#09101C] transition-colors duration-200 group-hover:text-[#006BD6] text-center">
                Полные производственные линии полного цикла
                <span className="ml-2"> →</span>
              </h4>
            </motion.div>
          </a>

          <a href="index" className="group block no-underline hover:no-underline">
            <motion.div
              variants={listItemMotionVariants}
              className="flex h-[80px] items-center justify-center bg-[#ECECEC] p-[20px] transition-shadow duration-200 group-hover:shadow-sm"
            >
              <h4 className="font-['Raleway'] text-xl text-[#09101C] transition-colors duration-200 group-hover:text-[#006BD6] text-center">
                Этикетировщики
                <span className="ml-2"> →</span>
              </h4>
            </motion.div>
          </a>

          <a href="index" className="group block no-underline hover:no-underline">
            <motion.div
              variants={listItemMotionVariants}
              className="flex h-[80px] items-center justify-center bg-[#ECECEC] p-[20px] transition-shadow duration-200 group-hover:shadow-sm"
            >
              <h4 className="font-['Raleway'] text-xl text-[#09101C] transition-colors duration-200 group-hover:text-[#006BD6] text-center">
                Пакетировочные машины
                <span className="ml-2"> →</span>
              </h4>
            </motion.div>
          </a>

          <a href="index" className="group block no-underline hover:no-underline">
            <motion.div
              variants={listItemMotionVariants}
              className="flex h-[80px] items-center justify-center bg-[#ECECEC] p-[20px] transition-shadow duration-200 group-hover:shadow-sm"
            >
              <h4 className="font-['Raleway'] text-xl text-[#09101C] transition-colors duration-200 group-hover:text-[#006BD6] text-center">
                Укупорочное оборудование
                <span className="ml-2"> →</span>
              </h4>
            </motion.div>
          </a>

          <a href="index" className="group block no-underline hover:no-underline">
            <motion.div
              variants={listItemMotionVariants}
              className="flex h-[80px] items-center justify-center bg-[#ECECEC] p-[20px] transition-shadow duration-200 group-hover:shadow-sm"
            >
              <h4 className="font-['Raleway'] text-xl text-[#09101C] transition-colors duration-200 group-hover:text-[#006BD6] text-center">
                Разливные машины
                <span className="ml-2"> →</span>
              </h4>
            </motion.div>
          </a>
        </motion.div>
      </motion.section>

      <motion.div
        className="mx-auto w-full max-w-7xl gap-y-[10px] p-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-prose">
          <h2 className="font-['Raleway'] text-6xl font-semibold" style={{ color: '#214598' }}>
            Прямые поставки линий розлива из Китая
          </h2>
          <div className="mx-auto mt-[8px] mb-[25px]" style={{ width: '300px', height: '4px', backgroundColor: '#E44343' }} />
        </div>
        <div className="w-full px-4">
          <div
            className="grid gap-8 mt-4 text-center"
            style={{ color: '#09101C', gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(4, 1fr)' }}
          >
            <div className="flex flex-col items-center">
              <div className="h-[75px] flex items-center justify-center">
                <img src={tomLogo} alt="Tom Group Intelligent Equipment Co." className="h-full w-auto object-contain" loading="lazy" />
              </div>
              <span className="mt-2 font-['Raleway']">Tom Group Intelligent Equipment Co.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[75px] flex items-center justify-center">
                <img src={guanghongLogo} alt="Guangdong Guanhong Intelligent Equipment Co." className="h-full w-auto object-contain" loading="lazy" />
              </div>
              <span className="mt-2 font-['Raleway']">Guangdong Guanhong Intelligent Equipment Co.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[75px] flex items-center justify-center">
                <img src={youngsunLogo} alt="Hangzhou Yongsun Intelligent Co." className="h-full w-auto object-contain" loading="lazy" />
              </div>
              <span className="mt-2 font-['Raleway']">Hangzhou Yongsun Intelligent Co.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-[75px] flex items-center justify-center">
                <img src={dongguanLogo} alt="Dongguan the Way Machinery Equipment Co." className="h-full w-auto object-contain" loading="lazy" />
              </div>
              <span className="mt-2 font-['Raleway']">Dongguan the Way Machinery Equipment Co.</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Index;
