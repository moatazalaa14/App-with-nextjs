import React ,{Component} from "react"
import fetch from "isomorphic-unfetch"
import Layout from "../components/Layout"
import Error from "./_error"
import Link from "next/link"
import Blog from "./blog"
class Blogs extends Component{
  state={
    posts:null
  }
  static async getInitialProps(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()
    const statusCode=res.status>200?res.status:false
  /*componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>{
      this.setState({
        posts:data
      })
    })*/
    return {blogs:data,statusCode}
  }
  render(){
    const {blogs,statusCode}=this.props
    if(statusCode){
      return <Error statusCode={statusCode}/>
    }
    return(
      <Layout>
      <h1>Our Blogs</h1>
      {blogs?blogs.map(elem=>{
        return(
          <div>
              <Blog title={elem.title} body={elem.body}/>
              <Link href={`/blog?title=${elem.title}`}>
                Read more
              </Link>


          </div>
        )
      }):<p>...loading</p>}

      </Layout>
    )
  }
}
export default Blogs