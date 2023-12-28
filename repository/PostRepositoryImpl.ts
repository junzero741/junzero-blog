import Post from '@/domain/Post';
import PostRepository from './PostRepository';
import awsS3Utils from '@/utils/awsS3Utils';

class PostRepositoryImpl implements PostRepository {
	store = awsS3Utils;
	postExtension = '.md';

	async getPost(postName: string): Promise<Post> {
		const response = await this.store.getResource(`posts/${postName}${this.postExtension}`);
		if (response) {
			const postContent = await response?.Body?.transformToString();
			return { postName, postContent: postContent || '' };
		} else {
			return { postName: `posts/${postName}${this.postExtension}`, postContent: 'no path' };
		}
	}

	async getPosts() {
		const response = await this.store.getResources('posts/');
		if (response?.Contents) {
			return {
				posts: response.Contents.map((resource) => ({
					lastModifed: resource.LastModified!,
					title: resource.Key?.replace(`${this.postExtension}`, '')!,
				})).sort((a, b) => b.lastModifed.getTime() - a.lastModifed.getTime()),
				totalCount: response.KeyCount!,
			};
		}
	}
}

const instance = new PostRepositoryImpl();
export default instance;
