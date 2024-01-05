import Image from 'next/image';
import Link from 'next/link';

import classes from './MainHeader.module.css';

import HeaderImage from '@/assets/images/header-image.png';

export default function MainHeader() {
  return (
    <main className={classes.header}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-5 lg:px-6"
        aria-label="Global"
      >
        <Link href="/" className="flex items-center">
          <Image
            src={HeaderImage}
            width={50}
            height={50}
            className="mr-3"
            alt="Next Food - Easy Recipes"
            priority
          />
          <h1>Savor the Goodness: Easy Recipes for Every Taste</h1>
        </Link>
      </nav>
    </main>
  );
}
