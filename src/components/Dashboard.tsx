import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Calendar } from "./ui/calendar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  FileText, 
  Video, 
  Target, 
  Code, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  Trophy,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  ExternalLink,
  Briefcase
} from 'lucide-react';
import { useState } from 'react';

const mockProgressData = [
  { name: 'Resume', progress: 85, total: 100, icon: FileText, color: 'from-emerald-500 to-green-500' },
  { name: 'Interview', progress: 60, total: 100, icon: Video, color: 'from-blue-500 to-indigo-500' },
  { name: 'Coding', progress: 75, total: 100, icon: Code, color: 'from-purple-500 to-violet-500' },
  { name: 'Mock Tests', progress: 40, total: 100, icon: Target, color: 'from-orange-500 to-red-500' },
];

const quickStats = [
  { label: 'Current Streak', value: '12 days', icon: TrendingUp, color: 'text-emerald-600' },
  { label: 'Total Practice Hours', value: '48h', icon: Clock, color: 'text-blue-600' },
  { label: 'Skills Improved', value: '8', icon: Star, color: 'text-purple-600' },
  { label: 'Global Rank', value: '#2,456', icon: Trophy, color: 'text-orange-600' },
];

const recentActivities = [
  { activity: 'Completed Resume Review', time: '2 hours ago', status: 'completed' },
  { activity: 'React JS Mock Interview', time: '1 day ago', status: 'completed' },
  { activity: 'Algorithm Practice Session', time: '2 days ago', status: 'completed' },
  { activity: 'System Design Mock Test', time: '3 days ago', status: 'pending' },
];

const codingPlatformStats = [
  { platform: 'LeetCode', rank: 'Expert', problems: 324, rating: 2156, color: 'from-orange-500 to-yellow-500' },
  { platform: 'HackerRank', rank: '5 Star', problems: 89, rating: 2890, color: 'from-green-500 to-emerald-500' },
  { platform: 'GeeksforGeeks', rank: 'Advanced', problems: 156, rating: 1850, color: 'from-blue-500 to-indigo-500' },
];

interface DashboardProps {
  onNavigate?: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Good morning, Alex! 👋
          </h1>
          <p className="text-muted-foreground mt-2">Ready to boost your career today?</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-0 px-3 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            On Fire - 12 day streak!
          </Badge>
        </div>
      </div>

      {/* AURIA Score Banner */}
      <div 
        className="relative w-full bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-0 shadow-lg rounded-2xl overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
        onClick={() => onNavigate?.('auriascore')}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-blue-500/5 to-teal-500/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-200/20 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative p-8">
          <div className="flex items-center justify-between">
            {/* Left Side - Score Info */}
            <div className="flex items-center gap-8">
              {/* Circular Progress */}
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted/20"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${76 * 2.51}, 251.2`}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Score in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">76</span>
                </div>
              </div>
              
              {/* Score Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <h2 className="text-2xl font-bold">AURIA Score</h2>
                </div>
                <p className="text-muted-foreground">Your all-over performance analysis</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Global Rank:</span>
                    <span className="font-semibold text-indigo-600">#1,247</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Top:</span>
                    <span className="font-semibold text-green-600">97%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Quick Stats */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">85%</div>
                <div className="text-xs text-muted-foreground">Resume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">91%</div>
                <div className="text-xs text-muted-foreground">Coding</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">78%</div>
                <div className="text-xs text-muted-foreground">Interview</div>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Tools - 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Resume Builder */}
        <Card 
          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          onClick={() => onNavigate?.('resume')}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Resume Builder</CardTitle>
                  <CardDescription>AI-powered optimization</CardDescription>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <Progress value={85} className="h-3" />
              <div className="flex items-center justify-between">
                <Badge className="bg-emerald-100 text-emerald-700 border-0">Excellent</Badge>
                <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                  Go to Section
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Matches */}
        <Card 
          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          onClick={() => onNavigate?.('jobs')}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Job Matches</CardTitle>
                  <CardDescription>AI-curated opportunities</CardDescription>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">New Matches</span>
                <span className="text-sm font-medium text-indigo-600">12 jobs</span>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-indigo-100 text-indigo-700 border-0 text-xs">95% match</Badge>
                <Badge className="bg-blue-100 text-blue-700 border-0 text-xs">Remote</Badge>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-indigo-100 text-indigo-700 border-0">High Match</Badge>
                <Button variant="default" size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                  Go to Section
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interview Coach */}
        <Card 
          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          onClick={() => onNavigate?.('interview')}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
                  <Video className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Interview Coach</CardTitle>
                  <CardDescription>Practice with AI coach</CardDescription>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Sessions Completed</span>
                <span className="text-sm font-medium">8 sessions</span>
              </div>
              <Progress value={60} className="h-3" />
              <div className="flex items-center justify-between">
                <Badge className="bg-purple-100 text-purple-700 border-0">Good Progress</Badge>
                <Button variant="default" size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Go to Section
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mock Tests */}
        <Card 
          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          onClick={() => onNavigate?.('mocktest')}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Mock Tests</CardTitle>
                  <CardDescription>Timed practice sessions</CardDescription>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tests Taken</span>
                <span className="text-sm font-medium">3 tests</span>
              </div>
              <Progress value={40} className="h-3" />
              <div className="flex items-center justify-between">
                <Badge className="bg-orange-100 text-orange-700 border-0">Needs Work</Badge>
                <Button variant="default" size="sm" className="bg-orange-600 hover:bg-orange-700">
                  Go to Section
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Coding Platform Rankings */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Coding Platform Rankings
          </CardTitle>
          <CardDescription>
            Your performance across different coding platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {codingPlatformStats.map((platform, index) => (
              <div key={index} className="p-4 border border-border rounded-xl hover:bg-accent/50 transition-all duration-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{platform.platform}</h4>
                  <Badge variant="secondary" className={`bg-gradient-to-r ${platform.color} text-white border-0`}>
                    {platform.rank}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Problems Solved</span>
                    <span className="font-medium">{platform.problems}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">{platform.rating}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              Recent Activities
            </CardTitle>
            <CardDescription>
              Your latest learning activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.status === 'completed' ? 'bg-emerald-100' : 'bg-orange-100'
                  }`}>
                    {activity.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Clock className="w-4 h-4 text-orange-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.activity}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-indigo-500" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Jump into your next learning session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button 
                className="w-full justify-between bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
                onClick={() => onNavigate?.('interview')}
              >
                Start Mock Interview
                <Video className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-between hover:bg-accent"
                onClick={() => onNavigate?.('coding')}
              >
                Practice Coding
                <Code className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-between hover:bg-accent"
                onClick={() => onNavigate?.('resume')}
              >
                Update Resume
                <FileText className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-between hover:bg-accent"
                onClick={() => onNavigate?.('jobs')}
              >
                Browse Jobs
                <Briefcase className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}