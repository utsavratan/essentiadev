-- Add author_image column to blog_posts table
ALTER TABLE public.blog_posts 
ADD COLUMN author_image TEXT;