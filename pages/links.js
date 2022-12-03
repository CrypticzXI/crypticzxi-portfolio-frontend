import { sanityClient, urlFor } from "../sanity"
import Dynamic from 'next/dynamic';
import Head from 'next/head'
import JarallaxImage from '../components/JarallaxImage';

const Jarallax = Dynamic(() => import('../components/Jarallax'), { ssr: false });

const Links = ({
links,
DomainName,
Navbar,
Account
}) => {
  return (
        <div className="main bg-Background min-h-screen h-full overflow-x-hidden">

            <Head>
                <title>{DomainName} - Links</title>
                <link rel="shortcut icon" href={urlFor(Navbar.headerlogo)} />
            </Head>

            <div className="absolute top-0 left-0 w-full h-16 bg-clip-padding backdrop-blur-xl bg-opacity-50 bg-Background z-[420] flex items-center xl:px-40 lg:px-32 md:px-20 px-8 transition-all">
              
              {Navbar?.headerlogo?
                <a href="/"><img className="max-h-10 hover:scale-[0.9] transition-ally" alt={Navbar.headerlogoalt} src={urlFor(Navbar.headerlogo)} /></a>
              :
              <a href="/" className="text-Text font-poppins font-[600] text-lg">{Navbar.headerlogoalt}</a>}
            
              <div className="flex-grow"></div>

              <div className="space-x-5 md:flex hidden">
                  {Navbar.directorys.map(( data ) => (
                  <a href={data.href} className="text-Text transition-all hover:text-FirstColour font-rubik font-[300] text-lg">{data.title}</a>
                  ))}
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
                      {Navbar.directorys.map(( data ) => (
                        <a href={data.href} className="text-Text transition-all p-4 w-full text-center hover:text-FirstColour font-rubik font-[300] text-xl">{data.title}</a>
                      ))}
                    </div>
                </div>
              </div>

              <div className="h-16 w-full flex bg-SecondryBackground"></div>

              <Jarallax className="w-full h-[25rem] bg-cover bg-center jarallax" speed={0.5}>

                    <JarallaxImage className="h-[30rem]" src={urlFor(Account.banner)} alt="" />

                    <div className="w-full h-full bg-opacity-30 bg-Background space-y-4 flex flex-col items-center justify-center">

                      <div className="w-40 h-40 rounded-full mb-2 p-1 bg-Text flex items-center justify-center">
                        <img className="rounded-full" src={urlFor(Account.image)}/>
                      </div>

                      <h2 className="text-Text text-center font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">{Account.name}</h2>
                      <h2 className="text-Text text-center font-poppins font-[400] text-xl md:text-2xl uppercase tracking-wide leading-[1]">{Account.desc}</h2>

                    </div>

              </Jarallax>

            <div className="w-screen h-full pt-10 pb-10 flex flex-col items-center">
                
                <div className="max-w-lg w-full flex flex-col items-center space-y-5 mt-5">
                    {links?.map((link, _key) => (
                        <a href={link.href} key={_key} className="bg-FirstColour w-full h-16 rounded-lg group flex items-center justify-center border-2 border-FirstColour hover:bg-transparent transition-all hover:scale-[0.95]">
                            {link.image?<img className="w-auto h-[25px] mr-2" src={urlFor(link.image)}></img>:null}
                            {link.buttontitle?<h3 className="text-Text font-rubik group-hover:text-FirstColour transition-all cursor-default uppercase">{link.buttontitle}</h3>:null}
                        </a>

                    ))}

                </div>
                
                
            </div>

 

       </div>
)}

export const getServerSideProps = async (pageContext) => {

    
    const DomainName = pageContext.req.headers.host

    const accquery = `*[ _type == "account"][0]{
      name,
      desc,
      image,
      banner,
      slug
    }`
  
    const query = `*[_type == "linkspage"]|order(orderRank){
      buttontitle,
      image,
      href
    }`
    const links = await sanityClient.fetch(query)

    const nav_query = `*[_type == "header" && header == "Header"][0]{
      headerlogoalt,
      headerlogo,
      directorys
    }`
    const navbar = await sanityClient.fetch(nav_query)
    const accountinfo = await sanityClient.fetch(accquery)
  
    if (!Links.length) {
      return {
        props: {
          links: [],
          DomainName,
          Navbar: navbar,
          Account: accountinfo
        },
      }
    } else {
      return {
        props: {
          links,
          DomainName,
          Navbar: navbar,
          Account: accountinfo
        },
      }
    }
  }

export default Links
