import React ,{Component} from "react"
import fetch from "isomorphic-unfetch"
import Layout from "../components/Layout"

class Blogs extends Component{
  state={
    posts:null
  }
  static async getInitialProps(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()
  /*componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>{
      this.setState({
        posts:data
      })
    })*/
    return {blogs:data}
  }
  render(){
    const {blogs}=this.props
    return(
      <Layout>
      <h1>Our Blogs</h1>
      {blogs?blogs.map(elem=>{
        return(
          <div>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>


          </div>
        )
      }):<p>...loading</p>}

      </Layout>
    )
  }
}
export default Blogs