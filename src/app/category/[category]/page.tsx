import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostsByCategory } from '@/lib/api'

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const posts = await getPostsByCategory(params.category)

  if (!posts.length) {
    notFound()
  }

  return (
    <div className="container mx-auto bg-myBackground px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Showing posts in {decodeURIComponent(params.category)}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h2 className="text-xl font-semibold mb-2 group-hover:text-mySecondary text-myPrimary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="flex items-center">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full h-4 w-4"
                    />
                    <span className="ml-2">{post.author.name}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <time>{post.date}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}