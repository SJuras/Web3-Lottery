import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <footer className="w-full">
      <div className="w-full max-w-7xl mx-auto p-3 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-4">
          <h4>Lottery Dapp</h4>
          <p>Ethereum Lottery Dapp</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 flex flex-col md:justify-center md:items-center">
          <h4>Follow Us:</h4>
          <ul className="">
            <li className="group"><a href="https://github.com/SJuras" className="flex group"><span><FaGithub className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span> <p className="transition duration-300 group-hover:text-brendanPink">GitHub</p></a></li>
            <li className="group"><a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-left md:text-right mb-4">
          <h4>Useful Links:</h4>
          <ul>
            <li className="transition duration-300 "><a href="https://ethereum.org/en/">Ethereum</a></li>
            <li className="transition duration-300 "><a href="https://metamask.io/">MetaMask</a></li>
            <li className="transition duration-300 "><a href="https://chain.link/">ChainLink</a></li>
            <li className="transition duration-300 "><a href="https://en.wikipedia.org/wiki/Web3">What is Web3.0</a></li>
            <li className="transition duration-300 "><a href="https://docs.soliditylang.org/en/v0.8.11/introduction-to-smart-contracts.html">What is a Smart Contract</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto p-4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2022 Lottery Dapp</p>
        <p>Created with <span><FaHeart className="inline" /></span> by: Sarif-Design</p>
      </div>
    </footer>
  );
}
