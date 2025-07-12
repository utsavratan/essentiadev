import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedElement from '../components/AnimatedElement';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image: string | null;
  author_name: string;
  author_image: string | null;
  author_designation: string | null;
  tags: string[] | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const BlogPost = () => {
  const { id: slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchBlogPost(slug);
    }
  }, [slug]);

  const fetchBlogPost = async (postSlug: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', postSlug)
        .eq('published', true)
        .single();

      if (error) {
        console.error('Error fetching blog post:', error);
        setNotFound(true);
      } else {
        setPost(data);
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  // Only preview mode
  const [editorFontSize] = useState(18);

  // Enhanced formatContent to match reference image styling
  const formatContent = (content: string) => {
    const parseInlineFormatting = (text: string) => {
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
      text = text.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
      text = text.replace(/`(.*?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>');
      text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary underline font-medium hover:text-primary/80" target="_blank" rel="noopener noreferrer">$1</a>');
      return text;
    };

    const lines = content.split('\n');
    const result = [];
    let inList = false;
    let listItems = [];

    for (let i = 0; i < lines.length; i++) {
      const paragraph = lines[i];
      
      // Handle headers
      if (paragraph.startsWith('### ')) {
        if (inList) {
          result.push(
            <ul key={`list-${i}`} className="mb-6 space-y-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        result.push(
          <h3 key={i} className="text-xl font-bold mt-8 mb-4 text-foreground">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      else if (paragraph.startsWith('## ')) {
        if (inList) {
          result.push(
            <ul key={`list-${i}`} className="mb-6 space-y-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        result.push(
          <h2 key={i} className="text-2xl font-bold mt-10 mb-6 text-foreground">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      else if (paragraph.startsWith('# ')) {
        if (inList) {
          result.push(
            <ul key={`list-${i}`} className="mb-6 space-y-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        result.push(
          <h1 key={i} className="text-3xl font-bold mt-10 mb-8 text-foreground">
            {paragraph.replace('# ', '')}
          </h1>
        );
      }
      // Handle list items
      else if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
        const listItem = paragraph.replace(/^[-*] /, '');
        listItems.push(
          <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
            <span className="w-2 h-2 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(listItem) }} />
          </li>
        );
        inList = true;
      }
      else if (/^\d+\.\s/.test(paragraph)) {
        const listItem = paragraph.replace(/^\d+\.\s/, '');
        const number = paragraph.match(/^(\d+)\./)?.[1] || '1';
        listItems.push(
          <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
            <span className="w-6 h-6 bg-primary/10 text-primary rounded-full text-sm font-medium mr-3 flex-shrink-0 flex items-center justify-center mt-0.5">
              {number}
            </span>
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(listItem) }} />
          </li>
        );
        inList = true;
      }
      // Handle blockquotes
      else if (paragraph.startsWith('> ')) {
        if (inList) {
          result.push(
            <ul key={`list-${i}`} className="mb-6 space-y-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        result.push(
          <blockquote key={i} className="border-l-4 border-primary bg-primary/5 pl-6 py-4 my-6 italic text-muted-foreground rounded-r-lg">
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(paragraph.replace('> ', '')) }} />
          </blockquote>
        );
      }
      // Handle empty lines
      else if (paragraph.trim() === '') {
        if (inList) {
          result.push(
            <ul key={`list-${i}`} className="mb-6 space-y-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        result.push(<div key={i} className="mb-4"></div>);
      }
      // Handle regular paragraphs
      else if (paragraph.trim() !== '') {
        if (inList) {
          result.push(
            <ul key={`list-${i}`} className="mb-6 space-y-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        result.push(
          <p key={i} className="mb-6 text-muted-foreground leading-relaxed text-lg">
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(paragraph) }} />
          </p>
        );
      }
    }

    // Handle remaining list items
    if (inList && listItems.length > 0) {
      result.push(
        <ul key="final-list" className="mb-6 space-y-2">
          {listItems}
        </ul>
      );
    }

    return result;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-lg">Loading blog post...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="section bg-primary/5">
        <div className="container">
          <AnimatedElement animation="slide-up">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-muted-foreground mb-8">
                  {post.excerpt}
                </p>
              )}
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-3">
                  {post.author_image && (
                    <img 
                      src={post.author_image} 
                      alt={post.author_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <span className="font-medium block">{post.author_name}</span>
                    {post.author_designation && (
                      <span className="text-sm text-muted-foreground">{post.author_designation}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.created_at).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{calculateReadTime(post.content)}</span>
                </div>
              </div>
              
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.map((tag, index) => (
                    <span
                    key={index}
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors hover:bg-blue-800"
                    >
                    {tag}
                    </span>
                  ))}
                </div>
                )}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Image */}
      {post.cover_image && (
        <section className="section py-0">
          <div className="container">
            <AnimatedElement animation="slide-up" delay={0.2}>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={post.cover_image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedElement>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement animation="slide-up" delay={0.3}>
              <article className="prose prose-lg max-w-none">
                <div className="leading-relaxed">
                  {formatContent(post.content)}
                </div>
              </article>
            </AnimatedElement>

            {/* Back to Blog */}
            <AnimatedElement animation="slide-up" delay={0.4} className="mt-16 pt-8 border-t">
              <div className="text-center">
                <Link to="/blog">
                  <Button variant="outline" size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Posts
                  </Button>
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
