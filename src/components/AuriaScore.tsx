import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Trophy, 
  TrendingUp, 
  Target, 
  Star, 
  Users, 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  Lightbulb,
  BarChart3
} from "lucide-react";

interface AuriaScoreProps {
  onNavigate?: (page: string) => void;
}

const performanceMetrics = [
  { name: 'Resume Optimization', progress: 85, icon: CheckCircle, color: 'text-emerald-600' },
  { name: 'Interview Practice', progress: 72, icon: Target, color: 'text-blue-600' },
  { name: 'Mock Tests', progress: 58, icon: BarChart3, color: 'text-orange-600' },
  { name: 'Coding Practice', progress: 91, icon: Star, color: 'text-purple-600' },
];

const improvementTips = [
  {
    icon: Target,
    title: "Practice More Mock Interviews",
    description: "Complete 2 more mock interviews to boost your confidence",
    action: "Start Interview",
    actionPage: "interview",
    priority: "High"
  },
  {
    icon: BarChart3,
    title: "Take Technical Mock Tests",
    description: "Your technical test scores can be improved with more practice",
    action: "Take Test",
    actionPage: "mocktest", 
    priority: "Medium"
  },
  {
    icon: CheckCircle,
    title: "Update Resume Keywords",
    description: "Add trending skills to improve ATS compatibility",
    action: "Update Resume",
    actionPage: "resume",
    priority: "Low"
  }
];

const rankings = [
  { metric: 'Overall Performance', rank: 1247, total: 50000, percentile: 97 },
  { metric: 'Technical Skills', rank: 892, total: 50000, percentile: 98 },
  { metric: 'Interview Readiness', rank: 2156, total: 50000, percentile: 95 },
  { metric: 'Resume Quality', rank: 456, total: 50000, percentile: 99 }
];

export function AuriaScore({ onNavigate }: AuriaScoreProps) {
  const overallScore = 76; // Calculated from all metrics
  const userRank = 1247;
  const totalUsers = 50000;
  const percentile = Math.round(((totalUsers - userRank) / totalUsers) * 100);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 90) return 'from-emerald-500 to-green-500';
    if (score >= 75) return 'from-blue-500 to-indigo-500';
    if (score >= 60) return 'from-orange-500 to-yellow-500';
    return 'from-red-500 to-rose-500';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      case 'Medium': return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      case 'Low': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            AURIA Score
          </h1>
          <p className="text-muted-foreground">
            Your comprehensive career readiness score and ranking
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

      {/* Main Score Card */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Score Circle */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                {/* Background circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted/20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - overallScore / 100)}`}
                    className="transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Score text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className={`text-4xl font-bold ${getScoreColor(overallScore)}`}>
                    {overallScore}
                  </div>
                  <div className="text-muted-foreground text-sm">AURIA Score</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className={`text-2xl font-bold ${getScoreColor(overallScore)}`}>
                  Rank #{userRank.toLocaleString()}
                </div>
                <div className="text-muted-foreground">
                  Top {percentile}% of {totalUsers.toLocaleString()} users
                </div>
                <Badge className={`bg-gradient-to-r ${getScoreGradient(overallScore)} text-white border-0 px-4 py-2`}>
                  {overallScore >= 90 ? 'Excellent' : 
                   overallScore >= 75 ? 'Very Good' : 
                   overallScore >= 60 ? 'Good' : 'Needs Improvement'}
                </Badge>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-4">
              <h3 className="font-semibold mb-4">Score Breakdown</h3>
              {performanceMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${metric.color}`} />
                        <span className="text-sm font-medium">{metric.name}</span>
                      </div>
                      <span className="text-sm font-bold">{metric.progress}%</span>
                    </div>
                    <Progress value={metric.progress} className="h-2" />
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rankings */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Category Rankings
            </CardTitle>
            <CardDescription>
              Your position in different skill areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rankings.map((ranking, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <div>
                    <div className="font-medium">{ranking.metric}</div>
                    <div className="text-sm text-muted-foreground">
                      Rank #{ranking.rank.toLocaleString()} of {ranking.total.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">Top {ranking.percentile}%</div>
                    <Badge variant="secondary" className="text-xs">
                      {ranking.percentile >= 98 ? 'Elite' : 
                       ranking.percentile >= 95 ? 'Excellent' : 
                       ranking.percentile >= 85 ? 'Very Good' : 'Good'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Improvement Tips */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-orange-500" />
              Improvement Tips
            </CardTitle>
            <CardDescription>
              Recommended actions to boost your score
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {improvementTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div key={index} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 mt-1 text-indigo-600" />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{tip.title}</h4>
                          <Badge className={`${getPriorityColor(tip.priority)} border-0 text-xs`}>
                            {tip.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => onNavigate?.(tip.actionPage)}
                          className="mt-2"
                        >
                          {tip.action}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Timeline */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Score Progress
          </CardTitle>
          <CardDescription>
            Your AURIA Score improvement over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8 text-muted-foreground">
            <div className="text-center space-y-2">
              <BarChart3 className="w-12 h-12 mx-auto" />
              <p>Score progress chart will be available after more activity</p>
              <p className="text-sm">Complete more assessments to see your improvement timeline</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}