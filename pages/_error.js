import Layout from "../components/Layout"

export default ({statusCode})=>{
    return(
        <Layout>
            {statusCode?`مش قادر احمل البيانات ${statusCode}`:<p>اللينك غلط يرقولة</p>}
            <img src="https://1.bp.blogspot.com/-lRyaizqCwgQ/XgE4fkAnIGI/AAAAAAAAAaA/tInivWqWo_kLJB4Bd0ER9-JvMQXwdWTNgCLcBGAsYHQ/s1600/FB_IMG_15771375329976253.jpg" alt=""/>

        </Layout>
    )
}