import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AppointmentCTA.module.css';

const AppointmentCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <Image
        src="/bgimg.jpg"
        alt="Dermatological Care"
        fill
        className={styles.backgroundImage}
        priority={false}
      />
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <p className={styles.text}>
          Access advanced dermatological care with the help of our experts! 
          Find the best skin clinic near me by accessing Puri Skin Clinic 
          and address all your issues of hyperpigmentation or vitiligo with 
          our team today!
        </p>
        
        <div className={styles.buttonContainer}>
          <Link href="/book-appointment/">
            <button className={styles.appointmentButton}>
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
