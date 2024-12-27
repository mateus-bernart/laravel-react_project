import { Head, Link, usePage } from "@inertiajs/react";
import LinkPagination from "../Components/LinkPagination";
import { useState } from "react";

export default function Home({ posts }) {
    const { flash } = usePage().props;

    const [flashMsg, setFlashMsg] = useState(flash.message || flash.success);

    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    return (
        <>
            <Head title="Home" />

            {/* Title */}
            <h1 className="title">Hello</h1>

            {/* Flash Message */}
            {flashMsg && (
                <div
                    className={`absolute top-24  right-6 ${flash.message ? `bg-rose-500` : `bg-green-500`}  p-2 rounded-md shadow-lg text-sm text-white`}
                >
                    {flashMsg}
                </div>
            )}

            {/* Posts data */}
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
                        <Link
                            className="text-link"
                            href={route("posts.show", post)}
                        >
                            Read more...
                        </Link>
                    </div>
                ))}
            </div>

            <LinkPagination posts={posts} />
        </>
    );
}
