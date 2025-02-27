import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic';
import PostComp from '@/components/PostComp';
import PostRepositoryImpl from '@/repository/PostRepositoryImpl';
const PageHitsComp = dynamic(() => import('@/components/PageHitsComp'), { ssr: false });
import { Suspense } from 'react';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
 
	const post = await PostRepositoryImpl.getPost(decodeURIComponent(params.slug))
 
	const parentTitle = (await parent).title?.absolute;
	const title = `${post.postName.replaceAll('-', ' ')} - ${parentTitle}`;
	const previousImages = (await parent).openGraph?.images || []

	const description = '소프트웨어 개발자 정준영의 글입니다.';
	
  return {
    title: title,
		description: description,
		openGraph: {
			title: title,
			description: description,
			type: 'article',
			publishedTime: post.publishedAt.toISOString(),
			images: [...previousImages],
		}
  }
}
 

export default async function PostDetail({ params }: { params: { slug: string } }) {
	const post = await PostRepositoryImpl.getPost(decodeURIComponent(params.slug));
	

	return (
		<div>
			<Suspense fallback={<>Loading...</>}>
				<PostComp post={post} />
				<PageHitsComp />
			</Suspense>
		</div>
	);
}
