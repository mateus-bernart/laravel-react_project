import { Link } from "@inertiajs/react";
import LinkPagination from "../Components/LinkPagination";

export default function Home({ posts }) {
    return (
        <>
            <h1 className="title">Hello</h1>
            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="txt-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>

            <LinkPagination posts={posts} />
        </>
    );
}
