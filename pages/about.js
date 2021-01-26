import Link from "next/link"
import Layout from "../components/Layout"

export default function About(){
    return(
        <Layout title="About">  
        <Link href="/">
            Home
            </Link>
            <p>Dolore aliquip eiusmod et Lorem tempor culpa labore incididunt. Ipsum in non Lorem ipsum dolor cillum dolor ullamco irure eu reprehenderit amet. Enim ipsum labore laborum duis occaecat sit nulla do qui nulla officia. Ea qui duis ex amet magna eu ex adipisicing qui aute id ullamco exercitation.</p>
            <img src="https://dkhlak.com/wp-content/uploads/2019/09/59495-4.jpg" width="300px" height="300px"/>
        </Layout>
    )
}