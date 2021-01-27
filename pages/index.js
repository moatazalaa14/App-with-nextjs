import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
  
      <h1>I'M Moataz</h1>
      
      <Link href="/about">
      <p>More about me</p>
      </Link>
      <style jsx>
        {
          `
            h1{
              color:white;
              text-align:center;
              margin-top:16rem;
            }

            p {
              color:white;
              text-align:center;
            }
            p:hover{
              color:#e94560;
            }
          `
        }
      </style>
    </Layout>
  )
}
