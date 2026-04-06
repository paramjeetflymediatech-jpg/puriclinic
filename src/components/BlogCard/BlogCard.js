import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './BlogCard.module.css';

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.card}>
      <Link href={`/blogs/${blog.slug}`} className={styles.imageWrapper}>
        <Image 
          src={blog.image_url || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'}
          alt={blog.title}
          fill
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <Link href={`/blogs/${blog.slug}`}>
          <h3 className={styles.title}>{blog.title}</h3>
        </Link>
        <p className={styles.excerpt}>{blog.excerpt}</p>
        <div className={styles.footer}>
          <span className={styles.language}>{blog.language === 'en' ? 'English' : 'Hindi'}</span>
          <Link href={`/blogs/${blog.slug}`} className={styles.link}>
            Read Article <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
