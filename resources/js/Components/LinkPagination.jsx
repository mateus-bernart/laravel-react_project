import { Link } from "@inertiajs/react";

export default function LinkPagination({ posts }) {
    return (
        <div>
            {posts.links.map((link) =>
                link.url ? (
                    <Link
                        key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""}`}
                    />
                ) : (
                    <span
                        key={link.label}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={"p-1 mx-1 text-slate-300 "}
                    ></span>
                ),
            )}
        </div>
    );
}
