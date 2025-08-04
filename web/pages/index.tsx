// web/pages/index.tsx

import { GetStaticProps, NextPage } from 'next'
import { sanityClient } from '../lib/sanity'

interface BuildLog {
  _id: string
  title: string
  date: string
  body: string
}

interface HomeProps {
  buildLogs: BuildLog[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const buildLogs: BuildLog[] = await sanityClient.fetch(`
    *[_type == "buildLog"] | order(date desc)[0..4]{
      _id,
      title,
      date,
      body
    }
  `)
  return { props: { buildLogs } }
}

const Home: NextPage<HomeProps> = ({ buildLogs }) => {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Recent Build Logs</h1>
      {buildLogs.map(log => (
        <article key={log._id} style={{ marginBottom: '2rem' }}>
          <time style={{ display: 'block', color: '#555' }}>
            {new Date(log.date).toLocaleString()}
          </time>
          <h2>{log.title}</h2>
          <p>{log.body}</p>
        </article>
      ))}
    </main>
  )
}

export default Home
