import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
  
      <h1>Hello from here</h1>
      <p>My name is Moataz</p>
      <Link href="/about">
        More about me
      </Link>
    </Layout>
  )
}
