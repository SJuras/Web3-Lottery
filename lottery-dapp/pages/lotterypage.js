import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { FaFacebook } from "react-icons/fa";

import Footer from '../components/Footer.js';

import 'bulma/css/bulma.css';


export default function Home() {

  const [value, changeValue] = useState(1);

  return (
    <div className="bg-customLightBlue">
      <Head>
        <title>Sokudo Lottery 宝くじ | Ethereum Lottery dApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
      {/* navbar */}
        <nav className="w-full max-w-7xl mx-auto pt-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer">
                <Link href="/">
                  <h1 className="font-[Starduster] text-4xl text-customYellow drop-shadow-lg drop-shadow-lg">SOKUDO</h1>
                </Link>
            </div>
            <div className="p-2 bg-customPurple font-[Starduster] text-xl text-customYellow cursor-pointer drop-shadow-lg transition duration-300 hover:bg-customLightPurple">
              <button className="font-[Starduster] cursor-pointer">
                Connect WAllet
              </button>
            </div>
          </div>
        </nav>

        {/* main content */}
        <div className="w-full max-w-7xl mx-auto mt-4 mb-4">
          <section className="mt-5">
            <div className="columns">
              <div className="column is-two-thirds">
                <section className="mt-5">
                  <p>Enter Lottery by sending 0.01 Ether</p>
                  <button className="button is-link is-large is-light mt-3">
                    Play Now!
                  </button>
                  <h4>Give it a try!</h4>
                  <h4>頑張って</h4>
                </section>
                <section className="mt-6">
                  <p>Admin Only - Start the Lottery</p>
                  <button className="button is-primary is-large is-light mt-3">
                    Start Lottery
                  </button>
                </section>
                <div className="flex flex-col">
                  <h4 className="text-xl font-[Starduster]">LAnguAge Selection</h4>
                  <div className="flex mb-4">
                    <button onClick={() => changeValue(1)}>Lang 1</button>
                    <button onClick={() => changeValue(2)}>Lang 2</button>
                    <button onClick={() => changeValue(3)}>Lang 3</button>
                    <button onClick={() => changeValue(4)}>Lang 4</button>
                  </div>
                  { value == 1 &&
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <section className="p-2">
                        <h2 className="text-xl font-bold mb-2">How to Play</h2>
                        <p>
                          Rules are simple,
                        </p>
                        <p>
                          Click the "Connect Wallet" button to connect your MetaMask
                        </p>
                        <p>
                          To participate in lottery, send 0.01 test Ether by clicking "Play Now" button.
                        </p>
                        <p>
                          The admin will start the lottery. To contact the admin please use this link:
                        </p>
                        <a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a>
                        <p>
                          A random number will be picked using Chainlink protocol.
                        </p>
                        <p>
                          Picked random number will determine the winner of the round.
                        </p>
                      </section>
                    </div>
                    <div className="w-full md:w-1/2">
                      <section className="p-2">
                        <h2 className="text-xl font-bold mb-2">このゲームの遊び方</h2>
                        <p>
                          ルールはシンプルです,
                        </p>
                        <p>
                          右上のボタンをクリックします, ウォレットに接続する
                        </p>
                        <p>
                          ボタンをクリックします, 出す 0.01 test Ether
                        </p>
                        <p>
                          管理者に連絡する
                        </p>
                        <a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a>
                        <p>
                          乱数はを使用して選択されます Chainlink.
                        </p>
                        <p>
                          勝者が決まります
                        </p>
                      </section>
                    </div>
                  </div>
                }

                { value == 2 &&
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <section className="p-2">
                        <h2 className="text-xl font-bold mb-2">그것을 재생하는 방법</h2>
                        <p>
                          규칙은 간단하다,
                        </p>
                        <p>
                          오른쪽 상단의 버튼을 클릭, 지갑과 연결
                        </p>
                        <p>
                          참가하려면 비용을 지불해야 합니다, 0.01 test Ether.
                        </p>
                        <p>
                          관리자가 추첨을 시작합니다. 관리자에게 문의하십시오:
                        </p>
                        <a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a>
                        <p>
                          난수가 생성됩니다.
                        </p>
                        <p>
                          임의의 숫자가 승자를 결정합니다.
                        </p>
                      </section>
                    </div>
                    <div className="w-full md:w-1/2">
                      <section className="p-2">
                        <h2 className="text-xl font-bold mb-2">Hogyan kell Játszani</h2>
                        <p>
                          A szabályok egyszerűek,
                        </p>
                        <p>
                          Kattintson a jobb felső sarokban található gombra, csatlakoztassa a pénztárcájához.
                        </p>
                        <p>
                          A részvételért fizetni kell, 0.01 test Ether
                        </p>
                        <p>
                          Admin indítja a sorsolást. Kérjük, forduljon adminisztrátorhoz
                        </p>
                        <a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a>
                        <p>
                          Véletlen szám jön létre.
                        </p>
                        <p>
                          A véletlen szám határozza meg a nyertest.
                        </p>
                      </section>
                    </div>
                  </div>
                }

                { value == 3 &&
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <section className="p-2">
                        <h2 className="text-xl font-bold mb-2">कैसे खेलने के लिए</h2>
                        <p>
                          नियम सरल हैं,
                        </p>
                        <p>
                          ऊपर दाईं ओर स्थित बटन पर क्लिक करें, अपने वॉलेट से कनेक्ट करें
                        </p>
                        <p>
                          भाग लेने के लिए आपको भुगतान करना होगा, 0.01 test Ether.
                        </p>
                        <p>
                          लॉटरी शुरू करेगा व्यवस्थापक. कृपया व्यवस्थापक से संपर्क करें:
                        </p>
                        <a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a>
                        <p>
                          यादृच्छिक संख्या उत्पन्न होगी.
                        </p>
                        <p>
                          यादृच्छिक संख्या विजेता का निर्धारण करेगी.
                        </p>
                      </section>
                    </div>
                    <div className="w-full md:w-1/2">
                      <section className="p-2">
                        <h2 className="text-xl font-bold mb-2">Upute za Igru</h2>
                        <p>
                          Pravila su jednostavna,
                        </p>
                        <p>
                          Kliknite tipku na gornjem-desnom uglu ekrana, spojite se sa vašim MetaMask novčanikom.
                        </p>
                        <p>
                          Da biste sudjelovali u lutriji morate uplatiti 0.01 test Ether.
                        </p>
                        <p>
                          Admin će pokrenuti lutriju. Radi pokretanja lutrije, kontaktirajte admin-a:
                        </p>
                        <a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a>
                        <p>
                          Lutrija će generirati nasumce izabran broj.
                        </p>
                        <p>
                          Nasumce izabran broj će odrediti tko je pobjednik.
                        </p>
                      </section>
                    </div>
                  </div>
                }

                { value == 4 &&
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <section className="p-2">
                      <h2 className="text-xl font-bold mb-2">Nasıl Oynanır</h2>
                      <p>
                        Kurallar basittir,
                      </p>
                      <p>
                        Sağ üstteki butona tıklayın,
                      </p>
                      <p>
                        Katılmak için ödeme yapmalısınız, 0.01 test Ether.
                      </p>
                      <p>
                        Yönetici piyangoyu başlatacak. Yöneticiyle iletişime geç:
                      </p>
                      <a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a>
                      <p>
                        Rastgele sayı üretilecek.
                      </p>
                      <p>
                        Rastgele sayı kazananı belirleyecek.
                      </p>
                    </section>
                  </div>
                  <div className="w-full md:w-1/2">
                    <section className="p-2">
                      <h2 className="text-xl font-bold mb-2 text-right">کیسے کھیلنا ہے</h2>
                      <p className="text-right">
                        قوانین سادہ ہیں
                      </p>
                      <p className="text-right">
                        اوپر دائیں جانب بٹن پر کلک<br />
                        کریں۔
                      </p>
                      <p className="text-right">
                        حصہ لینے کے لیے آپ کو<br />
                        ادائیگی کرنی ہوگی۔<br />
                        0.01 test Ether
                      </p>
                      <p className="text-right">
                        ایڈمن لاٹری شروع کرے گا۔<br />
                        ایڈمن سے رابطہ کریں۔
                      </p>
                      <a href="https://www.facebook.com/stjepko.juras" className="flex group justify-end"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a>
                      <p className="text-right">
                        بے ترتیب نمبر تیار کیا جائے گا۔
                      </p>
                      <p className="text-right">
                        بے ترتیب نمبر فاتح کا تعین کرے<br />
                        گا۔
                      </p>
                    </section>
                  </div>
                </div>
              }

                </div>
              </div>
              <div className="column is-one-third">
                <p>Lottery Info</p>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2 className="text-xl text-customYellow font-[Starduster]">Lottery History</h2>
                        <h2 className="text-xl text-customYellow font-[Starduster]">沿革</h2>
                        <div className="history-entry">
                          <div>Lottery #1 Winner: </div>
                          <div>勝者</div>
                          <div>
                            <a href="" target="_blank">7585869695947373636346586896769</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2 className="text-xl text-customYellow font-[Starduster]">PlAyers (1)</h2>
                        <h2 className="text-xl text-customYellow font-[Starduster]">プレイヤー</h2>
                        <div>
                          <a href="" target="_blank">7585869695947373636346586896769</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="mt-5">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <h2 className="text-xl text-customYellow font-[Starduster]">Pot</h2>
                        <h2 className="text-xl text-customYellow font-[Starduster]">総計</h2>
                        <p>10 Ether</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        {/* timestamp: 20:00 */}

      </main>

      <div className="w-full bg-customPurple">
        <Footer />
      </div>
    </div>
  )
}
