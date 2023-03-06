import { sanityClient, urlFor } from "../../sanity"
import { useEffect } from 'react'
import { formatSizeUnits } from "../../utils"
import BlockContent from '@sanity/block-content-to-react'
import Router from 'next/router'
import moment from 'moment'
import Head from 'next/head'


const blogpost = ({ 
    title,
    owninguser,
    post,
    images,
    fileinfo,
    portfolio,
    currentdate,
    DomainName,
    Navbar
}) => {
  var Filesize = formatSizeUnits(fileinfo?.size)
  if (images[0]) {
    var Image0 = urlFor(images[0]) 
  }
  return (
    <div className="bg-Background min-h-screen overflow-x-hidden">

      <Head>
        <title>{DomainName} - {title}</title>
        <link rel="shortcut icon" href={urlFor(Navbar.headerlogo)} />

        <meta content={"CrypticzXI - Blog Post"} property="og:title" />
        <meta id="embed-desc" property="og:description" content={title + " - " + currentdate}></meta>
        <meta name="theme-color" content="#198794"></meta>
        {Image0 && images[0] ? <meta property="og:image" content={Image0}></meta>: null}
        <meta name="twitter:card" content="summary_large_image"></meta>
        {Image0 && <meta id="image-src" name="twitter:image:src" content={Image0}></meta>: null}
        {Image0 && <meta id="discord" name="twitter:image" content={Image0}></meta>: null}
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


      
      <div id="canvas" className="fixed w-full hidden min-h-screen h-full top-0 z-[999] left-0 overflow-hidden bg-Background items-center justify-center">
        <img id="canvas-img" className="w-[80%] h-auto"/>
        <button onClick={() => {document.getElementById("canvas").style.display = "none"}} className="absolute top-5 right-20 space-x-5 h-10 w-auto flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-Text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-Text font-rubik">Close Image</h2>
        </button>
      </div>

      <div className="py-32 flex flex-col items-center px-10 md:px-[4rem] lg:px-40">

        <div className="flex flex-col items-center w-full lg:max-w-[50%] md:max-w-[75%]">
          {title?<h2 className="text-Text font-poppins font-[800] text-2xl md:text-4xl text-center lg:text-5xl uppercase tracking-wide leading-[1]">{title}</h2>:null}
          {title?<h2 className="text-Text font-poppins font-[400] text-base text-center mt-5">{currentdate}</h2>:null}
          {owninguser?
            <a href={`/profile/`} className="flex items-center group transition-all mt-10">
                <img className="w-14 h-14 rounded-full border-Text transition-all border-2 group-hover:border-FirstColour" src={urlFor(owninguser.image)} />
                <h1 className="text-Text pl-4 font-rubik text-lg transition-all group-hover:text-FirstColour">{owninguser.name}</h1>
            </a>
          :null}
          {post?
            <div className="text-Text font-rubik text-center md:text-lg text-base transition-all mt-10">
                <BlockContent blocks={post}/>
            </div>
          :null}
        </div>
        
        {images?
            <div className="w-full max-w-4xl h-full gap-8 items-start flex flex-wrap transition-all justify-center mt-[2rem]">
                {images.map((data) => (
                    <div onClick={() => {document.getElementById("canvas").style.display = "flex"; document.getElementById("canvas-img").src = `${urlFor(data)}`}} className="flex flex-col hover:scale-[0.95] transition-all items-center hover:z-30 space-y-2 w-full md:w-[70%] lg:w-[46%] h-auto">
                        <img className="rounded-lg w-full h-full" src={urlFor(data)} />
                    </div>
                ))}
            </div>
        :null}

        {fileinfo?.originalFilename && fileinfo?.size && fileinfo?.url ?
            <div className="max-w-[30rem] h-auto rounded-lg space-y-4 mt-10  flex flex-col text-center break-words">
            
                <a href={fileinfo?.url} download className="flex max-w-[30rem] h-16 bg-SecondryColour border-2 border-SecondryColour group hover:bg-transparent transition-all p-8 rounded-lg items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 transition-all text-Text group-hover:text-SecondryColour" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>

                    <div className="flex flex-col text-Text group-hover:text-SecondryColour ml-2">
                        <p className="font-[600] text-lg text-left transition-all">{fileinfo?.originalFilename}</p>
                        <p className="font-[300] text-left transition-all">{Filesize}</p>
                    </div>
                </a>

            </div>
        :null}

        {portfolio ?
            <div className="flex flex-col items-center w-full justify-center mt-10">
                <h2 className="text-Text font-poppins font-[800] text-2xl uppercase tracking-wide leading-[1]">Linked Portfolio Artwork</h2>
                <div className="border-[1px] my-8 w-64 border-Text"></div>
                <a href={`/artwork/${portfolio.slug.current}`} className="w-full md:w-[49%] h-full lg:w-[24%] hover:scale-[0.95] transition-all relative group rounded-xl flex flex-col items-center justify-center overflow-hidden">       
                    <img className="w-full h-full transition-all" src={urlFor(portfolio.thumbnail.image)} />
                    <div className="absolute bottom-0 left-0 w-full items-center justify-center transition-colors h-[50%] from-transparent via-Background/50 to-Background/70 bg-gradient-to-b flex flex-col">
                        <p className="font-rubik text-Text font-[600] text-lg">{portfolio.title}</p>
                        <p className="font-rubik text-Text font-[300] text-base">By {portfolio.owninguser.name}</p>
                    </div>
                </a>
            </div>
        :null}

      </div>


    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug
  const DomainName = pageContext.req.headers.host

  const query = `*[ _type == "blog" && slug.current == $pageSlug][0]{
    title,
    slug,
    owninguser->{
        name,
        slug,
        image
    },
    post,
    date,
    images,
    "FileInfo": file.asset->{
        url,
        size,
        originalFilename
    },
    portfolio->{
        title,
        slug,
        thumbnail,
        owninguser->{
            name
        }
    },
    images
  }`

  const blog = await sanityClient.fetch(query, { pageSlug })

  const nav_query = `*[_type == "header" && header == "Header"][0]{
    headerlogoalt,
    headerlogo,
    directorys
  }`
  const Navbar = await sanityClient.fetch(nav_query)

  const datetime = moment(blog.date).format(("dddd, MMMM Do YYYY, h:mma")); 


  var raw_blog = blog;
  var blog_title = blog?.title;
  var blog_owninguser = blog?.owninguser;
  var blog_post = blog?.post;
  var blog_images = blog?.images;
  var blog_fileinfo = blog?.FileInfo;
  var blog_portfolio = blog?.portfolio;
  var blog_date = blog.date;

  if (!raw_blog) {
    raw_blog = null
  }
  if (!blog_title) {
    blog_title = null
  }
  if (!blog_owninguser) {
    blog_owninguser = null
  }
  if (!blog_post) {
    blog_post = null
  }
  if (!blog_images) {
    blog_images = null
  }
  if (!blog_fileinfo) {
    blog_fileinfo = null
  }
  if (!blog_portfolio) {
    blog_portfolio = null
  }
  if (!blog_date) {
    blog_date = null
  }

  return {
    props: {
      blog: raw_blog,
      title: blog_title,
      owninguser: blog_owninguser,
      post: blog_post,
      images: blog_images,
      fileinfo: blog_fileinfo,
      portfolio: blog_portfolio,
      date: blog_date,
      currentdate: datetime,
      DomainName,
      Navbar
    }
  }
}

export default blogpost
