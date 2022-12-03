import { sanityClient, urlFor } from "../sanity"
import Dynamic from 'next/dynamic';
import JarallaxImage from '../components/JarallaxImage';
import moment from 'moment'
import Head from 'next/head'
import Footer from '../components/Footer'

const Jarallax = Dynamic(() => import('../components/Jarallax'), { ssr: false });

const home = ({
  portfolios, 
  Blog,
  DomainName
}) => {
  return (
        <div className="main bg-Background">

          <Head>
            <title>{DomainName} - Home</title>
            <link rel="shortcut icon" href="https://cdn.sanity.io/images/4i4gqgxn/production/27eda8e5bb24a2d31be80a8062077af933ddbb99-1534x1193.png" />

            <meta content="CrypticzXI - Portfolio" property="og:title" />
            <meta id="embed-desc" property="og:description" content="Never live life without a hope. Hope is a tree of life."></meta>
            <meta name="theme-color" content="#198794"></meta>
            <meta name="thumbnail" property="og:image" content="https://cdn.sanity.io/images/4i4gqgxn/production/27eda8e5bb24a2d31be80a8062077af933ddbb99-1534x1193.png"></meta>
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
                      <a href="../contactme/" className="text-Text transition-all p-4 w-full text-center hover:text-FirstColour font-rubik font-[300] text-xl">Contact Me</a>
                    </div>

  
                </div>
              </div>

          <Jarallax className="w-full h-screen bg-cover bg-center jarallax" speed={0.2}>
    
            <JarallaxImage className="h-screen" src="https://cdn.sanity.io/images/4i4gqgxn/production/32aa7fe72a87573b5b8f195e3b822763d11070b4-1600x900.jpg" alt="" />
            
            <div className="w-full h-full bg-opacity-60 bg-[#101010] space-y-4 flex flex-col items-center justify-center">

              <h2 className="text-Text text-center font-poppins font-[800] text-lg transition-all md:text-3xl lg:text-4xl uppercase tracking-wide leading-[1]">Never live life without a hope.</h2>
              <h2 className="text-Text text-center font-poppins font-[800] text-lg transition-all md:text-3xl lg:text-4xl uppercase tracking-wide leading-[1]">Hope is a tree of life.</h2>
              
              <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0 pt-5">
                <a href="../aboutme#portfolio/" className="h-12 w-64 bg-SecondryColour active:translate-y-[5px] group rounded-lg flex items-center justify-center border-4 border-SecondryColour text-white transition-all">
                  <p className="focus:outline-none text-Text font-semibold text-sm font-rubik tracking-wide">My Portfolio</p>
                  <div className="h-12 w-64 absolute rounded-lg border-b-[5px] mt-[5px] transition-all border-FirstColour"></div>
                </a>
                <a href="../blog/" className="h-12 w-64 bg-SecondryColour active:translate-y-[5px] group rounded-lg flex items-center justify-center border-4 border-SecondryColour text-white transition-all">
                  <p className="focus:outline-none text-Text font-semibold text-sm font-rubik tracking-wide">Blog Posts</p>
                  <div className="h-12 w-64 absolute rounded-lg border-b-[5px] mt-[5px] transition-all border-FirstColour"></div>
                </a>
              </div>

              

            </div>
          </Jarallax>

          <div className="h-4 from-[#10101030] to-[#10101010] w-full flex bg-gradient-to-b"></div>

          
            <div id="portfolio" className="bg-Background flex justify-center">

              <div className="py-20 flex flex-col items-center px-10 md:px-[4rem] lg:px-40 xl:px-60">

              <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">My Portfolio</h2>
                <div className="border-[1px] mt-8 mb-[5rem] w-64 border-Text"></div>

                <div className="w-full h-full gap-8 items-start flex flex-wrap transition-all justify-center mt-[2rem]">
                    {portfolios.map((portfolio) => (
                      portfolio.thumbnail && portfolio.title && portfolio.owninguser.name?
                        <a href={`/artwork/${portfolio.slug.current}`} className="w-[49%] lg:w-[24%] hover:scale-[0.95] h-auto transition-all relative group rounded-xl flex flex-col items-center justify-center overflow-hidden">       
                            <img className="w-full h-full transition-all" src={urlFor(portfolio.thumbnail.image)} />
                            <div className="absolute bottom-0 left-0 w-full items-center justify-center transition-opacity h-[50%] from-transparent via-Background/50 to-Background/70 group-hover:bg-gradient-to-b flex flex-col">
                                {portfolio.title?<p className="font-rubik group-hover:text-Text font-[600] text-transparent text-lg">{portfolio.title}</p>:null}
                                {portfolio.owninguser.name?<p className="font-rubik group-hover:text-Text font-[300] text-transparent text-base">By {portfolio.owninguser.name}</p>:null}
                            </div>
                        </a>
                      :null
                    ))}
                </div>
              </div>

            </div>
          
          <div id="blogs" className="bg-Background flex justify-center w-full">

            <div className="py-20 flex flex-col items-center w-full px-10 md:px-[4rem] lg:px-40 xl:px-60">

              <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">My Blog Posts</h2>
              <div className="border-[1px] mt-8 mb-[5rem] w-64 border-Text"></div>

              <div className="w-full h-full gap-8 items-start flex flex-wrap transition-all justify-center mt-[2rem]">
                {Blog?.map((map) => (

                  <a href={`/blog/${map.slug.current}`} className="w-full max-w-5xl bg-SecondryBackground rounded-xl flex items-center flex-col md:flex-row hover:scale-[0.98] transition-all">

                  <div className="ImageContainer overflow-hidden md:rounded-l-xl md:rounded-t-none rounded-t-xl bg-center bg-cover md:w-[200px] md:h-[200px] w-full h-[500px]" style={{backgroundImage: "url(" + urlFor(map.image) + ")",}}></div>
                  <div className="text-Text md:ml-8 TextContainer p-4 md:py-0 py-8">
                    <h2 className="font-[500] text-xl font-poppins">{map.title}</h2>
                    <div className="font-[300] md:text-base text-xs mt-2 text-Text font-rubik flex md:flex-row flex-col md:space-y-0 space-y-2">
                      <p className="mr-2">{moment(map.date).format(("dddd, MMMM Do YYYY, h:mma"))}</p>
                    </div>
                  </div>
                  </a>

                ))}
              </div>
            </div>
          </div>
        </div>
)}

export const getServerSideProps = async (pageContext) => {

  const query = `*[_type == "portfolio"]{
    title,
    owninguser->{
      name,
    },
    thumbnail,
    images,
    slug
  }`
  const portfolios = await sanityClient.fetch(query)

  const blog_query = `*[_type == "blog"]{
    title,
    post,
    image,
    slug,
    date,
    portfolio->{
      title
    },
    owninguser->{
      name,
      image,
      desc
    }
  }`

  const blog = await sanityClient.fetch(blog_query)

  const datetime = moment(blog.date).format(("dddd, MMMM Do YYYY, h:mma"));

  const DomainName = pageContext.req.headers.host


  if (!portfolios.length || !blog.length) {
    return {
      props: {
        portfolios: [],
        Blog: blog,
        DateTime: datetime,
        DomainName
      },
    }
  } else {
    return {
      props: {
        portfolios,
        Blog: blog,
        DateTime: datetime,
        DomainName
      },
    }
  }
}

export default home
