'use client'
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import PostInterface from "@/interface/postInterface";
import { useRouter } from "next/navigation";

const CardComponent = ({ post }: { post: PostInterface }) => {
    const router = useRouter();
    return (
        <Card
            isPressable
            onPress={() => { router.push(`/posts/${post.id}`) }}
            isHoverable
            className='m-1 h-52'
            key={post.id}
            shadow="sm"
        >
            <CardHeader className='flex gap-3 h-2/6'>
                <h2 className="text-sm mx-2">{post.id}</h2>
                <Divider orientation="vertical" className="mr-3" />
                <div className="text-left">
                    <h3>{post.title}</h3>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className="h-full w-full px-5 py-1 flex justify-center items-center text-justify">
                <p className="text-sm">{post.body}</p>
            </CardBody>
        </Card>
    );
};
export default CardComponent;