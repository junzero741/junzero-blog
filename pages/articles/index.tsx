import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, {siteTitle} from "components/layout";
import utilStyles from "styles/utils.module.css";
import { getSortedPostsData } from "lib/posts";
import Date from "components/date";
import SiteMap from "pages/sitemap.xml";
import NavBar from "components/NavBar";

// Static Generation
export const getStaticProps: GetStaticProps = async context => {
		const staticGeneratedArticles = getSortedPostsData("articles");
		return {
			props: {
				staticGeneratedArticles,
			},
		};
}


export default function ArticlesPage({ staticGeneratedArticles } : {staticGeneratedArticles : { date: string, title: string, id: string}[]}) {

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
				<SiteMap />
			</Head>
			<section className={utilStyles.introduce}>
				<p>사적인 경험과 공적인 지식들을 공유합니다.</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<NavBar currentPageId="articles" />
				<ul className={utilStyles.list}>
					{staticGeneratedArticles.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/articles/${id}`}><a>{title}</a></Link>							
							<br />
							<small className={utilStyles.lightText}><Date dateString={date} /></small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
