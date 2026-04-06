import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAward } from 'react-icons/fa';
import styles from './DoctorCard.module.css';

const DoctorCard = ({ doctor }) => {
  return (
    <div className={styles.card}>
      <Link href={doctor.link} className={styles.imageWrapper}>
        <Image 
          src={doctor.image}
          alt={doctor.name}
          fill
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <h3 className={styles.name}>{doctor.name}</h3>
        <div className={styles.qualifications}>{doctor.qualifications}</div>
        <div className={styles.experience}>
          <FaAward /> {doctor.experience}
        </div>
        <Link href={doctor.link} className={styles.cta}>
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
