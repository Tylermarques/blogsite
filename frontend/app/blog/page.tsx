import clientPromise from "../../lib/mongodb";
interface BlogPost {
    title: string
    content: string
    createdDate: string
    _id?: string
}
export default async function blogPage() {

    const client = await clientPromise
    const db = client.db('admin')
    const blogs = db.collection('blogs')
    const blogPosts = [(await blogs.findOne({}) as unknown as BlogPost)]
    return (
        <div className="mt-9 mx-auto max-w-2xl lg:px-8 relative text-6xl text-slate-100">
            Coming Soon!
        </div>
    )
}