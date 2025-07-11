import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedElement from '../components/AnimatedElement';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

  // Modified formatContent to use post.content
  const formatContent = (content: string) => {
    const parseInlineFormatting = (text: string) => {
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
      text = text.replace(/`(.*?)`/g, '<code className=\'bg-muted px-1 py-0.5 rounded text-sm\'>$1</code>');
      text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary underline" target="_blank" rel="noopener noreferrer">$1</a>');
      return text;
    };

    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold mt-8 mb-6 text-foreground">
            {paragraph.replace('# ', '')}
          </h1>
        );
      }
      if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
        const listItem = paragraph.replace(/^[-*] /, '');
        return (
          <li key={index} className="mb-2 text-muted-foreground ml-6 list-disc">
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(listItem) }} />
          </li>
        );
      }
      if (/^\d+\.\s/.test(paragraph)) {
        const listItem = paragraph.replace(/^\d+\.\s/, '');
        return (
          <li key={index} className="mb-2 text-muted-foreground ml-6 list-decimal">
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(listItem) }} />
          </li>
        );
      }
      if (paragraph.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
            <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(paragraph.replace('> ', '')) }} />
          </blockquote>
        );
      }
      if (paragraph.startsWith('```')) {
        return <div key={index} className="hidden"></div>;
      }
      if (paragraph.trim() === '') {
        return <br key={index} />;
      }
      return (
        <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: parseInlineFormatting(paragraph) }} />
        </p>
      );
    });
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
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{post.author_name}</span>
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
                <div className="text-lg leading-relaxed" style={{ fontSize: editorFontSize }}>
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
