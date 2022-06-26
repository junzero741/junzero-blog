import { Fail } from 'utils/types'
import Link from 'next/link'
import Layout, { siteTitle } from 'components/layout'
import Head from 'next/head'
import SiteMap from 'pages/sitemap.xml'
import NavBar from 'components/NavBar'
import { Introduce } from 'pages'
import { BASE_API_URL } from 'utils/vars'

// Define the component props
interface IndexProps {
  fails: Array<Fail>
}

// Define the page component
export default function FailBoardIndex(props: IndexProps) {
  const { fails } = props

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <SiteMap />
      </Head>
      <Introduce>
        <p>사적인 경험과 공적인 지식들을 공유합니다.</p>
      </Introduce>

      <div>
        <NavBar currentPageId="fails" />
        <div>
          <h1>My Fail List</h1>
          <h2>Click On Title to see it individually</h2>
          {fails.map((t) => (
            <div key={t._id}>
              <Link href={`/api/fails/${t._id}`}>
                <h3 style={{ cursor: 'pointer' }}>{t.summary}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// GET PROPS FOR SERVER SIDE RENDERING
export async function getServerSideProps() {
  const res = await fetch((BASE_API_URL + '/fails') as string)
  const fails = await res.json()

  // return props
  return {
    props: { fails },
  }
}
