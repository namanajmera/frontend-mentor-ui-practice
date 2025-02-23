import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen text-[#FFFFFF] bg-black">
      <h1 className="text-2xl font-bold">Front End Mentor UIs</h1>
      <ul className="space-y-2">
        <li className="flex justify-center items-center space-x-2 flex-col">
          <Link
            href={"/blog-preview-card"}
            className="hover:underline hover:text-red-600 text-blue-500"
          >
            Blog Preview Card
          </Link>
        </li>
        <li className="flex justify-center items-center space-x-2 flex-col">
          <Link
            href={"/social-links-profile"}
            className="hover:underline hover:text-red-600 text-blue-500"
          >
            Social links profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
