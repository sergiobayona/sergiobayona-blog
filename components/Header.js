import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image src="/images/profile.png" width={72} height={72} alt="Yours Truly" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
