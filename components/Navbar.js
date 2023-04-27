import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image src="/logo.jpg" alt="myimage" height={250} width={300}></Image>
        <h2>Suraj Basnet</h2>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/Contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
