import { sanityClient, urlFor } from "../sanity"
import { formatSizeUnits } from "../utils"
import JarallaxImage from '../components/JarallaxImage';
import Dynamic from 'next/dynamic';
import BlockContent from '@sanity/block-content-to-react'
import moment from 'moment'
import Head from 'next/head'

const Jarallax = Dynamic(() => import('../components/Jarallax'), { ssr: false });


const colours = ({ 
}) => {
  return (
    <div className="bg-Background overflow-x-hidden pb-20">

      <Head>
        <title>CrypticzXI.dev - Colours</title>
        <link rel="shortcut icon" href="https://cdn.sanity.io/images/4i4gqgxn/production/1c624f92d3e4e746368784b46733071ce2027b07-1001x1001.png" />
      </Head>

      <div className="fixed top-0 w-full h-16 bg-clip-padding backdrop-blur-xl bg-opacity-50 bg-Background z-[500] flex items-center xl:px-40 lg:px-32 md:px-20 px-8 transition-all">
              
              <a href="../"><img className="max-h-10 hover:scale-[0.9] transition-all" src="https://cdn.sanity.io/images/4i4gqgxn/production/27eda8e5bb24a2d31be80a8062077af933ddbb99-1534x1193.png" /></a>
              
              <div className="flex-grow"></div>

              <div className="space-x-5 md:flex hidden">
                <a href="../" className="text-Text transition-all hover:text-FirstColour font-rubik font-[300] text-lg">Home</a>
                <a href="../aboutme#portfolio/" className="text-Text transition-all hover:text-FirstColour font-rubik font-[300] text-lg">Portfolio</a>
                <a href="../aboutme/" className="text-Text transition-all hover:text-FirstColour font-rubik font-[300] text-lg">About Me</a>
                <a href="../aboutme#contactme/" className="text-Text transition-all hover:text-FirstColour font-rubik font-[300] text-lg">Contact Me</a>
              </div>

              <button onClick={() => {document.getElementById("mobile_menu").style.display = "flex";}} className="flex md:hidden">
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-Text transition-all hover:text-FirstColour" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

          </div>

          <div id="mobile_menu" className="bg-SecondryBackground w-full h-screen hidden top-0 left-0 fixed z-[999]">
                <div className="flex w-full h-full relative">
                    <button onClick={() => {document.getElementById("mobile_menu").style.display = "none";}} className="absolute top-5 right-5 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-Text transition-all hover:text-FirstColour" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <a href="../" className="text-Text transition-all p-4 w-full text-center hover:text-FirstColour font-rubik font-[300] text-xl">Home</a>
                      <a href="../portfolio/" className="text-Text transition-all p-4 w-full text-center hover:text-FirstColour font-rubik font-[300] text-xl">Portfolio</a>
                      <a href="../aboutme/" className="text-Text transition-all p-4 w-full text-center hover:text-FirstColour font-rubik font-[300] text-xl">About Me</a>
                      <a href="../aboutme#contactme/" className="text-Text transition-all p-4 w-full text-center hover:text-FirstColour font-rubik font-[300] text-xl">Contact Me</a>
                    </div>

  
                </div>
              </div>

      <div className="h-16 w-full flex bg-SecondryBackground"></div>

      <div id="colours" className="mt-20 flex flex-col items-center px-20">
        <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">Colours</h2>
        <h2 className="text-Text font-poppins font-[400] text-base uppercase tracking-wide leading-[1] mt-4">Provided by TailwindCSS</h2>
        <div className="border-[1px] my-8 w-64 border-Text"></div>
      </div>
        
        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Slate</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                
                <div className="flex">
                    <div className="bg-[#f8fafc] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f8fafc</span>
                    </div>
                    <div className="bg-[#f1f5f9] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f1f5f9</span>
                    </div>
                    <div className="bg-[#e2e8f0] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e2e8f0</span>
                    </div>
                    <div className="bg-[#cbd5e1] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#cbd5e1</span>
                    </div>
                    <div className="bg-[#94a3b8] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#94a3b8</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="bg-[#64748b] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#64748b</span>
                    </div>
                    <div className="bg-[#475569] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#475569</span>
                    </div>
                    <div className="bg-[#334155] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#334155</span>
                    </div>
                    <div className="bg-[#1e293b] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#1e293b</span>
                    </div>
                    <div className="bg-[#0f172a] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#0f172a</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Gray</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#f9fafb] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f9fafb</span>
                    </div>
                    <div className="bg-[#f3f4f6] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f3f4f6</span>
                    </div>
                    <div className="bg-[#e5e7eb] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e5e7eb</span>
                    </div>
                    <div className="bg-[#d1d5db] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#d1d5db</span>
                    </div>
                    <div className="bg-[#9ca3af] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#9ca3af</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#6b7280] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#6b7280</span>
                    </div>
                    <div className="bg-[#4b5563] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#4b5563</span>
                    </div>
                    <div className="bg-[#374151] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#374151</span>
                    </div>
                    <div className="bg-[#1f2937] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#1f2937</span>
                    </div>
                    <div className="bg-[#111827] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#111827</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Zinc</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fafafa] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fafafa</span>
                    </div>
                    <div className="bg-[#f4f4f5] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f4f4f5</span>
                    </div>
                    <div className="bg-[#e4e4e7] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e4e4e7</span>
                    </div>
                    <div className="bg-[#d4d4d8] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#d4d4d8</span>
                    </div>
                    <div className="bg-[#a1a1aa] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#a1a1aa</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#71717a] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#71717a</span>
                    </div>
                    <div className="bg-[#52525b] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#52525b</span>
                    </div>
                    <div className="bg-[#3f3f46] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#3f3f46</span>
                    </div>
                    <div className="bg-[#27272a] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#27272a</span>
                    </div>
                    <div className="bg-[#18181b] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#18181b</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Neutral</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fafafa] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fafafa</span>
                    </div>
                    <div className="bg-[#f5f5f5] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f5f5f5</span>
                    </div>
                    <div className="bg-[#e5e5e5] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e5e5e5</span>
                    </div>
                    <div className="bg-[#d4d4d4] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#d4d4d4</span>
                    </div>
                    <div className="bg-[#a3a3a3] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#a3a3a3</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#737373] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#737373</span>
                    </div>
                    <div className="bg-[#525252] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#525252</span>
                    </div>
                    <div className="bg-[#404040] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#404040</span>
                    </div>
                    <div className="bg-[#262626] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#262626</span>
                    </div>
                    <div className="bg-[#171717] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#171717</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Stone</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fafaf9] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fafaf9</span>
                    </div>
                    <div className="bg-[#f5f5f4] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f5f5f4</span>
                    </div>
                    <div className="bg-[#e7e5e4] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e7e5e4</span>
                    </div>
                    <div className="bg-[#d6d3d1] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#d6d3d1</span>
                    </div>
                    <div className="bg-[#a8a29e] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#a8a29e</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#78716c] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#78716c</span>
                    </div>
                    <div className="bg-[#57534e] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#57534e</span>
                    </div>
                    <div className="bg-[#44403c] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#44403c</span>
                    </div>
                    <div className="bg-[#292524] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#292524</span>
                    </div>
                    <div className="bg-[#1c1917] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#1c1917</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Red</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fef2f2] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fef2f2</span>
                    </div>
                    <div className="bg-[#fee2e2] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fee2e2</span>
                    </div>
                    <div className="bg-[#fecaca] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fecaca</span>
                    </div>
                    <div className="bg-[#fca5a5] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fca5a5</span>
                    </div>
                    <div className="bg-[#f87171] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f87171</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#ef4444] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#ef4444</span>
                    </div>
                    <div className="bg-[#dc2626] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#dc2626</span>
                    </div>
                    <div className="bg-[#b91c1c] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#b91c1c</span>
                    </div>
                    <div className="bg-[#991b1b] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#991b1b</span>
                    </div>
                    <div className="bg-[#7f1d1d] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#7f1d1d</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Orange</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fff7ed] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fff7ed</span>
                    </div>
                    <div className="bg-[#ffedd5] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#ffedd5</span>
                    </div>
                    <div className="bg-[#fed7aa] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fed7aa</span>
                    </div>
                    <div className="bg-[#fdba74] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fdba74</span>
                    </div>
                    <div className="bg-[#fb923c] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fb923c</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#f97316] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#f97316</span>
                    </div>
                    <div className="bg-[#ea580c] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#ea580c</span>
                    </div>
                    <div className="bg-[#c2410c] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#c2410c</span>
                    </div>
                    <div className="bg-[#9a3412] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#9a3412</span>
                    </div>
                    <div className="bg-[#7c2d12] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#7c2d12</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Amber</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fffbeb] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fffbeb</span>
                    </div>
                    <div className="bg-[#fef3c7] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fef3c7</span>
                    </div>
                    <div className="bg-[#fde68a] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fde68a</span>
                    </div>
                    <div className="bg-[#fcd34d] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fcd34d</span>
                    </div>
                    <div className="bg-[#fbbf24] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fbbf24</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#f59e0b] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#f59e0b</span>
                    </div>
                    <div className="bg-[#d97706] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#d97706</span>
                    </div>
                    <div className="bg-[#b45309] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#b45309</span>
                    </div>
                    <div className="bg-[#92400e] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#92400e</span>
                    </div>
                    <div className="bg-[#78350f] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#78350f</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Yellow</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fefce8] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fefce8</span>
                    </div>
                    <div className="bg-[#fef9c3] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fef9c3</span>
                    </div>
                    <div className="bg-[#fef08a] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fef08a</span>
                    </div>
                    <div className="bg-[#fde047] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fde047</span>
                    </div>
                    <div className="bg-[#facc15] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#facc15</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#eab308] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#eab308</span>
                    </div>
                    <div className="bg-[#ca8a04] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#ca8a04</span>
                    </div>
                    <div className="bg-[#a16207] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#a16207</span>
                    </div>
                    <div className="bg-[#854d0e] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#854d0e</span>
                    </div>
                    <div className="bg-[#713f12] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#713f12</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Lime</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#f7fee7] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f7fee7</span>
                    </div>
                    <div className="bg-[#ecfccb] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#ecfccb</span>
                    </div>
                    <div className="bg-[#d9f99d] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#d9f99d</span>
                    </div>
                    <div className="bg-[#bef264] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#bef264</span>
                    </div>
                    <div className="bg-[#a3e635] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#a3e635</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#84cc16] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#84cc16</span>
                    </div>
                    <div className="bg-[#65a30d] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#65a30d</span>
                    </div>
                    <div className="bg-[#4d7c0f] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#4d7c0f</span>
                    </div>
                    <div className="bg-[#3f6212] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#3f6212</span>
                    </div>
                    <div className="bg-[#365314] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#365314</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Green</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#f0fdf4] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f0fdf4</span>
                    </div>
                    <div className="bg-[#dcfce7] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#dcfce7</span>
                    </div>
                    <div className="bg-[#bbf7d0] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#bbf7d0</span>
                    </div>
                    <div className="bg-[#86efac] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#86efac</span>
                    </div>
                    <div className="bg-[#4ade80] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#4ade80</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#22c55e] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#22c55e</span>
                    </div>
                    <div className="bg-[#16a34a] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#16a34a</span>
                    </div>
                    <div className="bg-[#15803d] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#15803d</span>
                    </div>
                    <div className="bg-[#166534] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#166534</span>
                    </div>
                    <div className="bg-[#14532d] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#14532d</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Emerald</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#ecfdf5] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#ecfdf5</span>
                    </div>
                    <div className="bg-[#d1fae5] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#d1fae5</span>
                    </div>
                    <div className="bg-[#a7f3d0] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#a7f3d0</span>
                    </div>
                    <div className="bg-[#6ee7b7] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#6ee7b7</span>
                    </div>
                    <div className="bg-[#34d399] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#34d399</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#10b981] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#10b981</span>
                    </div>
                    <div className="bg-[#059669] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#059669</span>
                    </div>
                    <div className="bg-[#047857] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#047857</span>
                    </div>
                    <div className="bg-[#065f46] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#065f46</span>
                    </div>
                    <div className="bg-[#064e3b] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#064e3b</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Teal</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#f0fdfa] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f0fdfa</span>
                    </div>
                    <div className="bg-[#ccfbf1] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#ccfbf1</span>
                    </div>
                    <div className="bg-[#99f6e4] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#99f6e4</span>
                    </div>
                    <div className="bg-[#5eead4] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#5eead4</span>
                    </div>
                    <div className="bg-[#2dd4bf] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#2dd4bf</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#14b8a6] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#14b8a6</span>
                    </div>
                    <div className="bg-[#0d9488] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#0d9488</span>
                    </div>
                    <div className="bg-[#0f766e] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#0f766e</span>
                    </div>
                    <div className="bg-[#115e59] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#115e59</span>
                    </div>
                    <div className="bg-[#134e4a] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#134e4a</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Cyan</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#ecfeff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#ecfeff</span>
                    </div>
                    <div className="bg-[#cffafe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#cffafe</span>
                    </div>
                    <div className="bg-[#a5f3fc] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#a5f3fc</span>
                    </div>
                    <div className="bg-[#67e8f9] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#67e8f9</span>
                    </div>
                    <div className="bg-[#22d3ee] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#22d3ee</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#06b6d4] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#06b6d4</span>
                    </div>
                    <div className="bg-[#0891b2] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#0891b2</span>
                    </div>
                    <div className="bg-[#0e7490] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#0e7490</span>
                    </div>
                    <div className="bg-[#155e75] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#155e75</span>
                    </div>
                    <div className="bg-[#164e63] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#164e63</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Sky</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#f0f9ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f0f9ff</span>
                    </div>
                    <div className="bg-[#e0f2fe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e0f2fe</span>
                    </div>
                    <div className="bg-[#bae6fd] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#bae6fd</span>
                    </div>
                    <div className="bg-[#7dd3fc] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#7dd3fc</span>
                    </div>
                    <div className="bg-[#38bdf8] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#38bdf8</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#0ea5e9] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#0ea5e9</span>
                    </div>
                    <div className="bg-[#0284c7] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#0284c7</span>
                    </div>
                    <div className="bg-[#0369a1] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#0369a1</span>
                    </div>
                    <div className="bg-[#075985] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#075985</span>
                    </div>
                    <div className="bg-[#0c4a6e] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#0c4a6e</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Blue</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#eff6ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#eff6ff</span>
                    </div>
                    <div className="bg-[#dbeafe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#dbeafe</span>
                    </div>
                    <div className="bg-[#bfdbfe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#bfdbfe</span>
                    </div>
                    <div className="bg-[#93c5fd] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#93c5fd</span>
                    </div>
                    <div className="bg-[#60a5fa] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#60a5fa</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#3b82f6] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#3b82f6</span>
                    </div>
                    <div className="bg-[#2563eb] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#2563eb</span>
                    </div>
                    <div className="bg-[#1d4ed8] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#1d4ed8</span>
                    </div>
                    <div className="bg-[#1e40af] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#1e40af</span>
                    </div>
                    <div className="bg-[#1e3a8a] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#1e3a8a</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Indigo</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#eef2ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#eef2ff</span>
                    </div>
                    <div className="bg-[#e0e7ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e0e7ff</span>
                    </div>
                    <div className="bg-[#c7d2fe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#c7d2fe</span>
                    </div>
                    <div className="bg-[#a5b4fc] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#a5b4fc</span>
                    </div>
                    <div className="bg-[#818cf8] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#818cf8</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#6366f1] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#6366f1</span>
                    </div>
                    <div className="bg-[#4f46e5] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#4f46e5</span>
                    </div>
                    <div className="bg-[#4338ca] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#4338ca</span>
                    </div>
                    <div className="bg-[#3730a3] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#3730a3</span>
                    </div>
                    <div className="bg-[#312e81] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#312e81</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Violet</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#f5f3ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f5f3ff</span>
                    </div>
                    <div className="bg-[#ede9fe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#ede9fe</span>
                    </div>
                    <div className="bg-[#ddd6fe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#ddd6fe</span>
                    </div>
                    <div className="bg-[#c4b5fd] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#c4b5fd</span>
                    </div>
                    <div className="bg-[#a78bfa] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#a78bfa</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#8b5cf6] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#8b5cf6</span>
                    </div>
                    <div className="bg-[#7c3aed] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#7c3aed</span>
                    </div>
                    <div className="bg-[#6d28d9] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#6d28d9</span>
                    </div>
                    <div className="bg-[#5b21b6] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#5b21b6</span>
                    </div>
                    <div className="bg-[#4c1d95] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#4c1d95</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Purple</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#faf5ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#faf5ff</span>
                    </div>
                    <div className="bg-[#f3e8ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f3e8ff</span>
                    </div>
                    <div className="bg-[#e9d5ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e9d5ff</span>
                    </div>
                    <div className="bg-[#d8b4fe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#d8b4fe</span>
                    </div>
                    <div className="bg-[#c084fc] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#c084fc</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#a855f7] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#a855f7</span>
                    </div>
                    <div className="bg-[#9333ea] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#9333ea</span>
                    </div>
                    <div className="bg-[#7e22ce] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#7e22ce</span>
                    </div>
                    <div className="bg-[#6b21a8] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#6b21a8</span>
                    </div>
                    <div className="bg-[#581c87] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#581c87</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Fuchsia</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fdf4ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fdf4ff</span>
                    </div>
                    <div className="bg-[#fae8ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fae8ff</span>
                    </div>
                    <div className="bg-[#f5d0fe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f5d0fe</span>
                    </div>
                    <div className="bg-[#f0abfc] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f0abfc</span>
                    </div>
                    <div className="bg-[#e879f9] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e879f9</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#d946ef] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#d946ef</span>
                    </div>
                    <div className="bg-[#c026d3] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#c026d3</span>
                    </div>
                    <div className="bg-[#a21caf] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#a21caf</span>
                    </div>
                    <div className="bg-[#86198f] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#86198f</span>
                    </div>
                    <div className="bg-[#701a75] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#701a75</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Fuchsia</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fdf4ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fdf4ff</span>
                    </div>
                    <div className="bg-[#fae8ff] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fae8ff</span>
                    </div>
                    <div className="bg-[#f5d0fe] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f5d0fe</span>
                    </div>
                    <div className="bg-[#f0abfc] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f0abfc</span>
                    </div>
                    <div className="bg-[#e879f9] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#e879f9</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#d946ef] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#d946ef</span>
                    </div>
                    <div className="bg-[#c026d3] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#c026d3</span>
                    </div>
                    <div className="bg-[#a21caf] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#a21caf</span>
                    </div>
                    <div className="bg-[#86198f] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#86198f</span>
                    </div>
                    <div className="bg-[#701a75] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#701a75</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Pink</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fdf2f8] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fdf2f8</span>
                    </div>
                    <div className="bg-[#fce7f3] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fce7f3</span>
                    </div>
                    <div className="bg-[#fbcfe8] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fbcfe8</span>
                    </div>
                    <div className="bg-[#f9a8d4] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f9a8d4</span>
                    </div>
                    <div className="bg-[#f472b6] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#f472b6</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#ec4899] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#ec4899</span>
                    </div>
                    <div className="bg-[#db2777] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#db2777</span>
                    </div>
                    <div className="bg-[#be185d] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#be185d</span>
                    </div>
                    <div className="bg-[#9d174d] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#9d174d</span>
                    </div>
                    <div className="bg-[#831843] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#831843</span>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className="mt-10 flex flex-col items-center px-20">
            <div>
              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Rose</h1>
              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>
              <div className="text-Text font-rubik flex flex-col lg:flex-row transition-all">
                <div className="flex">
                    <div className="bg-[#fff1f2] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fff1f2</span>
                    </div>
                    <div className="bg-[#ffe4e6] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#ffe4e6</span>
                    </div>
                    <div className="bg-[#fecdd3] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fecdd3</span>
                    </div>
                    <div className="bg-[#fda4af] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fda4af</span>
                    </div>
                    <div className="bg-[#fb7185] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span className="text-SecondryBackground">#fb7185</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-[#f43f5e] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#f43f5e</span>
                    </div>
                    <div className="bg-[#e11d48] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#e11d48</span>
                    </div>
                    <div className="bg-[#be123c] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#be123c</span>
                    </div>
                    <div className="bg-[#9f1239] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#9f1239</span>
                    </div>
                    <div className="bg-[#881337] px-6 py-4 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                        <span>#881337</span>
                    </div>
                </div>
              </div>
            </div>
        </div>




    

    </div>
  )
}

export default colours
