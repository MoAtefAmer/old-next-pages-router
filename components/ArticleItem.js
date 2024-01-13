import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

function ArticleItem({ article }) {
  return (
    <Link href={`/article/${article.id}`} className={articleStyles.card}>
   
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
     
    </Link>
  )
}

export default ArticleItem