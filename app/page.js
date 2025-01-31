import Image from "next/image";

export default function Home() {
  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between">
          <div>
            <span className="flex">Musicxfy</span>
          </div>
          <ul className="flex">
            <li>Treending</li>
            <li>Artist</li>
            <li>Pricing</li>
            <li>About Us</li>
          </ul>
          <div className="">
            <a className="'tex -sm' herf=">Log in</a>
            <a
              className="font-medium text-sm bg-black text-white px-5 py-2
        rounded-sm "
              href=""
            >
              Get started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
