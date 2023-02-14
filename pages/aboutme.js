import { sanityClient, urlFor } from "../sanity"
import { formatSizeUnits } from "../utils"
import JarallaxImage from '../components/JarallaxImage';
import Dynamic from 'next/dynamic';
import BlockContent from '@sanity/block-content-to-react'
import moment from 'moment'
import Head from 'next/head'

const Jarallax = Dynamic(() => import('../components/Jarallax'), { ssr: false });


const profile = ({ 
  Account,
  Navbar,
  Portfolios,
  ResumeFile,
  Blog,
  DateTime,
  DomainName,
  header
}) => {
  var Filesize = formatSizeUnits(ResumeFile?.size)
  return (
    <div className="bg-Background overflow-x-hidden">

      <Head>
        <title>{DomainName} - {Account.name}</title>
        <link rel="shortcut icon" href={urlFor(Navbar.headerlogo)} />
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

      <Jarallax className="w-full h-[30rem] bg-cover bg-center jarallax" speed={0.5}>
    
            <JarallaxImage className="h-[30rem]" src={urlFor(Account.banner)} alt="" />

            <div className="w-full h-full bg-opacity-30 bg-Background space-y-4 flex flex-col items-center justify-center">

              <div className="w-40 h-40 rounded-full mb-2 p-1 bg-Text flex items-center justify-center">
                <img className="rounded-full" src={urlFor(Account.image)}/>
              </div>

              <h2 className="text-Text text-center font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">{Account.name}</h2>
              <h2 className="text-Text text-center font-poppins font-[400] text-xl md:text-2xl uppercase tracking-wide leading-[1]">{Account.desc}</h2>
              
              {Account.links?
                <div className="flex md:space-x-5 space-x-3">
                  {Account.links.map((button) => (
                    button.image && button.href?
                      <a href={button.href} className="md:w-[4rem] md:h-[4rem] w-[2.75rem] h-[2.75rem] border-2 border-SecondryBackground hover:border-FirstColour hover:scale-[1.2] flex items-center justify-center rounded-full bg-SecondryBackground transition-all">
                        <img className="md:w-[2rem] md:h-[2rem] w-7 h-7" src={urlFor(button.image)} />
                      </a>
                    :null
                  ))}
                </div>
              :null}

            </div>

      </Jarallax>

      <div className="h-16 text-Text font-rubik font-[300] w-full flex bg-SecondryBackground items-center space-x-10 justify-center">
          <a href="#portfolio">Portfolio</a>
          {Account.aboutme.desc || Account.aboutme.hiring || Account.aboutme.skills || Account.aboutme.software?
            <a href="#aboutme">About Me</a>
          :null}
          {Account.ResumeFile?
            <a href="#resume">Resume</a>
          :null}
            <a href="#blog">Blog</a>
          {Account.contactme?
            <a href="#contactme">Contact Me</a>
          :null}
      </div>

      <div id="portfolio" className="mt-20 flex flex-col items-center px-20">
        <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">Portfolio</h2>
        <div className="border-[1px] my-8 w-64 border-Text"></div>

        <div className="w-full h-full gap-8 items-start flex flex-wrap transition-all justify-center mt-[2rem]">
          {Portfolios.map((portfolio) => (
            portfolio.thumbnail && portfolio.title ?
              <a href={`/artwork/${portfolio.slug.current}`} className="w-full md:w-[49%] h-full lg:w-[24%] hover:scale-[0.95] transition-all relative group rounded-xl flex flex-col items-center justify-center overflow-hidden">       
                  <img className="w-full h-full transition-all" src={urlFor(portfolio.thumbnail.image)} />
                  <div className="absolute bottom-0 left-0 w-full items-center justify-center transition-colors h-[50%] from-transparent via-Background/50 to-Background/70 group-hover:bg-gradient-to-b flex flex-col">
                      <p className="font-rubik group-hover:text-Text font-[600] text-transparent text-lg">{portfolio.title}</p>
                      <p className="font-rubik group-hover:text-Text font-[300] text-transparent text-base">By {Account.name}</p>
                  </div>
              </a>
            :null
          ))}
        </div>
      </div>

      {Blog?
        <div id="blog" className="mt-20 flex flex-col items-center">
            <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">Recent Blog Post</h2>
            <div className="border-[1px] my-8 w-64 border-Text"></div>

            <a href={`/blog/${Blog.slug.current}`} className="w-full md:max-w-4xl max-w-md h-44 bg-SecondryBackground rounded-xl flex items-center md:p-8 p-4 hover:scale-[0.98] transition-all">
            {Blog.image?<img src={urlFor(Blog.image)} className="md:w-[100px] md:h-[100px] h-[75px] w-[75px] rounded-full"></img>:null}
            <div className="text-Text ml-5">
                {Blog.title?<h2 className="font-[500] text-xl font-poppins">{Blog.title}</h2>:null}
                <div className="font-[300] md:text-base text-xs mt-2 text-Text font-rubik flex md:flex-row flex-col md:space-y-0 space-y-2">
                <p className="mr-2">Posted: {DateTime}</p>
                {Blog.portfolio.title?<p className="md:flex hidden mr-2">/</p>:null}
                {Blog.portfolio.title?<p className="">Portfolio Refrence: {Blog.portfolio.title}</p>:null}
                </div>
            </div>
            </a>

            <a href="/blog" className="mt-10 bg-FirstColour border-2 border-FirstColour hover:bg-transparent text-Text hover:text-FirstColour h-10 w-32 flex items-center justify-center rounded-lg transition-all">
                <h2>View All Posts</h2>
            </a>
        </div>
      :null}




    {Account.aboutme.desc || Account.aboutme.hiring || Account.aboutme.skills || Account.aboutme.software?
      <div id="aboutme" className="mt-20 flex flex-col items-center px-20">
        <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">About Me</h2>
        <div className="border-[1px] my-8 w-64 border-Text"></div>


        <div className="text-box md:max-w-[70%] max-w-[95%] mt-10">
          {Account.aboutme.desc?
            <div>

              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full">Summary</h1>

              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>

              <div className="text-Text font-rubik md:text-left text-center md:text-lg text-base transition-all">
                  <BlockContent blocks={Account.aboutme.desc}/>
              </div>

            </div>
          :null}


          {Account.aboutme.hiring?
            <div>

              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Hiring Info</h1>

              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>


              <div className="bg-SecondryBackground rounded w-full flex flex-col lg:flex-row lg:h-16 py-2">

                  {Account?.aboutme?.hiring?.map((hiring) => (
                      <div className="px-4 py-2 rounded-lg mr-[8px] transition-all flex items-center md:text-base text-sm whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-SecondryColour transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <h2 className="text-Text font-rubik text-left text-lg ml-2">{hiring}</h2>      
                      </div>
                  ))}

              </div>

            </div>
          :null}


          {Account.aboutme.skills?
            <div>

              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Skills</h1>

              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>

              <div className="text-Text font-rubik block box-border break-words leading-[45px] transition-all">

                  {Account.aboutme.skills.map((skill) => (
                      <div className="bg-SecondryBackground px-4 py-2 rounded-lg mr-[8px] transition-all inline box-border md:text-base text-sm whitespace-nowrap">
                          {skill}
                      </div>
                  ))}

              </div>

            </div>
          :null}
            
          {Account.aboutme.software?
            <div>

              <h1 className="text-Text text-2xl font-[500] font-rubik md:text-left text-center transition-all w-full pt-10">Software</h1>

              <div className="border-[1px] my-4 md:w-[12rem] w-full transition-all border-Text"></div>

              <div className="text-Text font-rubik flex flex-wrap break-words leading-[45px] transition-all items-center">

                {Account.aboutme.software.map((software) => (
                    <div className="bg-SecondryBackground px-4 py-2 max-h-14 h-full rounded-lg mr-[8px] my-2 transition-all flex items-center md:text-base text-sm">
                        <img className="w-auto h-6 mr-2" src={urlFor(software.image)} />
                        {software.name}
                    </div>
                ))}

              </div>

            </div>
          :null}
        </div>
      </div>
    :null}


    {Account.ResumeFile?
      <div id="resume" className="mt-20 flex flex-col items-center px-20">
        <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">Resume</h2>
        <div className="border-[1px] my-8 w-64 border-Text"></div>

        <div className="flex flex-col w-full items-center md:max-w-[70%] max-w-[95%] mt-10">

          {Account.resume.image?<img className="md:max-w-[50%] w-full h-auto" src={urlFor(Account.resume.image)}/>:<div></div>}

          {ResumeFile? 
            <a href={`${ResumeFile.url}`} download className="flex w-full md:w-[24rem] h-20 bg-SecondryColour border-2 border-SecondryColour group hover:bg-transparent transition-all p-4 rounded-lg items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 transition-all text-Text group-hover:text-SecondryColour" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>

              <div className="flex flex-col text-Text group-hover:text-SecondryColour ml-2">
                <p className="font-[600] md:text-lg text-base text-left transition-all">{ResumeFile.originalFilename}</p>
                <p className="font-[300] text-left md:text-base text-sm transition-all">{Filesize}</p>
              </div>
            </a>
          :null}

        </div>

          
      </div>
    :null}

    {Account.contactme ?

      <div id="contactme" className="mt-20 flex flex-col items-center px-20">
        <h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-[1]">Contact Me</h2>
        <div className="border-[1px] my-8 w-64 border-Text"></div>
        {Account.contactme?
          <div className="flex flex-col w-full items-center md:max-w-[40%] max-w-[95%] mt-10">

            <form method="POST" action={Account.contactme} className="text-Text font-rubik w-full space-y-5">

              <div className="flex flex-col xl:flex-row w-full justify-center xl:space-x-10 space-y-5 xl:space-y-0">
                <div className="flex-col w-full">
                  <p className="mb-2 text-center">Your Name <span className="text-required">*</span></p>
                  <input type="text" name="name" id="name" placeholder="John Snow" required className="w-full h-[3rem] bg-SecondryBackground rounded-lg border-2 focus:outline-none px-4 border-FirstColour focus:border-SecondryColour invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></input>
                </div>
                <div className="flex-col w-full">
                  <p className="mb-2 text-center">Your Email <span className="text-required">*</span></p>
                  <input type="email" name="email" id="email" placeholder="you@example.com" required className="w-full h-[3rem] bg-SecondryBackground rounded-lg border-2 focus:outline-none px-4 border-FirstColour focus:border-SecondryColour invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></input>
                </div>
              </div>

              <div className="flex-col w-full">
                <p className="mb-2 ml-2">Subject <span className="text-required">*</span></p>
                <input type="text" name="subject" id="subject" placeholder="I'm looking for assets" required className="w-full h-[3rem] bg-SecondryBackground rounded-lg border-2 focus:outline-none px-4 border-FirstColour focus:border-SecondryColour invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></input>
              </div>

              <div className="flex-col w-full">
                <p className="mb-2 ml-2">Company</p>
                <input type="text" name="company" id="company" placeholder="Fancy Studios" className="w-full h-[3rem] bg-SecondryBackground rounded-lg border-2 focus:outline-none px-4 border-FirstColour focus:border-SecondryColour invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></input>
              </div>

              <div className="flex-col w-full">
                <p className="mb-2 ml-2">Body <span className="text-required">*</span></p> 
                <textarea name="body" id="body" required rows="6" cols="20" className="w-full bg-SecondryBackground rounded-lg border-2 focus:outline-none px-4 py-4 border-FirstColour focus:border-SecondryColour invalid:focus:border-required invalid:border-required transition-all autofill:bg-SecondryBackground autofill:text-Text"></textarea>
              </div>

              <div className="bg-SecondryColour border-SecondryColour border-2 rounded hover:bg-transparent flex items-center justify-center h-12 w-full transition-all">
                <button type="submit" className="flex items-center justify-center h-full w-full focus:outline-none font-semibold text-sm text-Text transition-all hover:text-SecondryColour font-rubik tracking-wide">Submit</button>
              </div>

            </form>

          </div>
        :null}

      </div>
      :null}

      <div className="py-20 bg-Background"></div>

    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const DomainName = pageContext.req.headers.host

  const query = `*[ _type == "account"][0]{
    name,
    desc,
    image,
    banner,
    aboutme,
    resume,
    slug,
    contactme,
    "ResumeFile": resume.resume.asset->{
      url,
      size,
      originalFilename
    },
    links
  }`

  const nav_query = `*[_type == "header" && header == "Header"][0]{
    headerlogoalt,
    headerlogo,
    directorys
  }`


  const account = await sanityClient.fetch(query)
  const navbar = await sanityClient.fetch(nav_query)

  const blog_query = `*[_type == "blog" && owninguser->slug.current == $accslug][0]{
    title,
    post,
    image,
    slug,
    date,
    portfolio->{
      title
    }
  }`



  const portfolio_query = `*[_type == "portfolio" && owninguser->slug.current == $accslug]{
    title,
    slug,
    thumbnail
  }`
  const accslug = account.slug.current;
  const portfolios = await sanityClient.fetch(portfolio_query, { accslug })
  const blog = await sanityClient.fetch(blog_query, { accslug })

  var fileinfo = account.ResumeFile;
  const datetime = moment(blog.date).format(("dddd, MMMM Do YYYY, h:mma")); 

  if (!fileinfo) {
    fileinfo = null;
  }

  if (!account) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        Account: account,
        Navbar: navbar,
        Portfolios: portfolios,
        ResumeFile: fileinfo,
        Blog: blog,
        DateTime: datetime,
        DomainName,
      }
    }
  }
}

export default profile
