

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

// Mock database
export const posts :Blog[]= [
 {
  id: '1',
  title: 'Artificial Intelligence: Transforming the Modern World',
  slug: 'artificial-intelligence-transforming-modern-world',
  excerpt: 'An in-depth look at how artificial intelligence is shaping the future of industries and everyday life.',
  content: {
    p: 'Artificial Intelligence (AI) has become an integral part of our lives. From automating routine tasks to revolutionizing industries, AI is transforming the way we live, work, and interact.',
    h1: 'What is Artificial Intelligence?',
    p1: 'Artificial Intelligence refers to the simulation of human intelligence in machines. These machines are designed to think, learn, and make decisions. Key areas of AI include machine learning, natural language processing, and robotics.',
    list1: `
      <ul>
        <li><strong>Machine Learning:</strong> AI systems learn and improve from data without explicit programming.</li>
        <li><strong>Natural Language Processing:</strong> Enables machines to understand and respond to human language.</li>
        <li><strong>Computer Vision:</strong> Allows AI to interpret visual data from the world.</li>
        <li><strong>Robotics:</strong> The creation of intelligent robots capable of performing complex tasks.</li>
      </ul>
    `,
    h2: 'Applications of AI',
    p2: 'AI is influencing multiple industries, leading to innovation and efficiency. Here are some key applications:',
    list2: `
      <ul>
        <li><strong>Healthcare:</strong> AI helps in diagnosing diseases, developing drugs, and improving patient care.</li>
        <li><strong>Finance:</strong> AI-powered algorithms detect fraud, optimize portfolios, and provide personalized banking solutions.</li>
        <li><strong>Retail:</strong> Enhancing customer experience through personalized recommendations and inventory management.</li>
        <li><strong>Transportation:</strong> Self-driving cars and traffic management systems.</li>
      </ul>
    `,
    h3: 'Challenges in AI Development',
    p3: 'Despite its potential, AI faces significant challenges. These include ethical concerns, lack of data privacy, and high implementation costs. It is crucial to address these issues to ensure AI benefits society responsibly.'
  },
  image: '/tech1.png',
  date: '2024-11-20',
  author: {
    name: 'John Smith',
    avatar: '/writer/john-smith.png'
  },
  category: 'Technology',
  tags: ["DigitalWorld" ," Technology"],
  featured: true,
  popular: true
} ,
{
  id: '2',
  title: '5G Technology: Revolutionizing Connectivity',
  slug: '5g-technology-revolutionizing-connectivity',
  excerpt: '5G technology is set to redefine how we connect and communicate, enabling faster speeds and smarter systems.',
  content: {
    p: '5G is the fifth generation of wireless communication technology, offering unprecedented speed and connectivity. It is paving the way for a new era of innovation.',
    h1: 'What Makes 5G Unique?',
    p1: '5G provides faster download speeds, lower latency, and higher network capacity. These features make it ideal for supporting emerging technologies like IoT and augmented reality.',
    list1: `
      <ul>
        <li><strong>Speed:</strong> Up to 100 times faster than 4G.</li>
        <li><strong>Latency:</strong> Reduced lag for real-time communication.</li>
        <li><strong>Capacity:</strong> Supports a massive number of connected devices.</li>
      </ul>
    `,
    h2: 'Applications of 5G',
    p2: 'The introduction of 5G is opening doors to transformative applications in various fields:',
    list2: `
      <ul>
        <li><strong>Smart Cities:</strong> Enabling efficient traffic management and energy usage.</li>
        <li><strong>Healthcare:</strong> Facilitating remote surgeries and real-time health monitoring.</li>
        <li><strong>Entertainment:</strong> Enhanced streaming and immersive gaming experiences.</li>
        <li><strong>Industry:</strong> Automating manufacturing and logistics processes.</li>
      </ul>
    `,
    h3: 'Challenges in Adopting 5G',
    p3: 'While promising, 5G faces challenges like infrastructure costs, security concerns, and regulatory issues. Addressing these challenges is critical for global adoption.'
  },
  image: '/tech2.png',
  date: '2024-11-19',
  author: {
    name: 'Emily Smith',
    avatar: '/writer/john-smith.png'
  },
  category: 'Technology',
  tags: [],
  featured: true,
  popular: false
}
,
{
  id: '3',
  title: 'Cybersecurity in the Digital Age',
  slug: 'cybersecurity-in-the-digital-age',
  excerpt: 'Explore the importance of cybersecurity and the measures needed to safeguard digital assets in today’s connected world.',
  content: {
    p: 'With the rise of digital transformation, cybersecurity has become a critical concern for individuals and organizations. Cyber threats are evolving, making robust security measures more important than ever.',
    h1: 'Why Cybersecurity Matters',
    p1: 'Cybersecurity protects sensitive data, prevents financial losses, and ensures the reliability of systems. It involves various techniques to defend against cyberattacks, such as malware, phishing, and ransomware.',
    list1: `
      <ul>
        <li><strong>Data Protection:</strong> Safeguarding personal and organizational information.</li>
        <li><strong>Risk Mitigation:</strong> Reducing vulnerabilities and exposure to threats.</li>
        <li><strong>Business Continuity:</strong> Ensuring systems remain operational during attacks.</li>
      </ul>
    `,
    h2: 'Key Cybersecurity Measures',
    p2: 'Organizations and individuals can adopt several practices to enhance cybersecurity:',
    list2: `
      <ul>
        <li><strong>Strong Passwords:</strong> Use complex passwords and change them regularly.</li>
        <li><strong>Regular Updates:</strong> Keep software and systems updated to patch vulnerabilities.</li>
        <li><strong>Two-Factor Authentication:</strong> Add an extra layer of security.</li>
        <li><strong>Employee Training:</strong> Educate employees on recognizing phishing scams and safe practices.</li>
      </ul>
    `,
    h3: 'Future of Cybersecurity',
    p3: 'As cyber threats continue to evolve, the future of cybersecurity will rely on AI-driven threat detection, blockchain for secure transactions, and global collaboration to counteract sophisticated attacks.'
  },
  image: '/tech3.png',
  date: '2024-11-18',
  author: {
    name: 'Liam Brown',
    avatar: '/writer/john-smith.png'
  },
  category: 'Technology',
  tags: [],
  featured: false,
  popular: false
}
,
{
  id: '4',
  title: 'The Rise of Quantum Computing',
  slug: 'rise-of-quantum-computing',
  excerpt: 'Quantum computing is set to revolutionize technology by solving problems beyond the reach of traditional computers.',
  content: {
    p: 'Quantum computing is a revolutionary technology that leverages the principles of quantum mechanics to perform computations at unprecedented speeds. It has the potential to address complex problems that are beyond the capabilities of classical computers.',
    h1: 'Understanding Quantum Computing',
    p1: 'Quantum computers use quantum bits, or qubits, which can represent and process information in ways that classical bits cannot. This is achieved through quantum phenomena such as superposition and entanglement.',
    list1: `
      <ul>
        <li><strong>Superposition:</strong> Allows qubits to exist in multiple states simultaneously.</li>
        <li><strong>Entanglement:</strong> Qubits become interconnected, influencing each other instantly.</li>
        <li><strong>Quantum Gates:</strong> Operate on qubits to perform calculations.</li>
      </ul>
    `,
    h2: 'Applications of Quantum Computing',
    p2: 'Quantum computing is expected to transform fields such as cryptography, medicine, and artificial intelligence.',
    list2: `
      <ul>
        <li><strong>Cryptography:</strong> Breaking current encryption methods and developing quantum-secure algorithms.</li>
        <li><strong>Drug Discovery:</strong> Simulating molecular interactions to design better medicines.</li>
        <li><strong>Optimization:</strong> Solving complex logistical and operational problems.</li>
        <li><strong>Machine Learning:</strong> Accelerating the training of AI models.</li>
      </ul>
    `,
    h3: 'Challenges in Quantum Computing',
    p3: 'Despite its potential, quantum computing faces challenges such as maintaining qubit stability, error correction, and building scalable systems. Overcoming these hurdles will require significant research and innovation.'
  },
  image: '/tech4.png',
  date: '2024-11-20',
  author: {
    name: 'Sophia Carter',
    avatar: '/writer/john-smith.png'
  },
  category: 'Technology',
  tags: [],
  featured: true,
  popular: false
}
,{
  id: '5',
  title: 'Decluttering Your Space, Decluttering Your Mind',
  slug: 'decluttering-space-and-mind',
  excerpt: 'Your environment affects your mental health. Learn how organizing your space can lead to greater clarity and focus.',
  content: {
    p: 'The state of your physical environment directly impacts your mental clarity. A clutter-free space is essential for productivity and peace of mind.',
    h1: 'The Connection Between Clutter and Stress',
    p1: 'Research shows that cluttered spaces can increase cortisol levels, leading to stress and anxiety. Organizing your space creates a calming environment.',
    list1: `
      <ul>
        <li><strong>Visual Overload:</strong> Too much clutter overstimulates the brain.</li>
        <li><strong>Lost Time:</strong> Searching for misplaced items wastes hours.</li>
        <li><strong>Reduced Focus:</strong> Clutter disrupts concentration.</li>
      </ul>
    `,
    h2: 'How to Declutter Effectively',
    p2: 'Adopting a systematic approach can make decluttering manageable and effective:',
    list2: `
      <ul>
        <li><strong>The 20/20 Rule:</strong> Donate items that cost less than $20 and take less than 20 minutes to replace.</li>
        <li><strong>One Room at a Time:</strong> Focus on one area to avoid feeling overwhelmed.</li>
        <li><strong>Storage Solutions:</strong> Invest in bins, shelves, and labels for better organization.</li>
      </ul>
    `,
    h3: 'Sustaining a Clutter-Free Lifestyle',
    p3: 'Regular maintenance, mindfulness while shopping, and limiting possessions to essentials help maintain a clutter-free environment for the long term.'
  },
  image: '/lifestyle1.png',
  date: '2024-11-19',
  author: {
    name: 'James Taylor',
    avatar: '/writer/john-smith.png'
  },
  category: 'Lifestyle',
  tags: [],
  featured: false,
  popular: true
}

,{
  id: '6',
  title: 'The Art of Mindful Living',
  slug: 'art-of-mindful-living',
  excerpt: 'Mindfulness is the key to living a life full of presence and peace. Learn how to incorporate mindfulness into your daily routine.',
  content: {
    p: 'In today&#39;s fast-paced world, mindfulness offers a refreshing way to bring focus and calm into your life. It&#39;s about living in the moment and appreciating the now.',
    h1: 'What is Mindful Living?',
    p1: 'Mindful living is the practice of paying attention to your thoughts, emotions, and surroundings without judgment. It helps you break free from the cycle of stress and distractions.',
    list1: `
      <ul>
        <li><strong>Meditation:</strong> A cornerstone of mindfulness.</li>
        <li><strong>Deep Breathing:</strong> Reduces stress and improves focus.</li>
        <li><strong>Gratitude:</strong> Appreciating the small joys in life.</li>
      </ul>
    `,
    h2: 'Steps to Embrace Mindfulness',
    p2: 'You can cultivate mindfulness by making small but meaningful changes to your routine:',
    list2: `
      <ul>
        <li><strong>Morning Ritual:</strong> Start your day with intentional breathing or a short meditation.</li>
        <li><strong>Mindful Eating:</strong> Savor every bite, focusing on the taste and texture.</li>
        <li><strong>Digital Detox:</strong> Spend time away from screens daily.</li>
      </ul>
    `,
    h3: 'Benefits of Mindful Living',
    p3: 'Mindful living reduces stress, enhances emotional well-being, and improves physical health. It&#39;s a journey worth embarking on for a more peaceful and fulfilled life.'
  },
  image: '/lifestyle2.png',
  date: '2024-11-20',
  author: {
    name: 'Sophia Carter',
    avatar: '/writer/john-smith.png'
  },
  category: 'Lifestyle',
  tags: [],
  featured: true,
  popular: false
}
,
{
  id: '7',
  title: 'The Joy of Minimalism',
  slug: 'joy-of-minimalism',
  excerpt: 'Minimalism is more than a trend. It’s a lifestyle that fosters contentment and clarity by focusing on what truly matters.',
  content: {
    p: 'Minimalism is not about living with less; it’s about making room for more of what brings joy and purpose to your life.',
    h1: 'What is Minimalism?',
    p1: 'Minimalism is a lifestyle choice that prioritizes intentional living. It involves reducing distractions and focusing on the things that truly add value to your life.',
    list1: `
      <ul>
        <li><strong>Intentional Living:</strong> Aligning your possessions with your values.</li>
        <li><strong>Simplicity:</strong> Reducing unnecessary items and commitments.</li>
        <li><strong>Mindfulness:</strong> Being aware of how you spend your time and resources.</li>
      </ul>
    `,
    h2: 'How to Adopt Minimalism',
    p2: 'Start small and build habits that align with a minimalist lifestyle:',
    list2: `
      <ul>
        <li><strong>Capsule Wardrobe:</strong> Streamline your clothing to essentials.</li>
        <li><strong>Quality Over Quantity:</strong> Invest in durable and meaningful items.</li>
        <li><strong>Limit Digital Clutter:</strong> Organize and delete unnecessary files.</li>
      </ul>
    `,
    h3: 'Benefits of Minimalism',
    p3: 'Minimalism offers mental clarity, financial freedom, and a deeper sense of gratitude. It&#39;s a path to living a more intentional and fulfilling life.'
  },
  image: '/lifestyle-2.png',
  date: '2024-11-18',
  author: {
    name: 'Emma Wilson',
    avatar: '/writer/john-smith.png'
  },
  category: 'Lifestyle',
  tags: [],
  featured: true,
  popular: false
}
,
{
  id: '8',
  title: 'Blockchain Beyond Cryptocurrency',
  slug: 'blockchain-beyond-cryptocurrency',
  excerpt: 'Explore how blockchain technology is transforming industries beyond its origins in cryptocurrency.',
  content: {
    p: 'While blockchain is best known as the technology behind cryptocurrencies like Bitcoin, its potential extends far beyond digital currencies. It is reshaping industries by providing secure, transparent, and decentralized solutions.',
    h1: 'What is Blockchain?',
    p1: 'Blockchain is a distributed ledger technology where data is stored in blocks and linked in a chain. Each block is immutable, ensuring the integrity and security of the information.',
    list1: `
      <ul>
        <li><strong>Decentralization:</strong> Data is distributed across multiple nodes, reducing reliance on a central authority.</li>
        <li><strong>Transparency:</strong> Transactions are visible to all participants in the network.</li>
        <li><strong>Security:</strong> Cryptographic methods protect the data from unauthorized changes.</li>
      </ul>
    `,
    h2: 'Real-World Applications of Blockchain',
    p2: 'Blockchain is being adopted across various industries for innovative use cases:',
    list2: `
      <ul>
        <li><strong>Supply Chain:</strong> Ensuring product authenticity and improving traceability.</li>
        <li><strong>Healthcare:</strong> Securely storing and sharing patient records.</li>
        <li><strong>Voting Systems:</strong> Enhancing the transparency and security of elections.</li>
        <li><strong>Energy:</strong> Facilitating peer-to-peer energy trading.</li>
      </ul>
    `,
    h3: 'The Future of Blockchain',
    p3: 'As blockchain continues to evolve, it is likely to become a foundational technology in the digital economy. Innovations such as smart contracts, decentralized finance (DeFi), and Web3 are set to redefine how we interact with digital systems.'
  },
  image: '/blockchain.jpg',
  date: '2024-11-19',
  author: {
    name: 'James Taylor',
    avatar: '/writer/john-smith.png'
  },
  category: 'Technology',
  tags: [],
  featured: false,
  popular: true
}
,
{
  id: '9',
  title: 'The Internet of Things (IoT): Connecting the World',
  slug: 'internet-of-things-connecting-world',
  excerpt: 'Discover how IoT is creating a seamlessly connected world, driving innovation across industries.',
  content: {
    p: 'The Internet of Things (IoT) is a network of interconnected devices that communicate and exchange data with each other. This technology is revolutionizing how we interact with our surroundings.',
    h1: 'How Does IoT Work?',
    p1: 'IoT devices are embedded with sensors, software, and connectivity features. These devices collect and share data through the internet, enabling automation and remote monitoring.',
    list1: `
      <ul>
        <li><strong>Sensors:</strong> Collect data from the environment.</li>
        <li><strong>Connectivity:</strong> Enables communication between devices.</li>
        <li><strong>Data Processing:</strong> Analyzes and interprets the collected data.</li>
      </ul>
    `,
    h2: 'IoT Applications in Everyday Life',
    p2: 'IoT is enhancing various aspects of our daily lives and industries:',
    list2: `
      <ul>
        <li><strong>Smart Homes:</strong> Automating lighting, heating, and security systems.</li>
        <li><strong>Healthcare:</strong> Remote monitoring of patients and smart medical devices.</li>
        <li><strong>Agriculture:</strong> Optimizing irrigation and crop management.</li>
        <li><strong>Manufacturing:</strong> Predictive maintenance and improved efficiency.</li>
      </ul>
    `,
    h3: 'Challenges and Opportunities',
    p3: 'IoT faces challenges like data security, interoperability, and power consumption. However, advancements in AI and 5G are expected to address these issues and unlock new opportunities for IoT adoption.'
  },
  image: '/iot.jpg',
  date: '2024-11-18',
  author: {
    name: 'Emma Wilson',
    avatar: '/writer/john-smith.png'
  },
  category: 'Technology',
  tags: [],
  featured: true,
  popular: false
}


];




export async function getFeaturedPosts() {
  return posts.filter(post => post.featured);
}

export async function getPopularPosts() {
  return posts.filter(post => post.popular);
}

export async function getLatestPosts() {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6);
}

export async function getPostBySlug(slug: string) {
  return posts.find(post => post.slug === slug);
}

export async function getRelatedPosts(postId: string) {
  const post = posts.find(p => p.id === postId);
  if (!post) return [];
  return posts
    .filter(p => p.id !== postId && p.category === post.category)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
}

export async function getPostsByCategory(category: string) {
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}


export async function getAllCategories() {
  return Array.from(new Set(posts.map(post => post.category)));
}
export async function searchPosts(query: string) {
  const lowercaseQuery = query.toLowerCase();
  return posts.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.content.p.toLowerCase().includes(lowercaseQuery) ||
    post.content.h1.toLowerCase().includes(lowercaseQuery) ||
    post.content.p1.toLowerCase().includes(lowercaseQuery) ||
    post.content.list1.toLowerCase().includes(lowercaseQuery) ||
    post.content.h2.toLowerCase().includes(lowercaseQuery) ||
    post.content.p2.toLowerCase().includes(lowercaseQuery) ||
    post.content.list2.toLowerCase().includes(lowercaseQuery) ||
    post.content.h3.toLowerCase().includes(lowercaseQuery) ||
    post.content.p3.toLowerCase().includes(lowercaseQuery) ||
    post.category.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
