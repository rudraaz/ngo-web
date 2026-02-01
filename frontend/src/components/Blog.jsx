import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const posts = [
    {
      id: 1,
      title: 'How Education is Transforming Rural Communities',
      excerpt: 'Discover how our education initiatives are creating lasting change in underserved areas, empowering the next generation of leaders.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Education',
    },
    {
      id: 2,
      title: 'Our Healthcare Camps Reached 10,000 Patients',
      excerpt: 'A milestone achievement: Our medical teams provided free healthcare to over 10,000 patients across 50 villages this year.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop&q=80',
      author: 'Dr. Priya Sharma',
      date: 'December 10, 2024',
      readTime: '4 min read',
      category: 'Healthcare',
    },
    {
      id: 3,
      title: 'Volunteer Spotlight: Stories That Inspire',
      excerpt: 'Meet the incredible volunteers who dedicate their time and energy to making our mission possible. Their stories will inspire you.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80',
      author: 'Aisha Patel',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Stories',
    },
    {
      id: 4,
      title: 'Sustainable Development: Building for the Future',
      excerpt: 'Learn about our environmental initiatives and how we\'re working towards sustainable development goals in communities worldwide.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
      author: 'Michael Chen',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'Environment',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section data-testid="blog-section" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#0056D2]/10 text-[#0056D2] rounded-full text-sm font-semibold mb-4">
            Our Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest initiatives, success stories, and insights 
            from the field.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Featured Post */}
          <motion.article
            variants={itemVariants}
            className="md:row-span-2 blog-card group"
          >
            <div className="img-zoom h-64 md:h-80">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-[#0056D2]/10 text-[#0056D2] rounded-full text-xs font-semibold mb-3">
                {posts[0].category}
              </span>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0056D2] transition-colors">
                {posts[0].title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {posts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </span>
                </div>
                <Link
                  to="/blog"
                  data-testid="read-more-btn-1"
                  className="text-[#0056D2] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Other Posts */}
          {posts.slice(1).map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="blog-card group flex flex-col sm:flex-row"
            >
              <div className="img-zoom w-full sm:w-40 h-48 sm:h-auto shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#FF9F1C]/10 text-[#FF9F1C] rounded-full text-xs font-semibold mb-2 w-fit">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0056D2] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            data-testid="view-all-posts-btn"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
