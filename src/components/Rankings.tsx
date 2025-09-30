import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { 
  Trophy, 
  TrendingUp, 
  ExternalLink, 
  Star, 
  Target, 
  Calendar,
  Award,
  Activity,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

interface RankingsProps {
  onNavigate?: (page: string) => void;
}

const platformData = [
  {
    name: 'LeetCode',
    logo: '🟠',
    rank: 'Expert',
    rating: 2156,
    maxRating: 2890,
    problemsSolved: 324,
    totalProblems: 2800,
    globalRank: 2456,
    percentile: 95.2,
    streak: 23,
    recentChange: 45,
    trend: 'up',
    badges: ['SQL 50', 'Algorithms', 'Data Structures'],
    weeklyGoal: { solved: 8, target: 10 },
    color: 'from-orange-500 to-yellow-500'
  },
  {
    name: 'HackerRank',
    logo: '🟢',
    rank: '5 Star',
    rating: 2890,
    maxRating: 2890,
    problemsSolved: 89,
    totalProblems: 500,
    globalRank: 1234,
    percentile: 98.1,
    streak: 15,
    recentChange: -12,
    trend: 'down',
    badges: ['Problem Solving', 'Algorithms', 'Data Structures'],
    weeklyGoal: { solved: 5, target: 7 },
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'GeeksforGeeks',
    logo: '🔴',
    rank: 'Advanced',
    rating: 1850,
    maxRating: 2100,
    problemsSolved: 156,
    totalProblems: 1000,
    globalRank: 5678,
    percentile: 89.4,
    streak: 7,
    recentChange: 0,
    trend: 'same',
    badges: ['DSA', 'Competitive Programming'],
    weeklyGoal: { solved: 3, target: 5 },
    color: 'from-red-500 to-pink-500'
  },
  {
    name: 'Codeforces',
    logo: '🔵',
    rank: 'Specialist',
    rating: 1421,
    maxRating: 1567,
    problemsSolved: 78,
    totalProblems: 8000,
    globalRank: 15432,
    percentile: 72.3,
    streak: 3,
    recentChange: 23,
    trend: 'up',
    badges: ['Div 2', 'Math'],
    weeklyGoal: { solved: 2, target: 4 },
    color: 'from-blue-500 to-indigo-500'
  }
];

const achievementData = [
  {
    title: 'Problem Solving Streak',
    description: '23-day streak on LeetCode',
    icon: Trophy,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    title: 'Rating Milestone',
    description: 'Reached 2000+ on HackerRank',
    icon: Star,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Contest Performance',
    description: 'Top 10% in weekly contest',
    icon: Award,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Algorithm Master',
    description: '100+ dynamic programming problems',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  }
];

const skillProgress = [
  { skill: 'Arrays & Strings', solved: 89, total: 120, difficulty: 'Easy', progress: 74 },
  { skill: 'Dynamic Programming', solved: 45, total: 80, difficulty: 'Hard', progress: 56 },
  { skill: 'Trees & Graphs', solved: 67, total: 90, difficulty: 'Medium', progress: 74 },
  { skill: 'Binary Search', solved: 34, total: 45, difficulty: 'Medium', progress: 76 },
  { skill: 'Greedy Algorithms', solved: 23, total: 35, difficulty: 'Hard', progress: 66 }
];

export function Rankings({ onNavigate }: RankingsProps) {
  const totalSolved = platformData.reduce((sum, platform) => sum + platform.problemsSolved, 0);
  const averageRating = Math.round(platformData.reduce((sum, platform) => sum + platform.rating, 0) / platformData.length);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            My Coding Rankings
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your progress across coding platforms
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => onNavigate?.('dashboard')}>
            Back to Dashboard
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <ExternalLink className="w-4 h-4 mr-2" />
            Sync Profiles
          </Button>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Problems</p>
                <p className="text-2xl font-bold">{totalSolved}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold">{averageRating}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Best Rank</p>
                <p className="text-2xl font-bold">#1,234</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-2xl font-bold">23 days</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {platformData.map((platform, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{platform.logo}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                    <CardDescription>Rank: {platform.rank}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {platform.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-600" />}
                  {platform.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-600" />}
                  {platform.trend === 'same' && <Minus className="w-4 h-4 text-gray-600" />}
                  <span className={`text-sm font-medium ${
                    platform.trend === 'up' ? 'text-green-600' : 
                    platform.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {platform.recentChange > 0 ? '+' : ''}{platform.recentChange}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Rating</p>
                    <p className="font-bold text-lg">{platform.rating}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Global Rank</p>
                    <p className="font-bold text-lg">#{platform.globalRank.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Problems Solved</p>
                    <p className="font-bold">{platform.problemsSolved}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Percentile</p>
                    <p className="font-bold">{platform.percentile}%</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Weekly Goal</span>
                    <span className="text-sm font-medium">{platform.weeklyGoal.solved}/{platform.weeklyGoal.target}</span>
                  </div>
                  <Progress 
                    value={(platform.weeklyGoal.solved / platform.weeklyGoal.target) * 100} 
                    className="h-2" 
                  />
                </div>

                <div className="flex flex-wrap gap-1">
                  {platform.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Progress */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Skills Progress
          </CardTitle>
          <CardDescription>
            Your progress in different algorithm categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {skillProgress.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{skill.skill}</h4>
                    <Badge variant="secondary" className={`text-xs ${
                      skill.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      skill.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    } border-0`}>
                      {skill.difficulty}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {skill.solved}/{skill.total} ({skill.progress}%)
                  </div>
                </div>
                <Progress value={skill.progress} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-600" />
            Recent Achievements
          </CardTitle>
          <CardDescription>
            Your latest accomplishments across platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievementData.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-accent/50 transition-all duration-200">
                  <div className={`w-12 h-12 rounded-xl ${achievement.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}