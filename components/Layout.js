import Link from "next/link"
import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"


Router.onRouteChangeStart = url =>{
    console.log(url)
    NProgress.start()
}

Router.onRouteChangeComplete=()=>NProgress.done()

Router.onRouteChangeErrors=()=>NProgress.done()


const Layout=({children,title})=>{
    return(
        <div className="container">
            <Head>
                <title>Nextjs - Moataz</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
            </Head>
        <header>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>HireMe</a></Link>
            <Link href="/blogs"><a>My Blogs</a></Link>
        </header>
        <h1>{title}</h1>
            {children}
        <footer>&copy; {new Date().getFullYear()}</footer>

        <style jsx>
            {
                `

                    header {
                        background-color:purple;
                        display:flex;
                        justify-content:center;
                        
                        padding:4px;
                        font-weight:bold;
                        font-size:1.5rem;

                    }

                    header a {
                        padding:8px;
                    }

                    header a:hover {
                        color:white
                    }

                    footer {
                        background-color:red;
                        display:flex;
                        justify-content:center;
                        padding:4px;
                        font-weight:bold;
                        font-size:1.5rem;

                    }
                
                `
            }

        </style>
        </div>
    )
}
export default Layout;