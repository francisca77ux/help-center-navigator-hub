
import React, { useState } from 'react';
import { Search, Lock, ArrowRight, MessageCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data based on the template structure
  const categories = [
    {
      id: 1,
      name: 'Getting Started',
      description: 'Learn the basics and set up your account',
      url: '/category/getting-started',
      articleCount: 12
    },
    {
      id: 2,
      name: 'Account Management',
      description: 'Manage your profile, settings, and preferences',
      url: '/category/account',
      articleCount: 8
    },
    {
      id: 3,
      name: 'Billing & Payments',
      description: 'Questions about pricing, invoices, and payments',
      url: '/category/billing',
      articleCount: 15
    },
    {
      id: 4,
      name: 'Troubleshooting',
      description: 'Common issues and how to resolve them',
      url: '/category/troubleshooting',
      articleCount: 23
    },
    {
      id: 5,
      name: 'API Documentation',
      description: 'Developer guides and API references',
      url: '/category/api',
      articleCount: 18
    },
    {
      id: 6,
      name: 'Security',
      description: 'Privacy, security, and compliance information',
      url: '/category/security',
      articleCount: 7
    }
  ];

  const promotedArticles = [
    {
      id: 1,
      title: 'How to get started with your first project',
      url: '/article/getting-started',
      internal: false
    },
    {
      id: 2,
      title: 'Understanding our new pricing model',
      url: '/article/pricing',
      internal: false
    },
    {
      id: 3,
      title: 'Security best practices for teams',
      url: '/article/security-practices',
      internal: true
    },
    {
      id: 4,
      title: 'API rate limits and optimization',
      url: '/article/api-limits',
      internal: false
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'article',
      title: 'New feature: Advanced filtering options',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'update',
      title: 'Updated: API documentation for v2.0',
      time: '1 day ago'
    },
    {
      id: 3,
      type: 'community',
      title: 'Community discussion: Best practices',
      time: '3 days ago'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section with Search */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers, get help, and learn how to make the most of our platform
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Search for articles, guides, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-background/80 backdrop-blur-sm border-2 focus:border-primary/50 rounded-xl shadow-lg"
              />
            </div>
          </form>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardDescription className="text-base mt-2">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="secondary" className="text-xs">
                    {category.articleCount} articles
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Promoted Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {promotedArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-md transition-all duration-200 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors flex-1 pr-4">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {article.internal && (
                        <Lock className="h-4 w-4 text-muted-foreground" title="Internal article" />
                      )}
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community and Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Community Section */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                Join Our Community
              </CardTitle>
              <CardDescription className="text-base">
                Connect with other users, share experiences, and get help from the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full group">
                Join the Conversation
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">{activity.title}</h4>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
