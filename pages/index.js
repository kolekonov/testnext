import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div> { post.name } </div>
            <div> { post.description } </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://www.alean.team-b.tk/server/test/page1.php')
  const posts = await res.json()


  if (!res.ok) {
    throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }

  return {
    props: {
      posts,
    },
    revalidate: 5,
  }
}