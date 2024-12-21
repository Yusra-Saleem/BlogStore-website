import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/lib/api' 

export default function BlogPage() {
  return (
    <div className="container bg-myBackground mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {posts.map((post) => (

            <Link 
              key={post.id} 
              href={`/post/${post.slug}`}
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-white hover:bg-transparent font-medium hover:text-myPrimary bg-mySecondary border border-myPrimary rounded-md px-2 py-[0.9px]">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-mySecondary/90 text-myPrimary transition-colors line-clamp-1">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full h-5 w-5"
                    />
                    <span className="ml-2">{post.author.name}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <time className="text-gray-600 ">{post.date}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
