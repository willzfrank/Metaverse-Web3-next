'use client';

import styles from '../styles';
import { staggerContainer, textVariant2 } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';
import { motion } from 'framer-motion';

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The World" textStyles="text-center" />
      {/* <TitleText title={<></>} textStyles="text-center" /> */}
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center"
      >
        Choose the world you want <br className="md:block hidden" />
        to explore
      </motion.h2>
    </motion.div>
  </section>
);

export default Explore;
