'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { searchPosts } from "@/lib/api" // Import the search function

interface Blog{
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content:{
    p:string;
    h1:string;
    p1:string;
    list1 :string;
    h2:string;
    p2:string;
    list2 :string;
    h3:string;
    p3:string;
  }
  image : string;
  date: string;
  author:{
    name:string;
    avatar:string;
  }
  category:string;
  tags:string[];
  featured:boolean;
  popular:boolean;
}

const categories = [
  { name: 'Technology', href: '/category/technology' },
  { name: 'Food', href: '/category/food' },
  { name: 'Travel', href: '/category/travel' },
  { name: 'Education', href: '/category/education' },
  { name: 'Lifestyle', href: '/category/lifestyle' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<Blog[]>([])  

  // Effect hook to handle search logic
  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFilteredPosts = async () => {
        const posts = await searchPosts(searchQuery);  
        setFilteredPosts(posts);  
      };
      fetchFilteredPosts();
    } else {
      setFilteredPosts([]);  
    }
  }, [searchQuery]);

  return (
    <>
    <header className="border-b bg-myPrimary text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            BlogStore
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 font-medium hover:text-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='bg-transparent text-base hover:bg-transparent'>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-myText text-white">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link
                            href={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:bg-myText hover:font-bold text-lg hover:text-white hover:underline"
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2  font-medium hover:text-accent/50">
                      Blogs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 font-medium hover:text-accent/50">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 font-medium hover:text-accent/50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div>
          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2">
            <input
              type="search"
              placeholder="Search posts..."
              className="px-4 py-2 border font-medium text-white bg-myPrimary rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
        
            <Button variant="ghost" size="icon" className=" border border-white hover:bg-transparent bg-white text-myPrimary hover:text-white">
              <Search className="h-4 w-4" />
            </Button>
            
        {/* Display filtered posts (optional, for demonstration purposes) */}
        {searchQuery && (
          <div className="absolute top-[75px] w-64 py-5 px-4 bg-white border border-myPrimary rounded-xl">
            <h3 className="text-lg font-bold text-mySecondary">Search Results:</h3>
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/post/${post.slug}`} className="text-myPrimary hover:text-mySecondary font-semibold hover:underline">
                   {`  •  ${post.title}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block py-1 font-medium hover:text-accent/50">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block py-1 font-medium hover:text-accent/50"
              >
                {category.name}
              </Link>
            ))}

            <Link href="/blog" className="block py-1 font-medium hover:text-accent/50">
              All Blogs
            </Link>

            <Link href="/about" className="block py-1 font-medium hover:text-accent/50">
              About
            </Link>
            <Link href="/contact" className="block py-1 font-medium hover:text-accent/50">
              Contact
            </Link>
            <div>
            <div className="flex items-center gap-2 pt-2">
              <input
                type="search"
                placeholder="Search posts..."
                className="flex-1 px-4 py-2 border font-medium text-white bg-myPrimary rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
              />
              <Button variant="ghost" size="icon" className="border border-white hover:bg-accent text-white">
                <Search className="h-4 w-4" />
              </Button>
              </div>
              {searchQuery && (
                <div className="flex justify-center">
          <div className="  w-full my-2  py-5 px-4 bg-myBackground border border-myPrimary rounded-xl">
            <h3 className="text-lg font-bold text-mySecondary">Search Results:</h3>
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/post/${post.slug}`} className="text-myPrimary hover:text-mySecondary font-semibold hover:underline">
                   {`  •  ${post.title}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
        )}
            </div>
            
          </div>
        )}

      </div>
    
    </header>
    
    </>
  )
}
