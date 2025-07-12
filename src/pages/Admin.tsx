import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Edit, Plus, Eye } from 'lucide-react';
import RichTextEditor from '@/components/RichTextEditor';
import ContentPreview from '@/components/ContentPreview';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
}

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

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    excerpt: '',
    cover_image: '',
    author_name: 'Admin',
    author_image: '',
    author_designation: 'Admin',
    tags: [] as string[],
    published: true
  });
  const [tagInput, setTagInput] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isAuthenticated) {
      fetchContactMessages();
      fetchBlogPosts();
      setupRealtimeSubscription();
    }
  }, [isAuthenticated]);

  const setupRealtimeSubscription = () => {
    const channel = supabase
      .channel('contact-messages-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'contact_messages'
        },
        (payload) => {
          setContactMessages(prev => [payload.new as ContactMessage, ...prev]);
          toast({
            title: "New Contact Message",
            description: `New message from ${(payload.new as ContactMessage).name}`,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'essentia') {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };

  const fetchContactMessages = async () => {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch contact messages",
        variant: "destructive",
      });
    } else {
      setContactMessages(data || []);
    }
  };

  const fetchBlogPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blog posts",
        variant: "destructive",
      });
    } else {
      setBlogPosts(data || []);
    }
  };

  const markAsRead = async (id: string) => {
    const { error } = await supabase
      .from('contact_messages')
      .update({ read: true })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to mark message as read",
        variant: "destructive",
      });
    } else {
      setContactMessages(prev =>
        prev.map(msg => msg.id === id ? { ...msg, read: true } : msg)
      );
    }
  };

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = createSlug(newPost.title);
    
    const { error } = await supabase
      .from('blog_posts')
      .insert([{ ...newPost, slug }]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      setNewPost({
        title: '',
        content: '',
        excerpt: '',
        cover_image: '',
        author_name: 'Admin',
        author_image: '',
        author_designation: 'Admin',
        tags: [],
        published: true
      });
      setTagInput('');
      fetchBlogPosts();
    }
  };

  const handleUpdatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    const slug = createSlug(editingPost.title);
    
    const { error } = await supabase
      .from('blog_posts')
      .update({ ...editingPost, slug })
      .eq('id', editingPost.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update blog post",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Blog post updated successfully",
      });
      setEditingPost(null);
      fetchBlogPosts();
    }
  };

  const handleDeletePost = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete blog post",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Blog post deleted successfully",
        });
        fetchBlogPosts();
      }
    }
  };

  const addTag = (tag: string) => {
    if (tag.trim() && tag.length > 0) {
      const newTag = tag.trim();
      if (editingPost) {
        const currentTags = editingPost.tags || [];
        if (!currentTags.includes(newTag)) {
          setEditingPost({...editingPost, tags: [...currentTags, newTag]});
        }
      } else {
        if (!newPost.tags.includes(newTag)) {
          setNewPost({...newPost, tags: [...newPost.tags, newTag]});
        }
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    if (editingPost) {
      const currentTags = editingPost.tags || [];
      setEditingPost({...editingPost, tags: currentTags.filter(tag => tag !== tagToRemove)});
    } else {
      setNewPost({...newPost, tags: newPost.tags.filter(tag => tag !== tagToRemove)});
    }
  };

  const handleTagInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(tagInput);
      setTagInput('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter password to access admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>

        <Tabs defaultValue="messages" className="space-y-6">
          <TabsList>
            <TabsTrigger value="messages">Contact Messages</TabsTrigger>
            <TabsTrigger value="blogs">Blog Management</TabsTrigger>
          </TabsList>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages ({contactMessages.length})</CardTitle>
                <CardDescription>Messages received through the contact form</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactMessages.map((message) => (
                      <TableRow key={message.id}>
                        <TableCell className="font-medium">{message.name}</TableCell>
                        <TableCell>{message.email}</TableCell>
                        <TableCell className="max-w-xs truncate">{message.message}</TableCell>
                        <TableCell>{new Date(message.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge variant={message.read ? "secondary" : "default"}>
                            {message.read ? "Read" : "Unread"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {!message.read && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => markAsRead(message.id)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blogs">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={editingPost ? handleUpdatePost : handleCreatePost} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={editingPost ? editingPost.title : newPost.title}
                        onChange={(e) => editingPost 
                          ? setEditingPost({...editingPost, title: e.target.value})
                          : setNewPost({...newPost, title: e.target.value})
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Input
                        id="excerpt"
                        value={editingPost ? editingPost.excerpt || '' : newPost.excerpt}
                        onChange={(e) => editingPost 
                          ? setEditingPost({...editingPost, excerpt: e.target.value})
                          : setNewPost({...newPost, excerpt: e.target.value})
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="cover_image">Cover Image URL</Label>
                      <Input
                        id="cover_image"
                        value={editingPost ? editingPost.cover_image || '' : newPost.cover_image}
                        onChange={(e) => editingPost 
                          ? setEditingPost({...editingPost, cover_image: e.target.value})
                          : setNewPost({...newPost, cover_image: e.target.value})
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="author_name">Author Name</Label>
                      <Input
                        id="author_name"
                        value={editingPost ? editingPost.author_name : newPost.author_name}
                        onChange={(e) => editingPost 
                          ? setEditingPost({...editingPost, author_name: e.target.value})
                          : setNewPost({...newPost, author_name: e.target.value})
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="author_image">Author Image URL</Label>
                      <Input
                        id="author_image"
                        value={editingPost ? editingPost.author_image || '' : newPost.author_image}
                        onChange={(e) => editingPost 
                          ? setEditingPost({...editingPost, author_image: e.target.value})
                          : setNewPost({...newPost, author_image: e.target.value})
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="author_designation">Author Designation</Label>
                      <Input
                        id="author_designation"
                        value={editingPost ? editingPost.author_designation || '' : newPost.author_designation}
                        onChange={(e) => editingPost 
                          ? setEditingPost({...editingPost, author_designation: e.target.value})
                          : setNewPost({...newPost, author_designation: e.target.value})
                        }
                        placeholder="e.g., Software Engineer, CTO, etc."
                      />
                    </div>
                    <div>
                      <RichTextEditor
                        label="Content"
                        value={editingPost ? editingPost.content : newPost.content}
                        onChange={(content) => editingPost 
                          ? setEditingPost({...editingPost, content})
                          : setNewPost({...newPost, content})
                        }
                      />
                    </div>
                    <div>
                      <Label>Tags</Label>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Input
                            placeholder="Add tags (press Enter)"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyPress={handleTagInputKeyPress}
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => {
                              addTag(tagInput);
                              setTagInput('');
                            }}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {(editingPost ? editingPost.tags || [] : newPost.tags).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground" onClick={() => removeTag(tag)}>
                              {tag} ×
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    {(editingPost ? editingPost.content : newPost.content) && (
                      <div>
                        <Label>Content Preview</Label>
                        <div className="border rounded-md p-4 bg-muted/20">
                          <ContentPreview content={editingPost ? editingPost.content : newPost.content} />
                        </div>
                      </div>
                    )}
                    <div className="flex gap-4">
                      <Button type="submit">
                        {editingPost ? 'Update Post' : 'Create Post'}
                      </Button>
                      {editingPost && (
                        <Button type="button" variant="outline" onClick={() => setEditingPost(null)}>
                          Cancel
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Existing Blog Posts ({blogPosts.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Tags</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogPosts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell className="font-medium">{post.title}</TableCell>
                          <TableCell>{post.author_name}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {(post.tags || []).slice(0, 2).map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {(post.tags || []).length > 2 && (
                                <Badge variant="outline" className="text-xs">+{(post.tags || []).length - 2}</Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={post.published ? "default" : "secondary"}>
                              {post.published ? "Published" : "Draft"}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(post.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setEditingPost(post)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDeletePost(post.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
