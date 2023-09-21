'use client'
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import PostInterface from "@/interface/postInterface";

const CardComponent = ({ post }: { post: PostInterface }) => {
    return (
        <Card
            isPressable
            className='m-1'
            key={post.id}
        >
            <CardHeader className='flex gap-3 h-2/6'>
                <h2>{post.id}</h2>
                <div>
                    <h3>{post.title}</h3>
                </div>
            </CardHeader>
            <Divider />
            <CardBody className="h-full w-full px-3 py-1 sct">
                <p>{post.body}</p>
            </CardBody>
        </Card>
    )
}

export default CardComponent