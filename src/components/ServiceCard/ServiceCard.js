import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service }) => {
  return (
    <div className={`card ${styles.card}`}>
      <Link href={`/services/${service.slug}`} className={styles.imageWrapper}>
        <div className={`${styles.badge} ${service.category === 'hair' ? styles.hairBadge : styles.skinBadge}`}>
          {service.category}
        </div>
        <Image 
          src={service.image_url || 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800'}
          alt={service.name}
          fill
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <h3 className={styles.title}>{service.name}</h3>
        <p className={styles.description}>{service.description}</p>
        <div className={styles.footer}>
          <Link href={`/services/${service.slug}`} className={styles.link}>
            Read More <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
