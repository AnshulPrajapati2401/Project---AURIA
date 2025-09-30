import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Globe, Clock, ExternalLink, Search, Bookmark, TrendingUp, Users, Code, Briefcase } from "lucide-react";

const techNews = [
  {
    id: 1,
    title: "AI and Machine Learning Skills Drive 2024 Job Market Growth",
    excerpt: "Companies are increasingly seeking professionals with AI/ML expertise as automation transforms industries.",
    category: "Trends",
    source: "TechCrunch",
    time: "2 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyMzQ4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["AI/ML", "Jobs", "Skills"],
    views: 1240,
    featured: true
  },
  {
    id: 2,
    title: "Google Announces 10,000 New Tech Jobs Across AI and Cloud",
    excerpt: "Google's expansion plan includes significant hiring in software engineering, data science, and cloud infrastructure roles.",
    category: "Hiring",
    source: "Reuters",
    time: "4 hours ago",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1580978607093-8d4d7e41a617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBvZmZpY2UlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzU4MjYxNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Google", "Jobs", "Cloud"],
    views: 892,
    featured: true
  },
  {
    id: 3,
    title: "React 19 Released: New Features Every Developer Should Know",
    excerpt: "The latest React version introduces server components, improved concurrent features, and enhanced developer experience.",
    category: "Technology",
    source: "React Blog",
    time: "6 hours ago",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTgxNTkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Frontend", "Development"],
    views: 2150,
    featured: false
  },
  {
    id: 4,
    title: "Remote Work Trends: What Changed in 2024",
    excerpt: "Analysis of remote work adoption, salary trends, and the evolving preferences of tech professionals.",
    category: "Industry",
    source: "Forbes",
    time: "1 day ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584722065451-922e4d176e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgxOTQwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Remote", "Work", "Trends"],
    views: 756,
    featured: false
  },
  {
    id: 5,
    title: "Top 10 Programming Languages in High Demand for 2024",
    excerpt: "Based on job postings and market analysis, these languages are leading the tech hiring landscape.",
    category: "Skills",
    source: "Stack Overflow",
    time: "1 day ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTgxNTkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Programming", "Skills", "Career"],
    views: 1680,
    featured: false
  },
  {
    id: 6,
    title: "Microsoft's Azure Certification Program: New Updates",
    excerpt: "Microsoft introduces new certification paths for cloud architects and AI engineers.",
    category: "Certification",
    source: "Microsoft",
    time: "2 days ago",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgyMzQ4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Microsoft", "Azure", "Certification"],
    views: 423,
    featured: false
  }
];

const trendingTopics = [
  { name: "AI/Machine Learning", growth: "+45%", icon: "🤖" },
  { name: "Cloud Computing", growth: "+38%", icon: "☁️" },
  { name: "DevOps", growth: "+32%", icon: "🔧" },
  { name: "Cybersecurity", growth: "+28%", icon: "🔐" },
  { name: "Blockchain", growth: "+25%", icon: "⛓️" },
  { name: "Mobile Development", growth: "+22%", icon: "📱" }
];

const industries = [
  { name: "Technology", jobs: "15.2K", growth: "+12%" },
  { name: "Healthcare", jobs: "8.7K", growth: "+18%" },
  { name: "Finance", jobs: "6.3K", growth: "+8%" },
  { name: "E-commerce", jobs: "4.1K", growth: "+25%" },
  { name: "Gaming", jobs: "2.8K", growth: "+31%" },
  { name: "Education", jobs: "2.2K", growth: "+14%" }
];

interface TechNewsProps {
  onNavigate?: (page: string) => void;
}

export function TechNews({ onNavigate }: TechNewsProps) {
  const featuredNews = techNews.filter(news => news.featured);
  const regularNews = techNews.filter(news => !news.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Trends': return <TrendingUp className="w-4 h-4" />;
      case 'Hiring': return <Briefcase className="w-4 h-4" />;
      case 'Technology': return <Code className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Trends': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Hiring': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Technology': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'Industry': return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      case 'Skills': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300';
      case 'Certification': return 'bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tech News & Industry Trends</h1>
          <p className="text-muted-foreground">
            Stay updated with the latest in technology and career development
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => onNavigate?.('dashboard')}
          className="hover:bg-accent"
        >
          Back to Dashboard
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tech news and trends..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="md:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="trends">Trends</SelectItem>
                <SelectItem value="hiring">Hiring</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="industry">Industry</SelectItem>
                <SelectItem value="skills">Skills</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="latest">
              <SelectTrigger className="md:w-32">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="news" className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="news">Latest News</TabsTrigger>
              <TabsTrigger value="trends">Trending</TabsTrigger>
              <TabsTrigger value="jobs">Job Market</TabsTrigger>
            </TabsList>

            <TabsContent value="news" className="space-y-6">
              {/* Featured Articles */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredNews.map((article) => (
                    <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900 rounded-t-lg overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Badge className={`${getCategoryColor(article.category)} border-0 text-xs`}>
                              {getCategoryIcon(article.category)}
                              <span className="ml-1">{article.category}</span>
                            </Badge>
                            <span className="text-xs text-muted-foreground">{article.readTime}</span>
                          </div>
                          <h3 className="font-medium leading-tight">{article.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <span>{article.source}</span>
                              <span>•</span>
                              <span>{article.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{article.views}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Regular Articles */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Recent Updates</h2>
                <div className="space-y-4">
                  {regularNews.map((article) => (
                    <Card key={article.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex-shrink-0 overflow-hidden">
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge className={`${getCategoryColor(article.category)} border-0 text-xs`}>
                                {getCategoryIcon(article.category)}
                                <span className="ml-1">{article.category}</span>
                              </Badge>
                              <span className="text-xs text-muted-foreground">{article.readTime}</span>
                            </div>
                            <h3 className="font-medium">{article.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <span>{article.source}</span>
                                <span>•</span>
                                <span>{article.time}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  <span>{article.views}</span>
                                </div>
                                <Button variant="ghost" size="sm" className="h-auto p-1">
                                  <Bookmark className="w-3 h-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-auto p-1">
                                  <ExternalLink className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Trending Skills & Technologies</CardTitle>
                  <CardDescription>Most in-demand skills this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-xl hover:bg-accent/50 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{topic.icon}</div>
                          <div>
                            <div className="font-medium">{topic.name}</div>
                            <div className="text-sm text-muted-foreground">Job postings growth</div>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-700 border-0">
                          {topic.growth}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Job Market by Industry</CardTitle>
                  <CardDescription>Current hiring trends across different sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {industries.map((industry, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-xl hover:bg-accent/50 transition-all duration-200">
                        <div>
                          <div className="font-medium">{industry.name}</div>
                          <div className="text-sm text-muted-foreground">{industry.jobs} active jobs</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">{industry.growth}</div>
                          <div className="text-sm text-muted-foreground">growth</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600">47,832</div>
                  <div className="text-sm text-muted-foreground">Active tech jobs</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">+18%</div>
                  <div className="text-sm text-muted-foreground">Job growth this month</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">$125K</div>
                  <div className="text-sm text-muted-foreground">Average salary</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Tags */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Python', 'Machine Learning', 'DevOps', 'Cloud', 'AI', 'Blockchain', 'Mobile', 'Cybersecurity'].map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-indigo-100 hover:text-indigo-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950">
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>Get weekly tech news and career insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Enter your email" />
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}