import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { getFeaturedPosts, getPopularPosts } from '@/lib/api'


export default async function Home() {
  const recentPosts = await getPopularPosts() 
  const popularPosts = await getFeaturedPosts()

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-myPrimary via-myPrimary to-[#343a51] mx-auto flex items-center justify-center  md:h-[70vh] w-full">
      <section className="container   px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2  gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-heading tracking-tight lg:text-6xl">
              Discover Amazing Stories
            </h1>
            <p className="text-subheading text-lg">
              Explore the latest insights in technology, lifestyle, education, and more.
            </p>
            <Link href="/blog">
            <Button className="bg-heading border cursor-pointer hover:text-heading text-myPrimary duration-700">
              Get Started
            </Button>
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {recentPosts.slice(0, 2).map((post) => (
              <Card key={post.id} className="overflow-hidden cursor-pointer hover:shadow-md hover:bg-gray-100 shadow-current hover:shadow-gray-700 transition-shadow">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 hover:scale-105 duration-500 object-cover"
                />
                <CardContent className="p-4">
                  <Link href={`/post/${post.slug}`} className="hover:text-slate-600">
                    <h3 className="font-semibold text-xl mb-2 line-clamp-1">{post.title}</h3>
                  </Link>
                  <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt.substring(0, 100)}...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
      {/* Popular Articles Section */}
      <section className="bg-myBackground py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-myPrimary capitalize">Our most popular articles</h2>
            <Link href={'/blog'} className="cursor-pointer">
            <Button variant="outline" className="text-mySecondary border-mySecondary hover:bg-myPrimary hover:text-white">
              View All Articles
            </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
            {popularPosts.slice(3,9).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl cursor-pointer duration-500 bg-white transition-shadow">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover duration-500 hover:scale-105"
                />
                <CardContent className="p-4">
                  <Link href={`/post/${post.slug}`} className=" hover:text-mybutton duration-500">
                    <h3 className="font-semibold text-lg line-clamp-1">{post.title}</h3>
                  </Link>
                  <p className="text-sm bg-mySecondary w-[20%] text-center py-[0.9px] border hover:text-mySecondary border-mySecondary hover:bg-accent/50 duration-500 rounded-md px-2 text-white mt-2">{post.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <div className=" bg-myBackground w-full">
      <section className="container  mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl text-myPrimary capitalize font-bold mb-8">Our latest blog</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-myPrimary overflow-hidden border cursor-pointer shadow-xl hover:shadow-2xl duration-500 border-white">
            <Image
              src={recentPosts[2].image}
              alt={recentPosts[2].title}
              width={800}
              height={400}
              className="w-full h-[400px] hover:scale-105 duration-500 object-cover"
            />
            <CardContent className="p-6 border-t border-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-400">{recentPosts[2].date}</span>
                <span className="text-sm text-mySecondary bg-white hover:bg-transparent border border-white duration-500 px-2 py[1px] rounded-md font-medium hover:text-white">{recentPosts[2].category}</span>
              </div>
              <Link href={`/post/${recentPosts[2].slug}`} className="cursor-pointer">
                <h3 className="text-2xl text-white hover:text-gray-600 duration-500 font-bold mb-4 line-clamp-1">{recentPosts[2].title}</h3>
              </Link>
              <p className="text-gray-300 line-clamp-2">{recentPosts[2].excerpt}</p>
            </CardContent>
          </Card>
          <div className="space-y-6">
            {recentPosts.slice(1, 5).map((post) => (
              <Card key={post.id} className="flex gap-4 overflow-hidden border border-white duration-500 shadow-xl hover:shadow-2xl bg-myPrimary cursor-pointer">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="w-24 h-24  border-r border-white object-cover"
                />
                <CardContent className="py-4 ">
                  <Link href={`/post/${post.slug}`} className="cursor-pointer">
                    <h3 className="font-semibold text-white hover:text-gray-500 duration-500 mb-2 line-clamp-1">{post.title}</h3>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="bg-white text-myPrimary border border-white hover:bg-transparent rounded-md duration-500 py-[0.8px] hover:text-white px-3">{post.category}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* Newsletter Section */}
      <section className="bg-gray-100 text-black py-10 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl  capitalize text-myPrimary font-bold mb-4">Subscribe for updates via newsletter</h2>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Enter email*"
              className=" text-myPrimary focus:outline-myPrimary border outline outline-1 outline-myPrimary"
            />
            <Button className="bg-myPrimary border border-myPrimary duration-500 hover:bg-mybutton">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}