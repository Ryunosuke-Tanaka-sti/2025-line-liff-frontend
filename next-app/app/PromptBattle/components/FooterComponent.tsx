import { FaMicroblog, FaTwitter, FaYoutube } from "react-icons/fa";

export const FooterComponent = () => {
  return (
    <footer className="w-full bg-black text-white">
      <ul className="flex flex-col items-start gap-4 p-4 text-lg font-bold">
        <li className="flex flex-row items-center gap-2">
          <FaYoutube className="size-7" />
          <a href="https://www.youtube.com/@sios-eng">
            サイオスエンジニアチャンネル
          </a>
        </li>
        <li className="flex flex-row items-center gap-2">
          <FaTwitter className="size-7" />
          <a href="https://x.com/siostechlab">@SIOSTechLab</a>
        </li>
        <li className="flex flex-row items-center gap-2">
          <FaMicroblog className="size-7" />
          <a href="https://tech-lab.sios.jp/">
            <img src="/assets/bloglogo.svg" className="h-7 w-auto" alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
