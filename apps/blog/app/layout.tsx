import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Link from 'next/link';
import { DOMAIN } from '@/utils/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL(DOMAIN.origin),
	title: '정준영',
	description: '개발자 정준영의 기록',
	openGraph: {
		type: "website",
		url: "https://www.junyoung.site/",
		title: "정준영",
		description: "개발자 정준영의 기록",
		siteName: "정준영",
		images: [{
			url: "https://s3.ap-northeast-2.amazonaws.com/blog.resource/images/blog_thumb_002.png",
		}],
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}>
				<div className='max-w-2xl mx-auto py-10 px-4'>
					<header className='relative z-10'>
						<div className='flex items-center justify-between'>
							<div>
								<Link href='/'>
									<h1 className='font-bold text-xl'>정준영</h1>
								</Link>
								<span className='text-sm text-gray-500'>Software Engineer</span>
							</div>
							<nav className='ml-auto text-sm font-medium space-x-6'>
								<Link href='/posts'>Posts</Link>
								<Link href='/about'>About</Link>
								<Link href='/laboratory'>Laboratory</Link>
							</nav>
						</div>
					</header>
					<main className='py-5'>{children}</main>
				</div>
			</body>
		</html>
	);
}
