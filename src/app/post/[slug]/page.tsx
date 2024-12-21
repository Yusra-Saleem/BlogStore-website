import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/api'
import Comments from '@/components/CommentSection'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-base text-white hover:text-myPrimary bg-myPrimary hover:bg-transparent px-3 py-1 border border-myPrimary rounded-xl font-semibold mb-6"
        >
          ← Back to Blogs
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl capitalize text-myPrimary font-bold mb-4">{post.title}</h1>

          <div className="flex items-center space-x-4 mb-8 text-gray-600">
            <div className="flex items-center">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full h-10 w-10"
              />
              <span className="ml-2">{post.author.name}</span>
            </div>
            <span>•</span>
            <time>{post.date}</time>
            <span>•</span>
            <Link href={`/category/${post.category.toLowerCase()}`} className="text-white bg-mySecondary border border-mySecondary hover:text-myPrimary hover:bg-transparent rounded-md px-3 ">
              {post.category}
            </Link>
          </div>

          <div className="mb-8">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="rounded-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none text-lg">
            <p className="text-gray-800">{post.content.p}</p>
            <h1 className="text-myPrimary font-bold mt-5">{post.content.h1}</h1>
            <p className="text-gray-800">{post.content.p1}</p>
            <div
              className="text-gray-700 mt-3"
              dangerouslySetInnerHTML={{ __html: post.content.list1 }}
            />
            <h2 className="text-myPrimary font-bold mt-6">{post.content.h2}</h2>
            <p className="text-gray-800">{post.content.p2}</p>
            <div
              className="text-gray-700 mt-3"
              dangerouslySetInnerHTML={{ __html: post.content.list2 }}
            />
            <h3 className="text-myPrimary font-bold mt-6">{post.content.h3}</h3>
            <p className="text-gray-800">{post.content.p3}</p>
          </div>


          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-myBackground text-gray-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        <Comments />
      </div>
    </div>
  )
}
