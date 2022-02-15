import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <footer className="w-full pt-2">
      <div className="w-full max-w-7xl mx-auto p-3 flex flex-col items-start md:flex-row">
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="text-2xl text-customYellow font-[Starduster]">Sokudo Lottery</h4>
          <p className="text-white">Ethereum Lottery Dapp</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 flex flex-col md:justify-center md:items-center">
          <h4 className="text-white mb-2 text-xl">Follow Us:</h4>
          <ul className="">
            <li className="group"><a href="https://github.com/SJuras" className="flex group"><span><FaGithub className="text-white inline transition duration-300 mr-1 group-hover:text-customYellow -mt-1" /></span> <p className="text-white transition duration-300 group-hover:text-customYellow">GitHub</p></a></li>
            <li className="group"><a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="text-white inline transition duration-300 mr-1 group-hover:text-customYellow -mt-1" /></span><p className="text-white transition duration-300 group-hover:text-customYellow">Facebook</p></a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-left md:text-right mb-4">
          <h4 className="text-white mb-2 text-xl">Useful Links:</h4>
          <ul>
            <li className="transition duration-300 "><a href="https://ethereum.org/en/" className="text-white transition duration-300 hover:text-customYellow">Ethereum</a></li>
            <li className="transition duration-300 "><a href="https://metamask.io/" className="text-white transition duration-300 hover:text-customYellow">MetaMask</a></li>
            <li className="transition duration-300 "><a href="https://chain.link/" className="text-white transition duration-300 hover:text-customYellow">ChainLink</a></li>
            <li className="transition duration-300 "><a href="https://en.wikipedia.org/wiki/Web3" className="text-white transition duration-300 hover:text-customYellow">What is Web3.0</a></li>
            <li className="transition duration-300 "><a href="https://docs.soliditylang.org/en/v0.8.11/introduction-to-smart-contracts.html" className="text-white transition duration-300 hover:text-customYellow">What is a Smart Contract</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto p-4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <p className="text-white">&copy; 2022 Sokudo Lottery</p>
        <p className="text-white">Created with <span><FaHeart className="inline text-customYellow" /></span> by: Sarif-Design</p>
      </div>
    </footer>
  );
}
