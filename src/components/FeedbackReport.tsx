import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, Award, Target, BookOpen } from "lucide-react";

const performanceData = [
  { date: 'Jan', score: 65 },
  { date: 'Feb', score: 68 },
  { date: 'Mar', score: 72 },
  { date: 'Apr', score: 75 },
  { date: 'May', score: 78 },
  { date: 'Jun', score: 85 },
];

const skillsData = [
  { skill: 'Technical Skills', score: 85 },
  { skill: 'Communication', score: 78 },
  { skill: 'Problem Solving', score: 82 },
  { skill: 'Leadership', score: 70 },
  { skill: 'Adaptability', score: 75 },
];

interface FeedbackReportProps {
  onNavigate?: (page: string) => void;
}

export function FeedbackReport({ onNavigate }: FeedbackReportProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Feedback Report</h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive analysis of your career development progress
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => onNavigate?.('dashboard')}
            className="hover:bg-accent"
          >
            Back to Dashboard
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Download Report
          </Button>
        </div>
      </div>

      {/* Overall Score */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600" />
            Overall Performance Score
          </CardTitle>
          <CardDescription>
            Your comprehensive career readiness assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Overall Score</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600">+12% this month</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">A-</div>
              <div className="text-sm text-muted-foreground">Grade Level</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600">Improved</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">23</div>
              <div className="text-sm text-muted-foreground">Sessions Completed</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <span className="text-sm text-muted-foreground">This month</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">7.2</div>
              <div className="text-sm text-muted-foreground">Avg Session Score</div>
              <div className="flex items-center justify-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600">+0.8</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
            <CardDescription>
              Your improvement over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#6366f1" 
                    strokeWidth={3}
                    dot={{ fill: '#6366f1', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Skills Breakdown</CardTitle>
            <CardDescription>
              Current proficiency levels across key areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillsData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="skill" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#6366f1" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              Strengths
            </CardTitle>
            <CardDescription>
              Areas where you excel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Technical Problem Solving</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                  Excellent
                </Badge>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Code Quality</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                  Strong
                </Badge>
              </div>
              <Progress value={88} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Learning Agility</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                  High
                </Badge>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-600" />
              Improvement Areas
            </CardTitle>
            <CardDescription>
              Focus areas for development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Public Speaking</span>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-0">
                  Developing
                </Badge>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Leadership Skills</span>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-0">
                  Growing
                </Badge>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Conflict Resolution</span>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-0">
                  Needs Work
                </Badge>
              </div>
              <Progress value={58} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>
              Personalized action items
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="font-medium text-blue-900">Practice System Design</p>
                <p className="text-sm text-blue-700">Focus on scalability concepts</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Start Practice
                </Button>
              </div>
              
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="font-medium text-orange-900">Improve Presentation Skills</p>
                <p className="text-sm text-orange-700">Join a public speaking group</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Find Resources
                </Button>
              </div>
              
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="font-medium text-green-900">Leadership Workshop</p>
                <p className="text-sm text-green-700">Enroll in management training</p>
                <Button variant="outline" size="sm" className="mt-2">
                  View Courses
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Your latest achievements and milestones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                date: "Today",
                activity: "Completed Mock Interview",
                score: "85%",
                improvement: "+5%",
                type: "interview"
              },
              {
                date: "Yesterday",
                activity: "Updated Resume",
                score: "ATS: 92%",
                improvement: "+7%",
                type: "resume"
              },
              {
                date: "2 days ago",
                activity: "Coding Practice Session",
                score: "8/10 solved",
                improvement: "+2 problems",
                type: "coding"
              },
              {
                date: "3 days ago",
                activity: "Skills Assessment",
                score: "Advanced",
                improvement: "Level up",
                type: "assessment"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.type === 'interview' ? 'bg-blue-100' :
                    item.type === 'resume' ? 'bg-green-100' :
                    item.type === 'coding' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    {item.type === 'interview' && <Target className="w-5 h-5 text-blue-600" />}
                    {item.type === 'resume' && <Award className="w-5 h-5 text-green-600" />}
                    {item.type === 'coding' && <BookOpen className="w-5 h-5 text-purple-600" />}
                    {item.type === 'assessment' && <TrendingUp className="w-5 h-5 text-orange-600" />}
                  </div>
                  <div>
                    <p className="font-medium">{item.activity}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0">
                      {item.score}
                    </Badge>
                    <span className="text-sm text-green-600 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {item.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}