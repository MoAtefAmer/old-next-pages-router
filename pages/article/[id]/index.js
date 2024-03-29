import {useRouter} from 'next/router'
import Link from "next/link"
import {server} from '../../../config'
import Meta from '../../../components/Meta.js'

function article({article}) {
    // const router = useRouter()
    // const {id} = router.query
    return ( <div>
        <Meta title = {article.title} description={article.excerpt} />
        <h1> This is an article {article.id}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/"> 🔙 Back</Link>

    </div> );
}



export const getStaticProps = async (context) =>{
    console.log('context :>> ', context);
    console.log('context.params :>> ', context.params);
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props:{
            article
        }
    }
}

export const getStaticPaths = async() =>{
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map((article)=>article.id)
    const paths = ids.map((id)=>({params:{id:id.toString()}}))

    return {
        paths,
        fallback:false
    }
}
// export const getStaticProps = async (context) =>{
//     console.log('context :>> ', context);
//     console.log('context.params :>> ', context.params);
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props:{
//             article
//         }
//     }
// }

// export const getStaticPaths = async() =>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()
//     const ids = articles.map((article)=>article.id)
//     const paths = ids.map((id)=>({params:{id:id.toString()}}))

//     return {
//         paths,
//         fallback:false
//     }
// }

export default article;