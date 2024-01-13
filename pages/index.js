
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Layout.module.css'
import ArticleList from '../components/ArticleList'
import {server} from '../config'

const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {
  console.log(articles);
  return (
    <>
 
  <ArticleList articles={articles}/>
    </>
  )
}

export const getStaticProps = (async (context) => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return { props: { articles } }
}) 


// export const getStaticProps = (async (context) => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()
//   return { props: { articles } }
// }) 