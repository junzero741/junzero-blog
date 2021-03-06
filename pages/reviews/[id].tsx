import Head from "next/head";
import Layout from "components/layout";
import { getAllPostIds, getPostData } from "lib/posts";
import Date from "components/date";
import { GetStaticPaths, GetStaticProps } from "next";
import PostLayout from "components/PostLayout";

export default function Review({ postData }: { postData: { title: string; date: string; contentHtml: string; id: string } }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<PostLayout>
				<h1>{postData.title}</h1>
				<br />
				<div className="date">
					<Date dateString={postData.date} />
				</div>
				<br />
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</PostLayout>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = () => {
	const paths = getAllPostIds("reviews");
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id as string, "reviews");
	return {
		props: {
			postData,
		},
	};
};
