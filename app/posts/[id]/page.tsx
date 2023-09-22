import CardComponent from "@/components/CardComponent";
import { Divider } from "@nextui-org/divider";
import PotsPage from "../page";
import { Suspense } from "react";
import LoadingPage from "@/app/loading";

const loadPost = async (id: string) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const posts = await data.json();
    return (posts);
}

const DynamicPosts = async ({ params }: { params: { id: string } }) => {
    const post = await loadPost(params.id);
    return (
        <section className="h-full w-full">
            <div className="m-auto  flex justify-center py-3">
                <CardComponent post={post} />
            </div>
            <Divider />
            <div>
                <h2 className="p-6 text-2xl">Otras publicaciones</h2>
                <Suspense fallback={<LoadingPage />}>
                    <PotsPage />
                </Suspense>
            </div>
        </section>
    );
};

export default DynamicPosts