import { PostMetaV2 } from "@/domain/PostMeta";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function PostMetaListCompV2({ posts }: { posts: PostMetaV2[] }) {
  return (
    <div className='flex flex-col'>
            {posts.map((post, idx) => (
              <PostMetaListItemComp key={post.id} post={post} isLast={idx === posts.length - 1} />
            ))}
    </div>
  );
}

function PostMetaListItemComp({ post, isLast }: { post: PostMetaV2, isLast: boolean }) {
  return (
    <Link href={`./posts/${post.id}`} className={
      twMerge(
        'font-semibold text-lg py-8 hover:text-gray-500',
        !isLast && 'border-b border-black'
        )}>
          <div>{post.title}</div>
          <div className={'text-sm text-gray-500'}>작성일 : {new Date(post.created_at).toLocaleDateString()}</div>
    </Link>
  );
}