import clientPromise from '../lib/mongodb'




export default async function Home() {



    return (

        <div className="mt-9 mx-auto max-w-4xl lg:px-8 relative text-2xl">
            <div className="pb-2">
                <h1 className="text-xl text-crayola-500 pb-5"> Hi, I'm </h1>
                <h1 className="text-8xl md:text-6xl font-bold text-cultured-100">Tyler Marques</h1>
            </div>


            <h1 className="text-8xl md:text-2xl text-slate-50">Building Data-backed solutions</h1>


            {/*TODO Add some sort of animation for the above */}
            <br/>
            <p className="text-gray-400">
                I wear many hats, but the goal is always the same. I love solving problems. I'm
            </p>

        </div>

    )
}
