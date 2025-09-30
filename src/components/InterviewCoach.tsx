import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Video, Mic, Camera, Play, Pause, RotateCcw, User, Users, Code2, Briefcase, Target, Settings } from "lucide-react";
import { useState } from "react";

interface InterviewCoachProps {
  onNavigate?: (page: string) => void;
}

type InterviewerType = 'hr-manager' | 'data-analyst' | 'software-engineer' | 'product-manager' | 'technical-panel';

interface InterviewerConfig {
  id: InterviewerType;
  name: string;
  description: string;
  icon: any;
  questionStyle: string;
  sampleQuestions: string[];
}

export function InterviewCoach({ onNavigate }: InterviewCoachProps) {
  const [selectedInterviewer, setSelectedInterviewer] = useState<InterviewerType | ''>('');
  const [isSessionActive, setIsSessionActive] = useState(false);

  const interviewers: InterviewerConfig[] = [
    {
      id: 'hr-manager',
      name: 'HR Manager',
      description: 'Behavioral and cultural fit questions',
      icon: User,
      questionStyle: 'Behavioral, cultural fit, soft skills',
      sampleQuestions: [
        'Tell me about yourself',
        'Why do you want to work here?',
        'Describe a challenging situation and how you handled it',
        'What are your strengths and weaknesses?',
        'Where do you see yourself in 5 years?'
      ]
    },
    {
      id: 'data-analyst',
      name: 'Data Analyst',
      description: 'Analytics, statistics, and data interpretation',
      icon: Target,
      questionStyle: 'Data analysis, statistics, business insights',
      sampleQuestions: [
        'How would you analyze customer churn?',
        'Explain A/B testing methodology',
        'What metrics would you track for this business?',
        'How do you handle missing data?',
        'Walk me through your data analysis process'
      ]
    },
    {
      id: 'software-engineer',
      name: 'Software Engineer',
      description: 'Technical coding and system design',
      icon: Code2,
      questionStyle: 'Technical coding, algorithms, system design',
      sampleQuestions: [
        'Implement a binary search algorithm',
        'Design a URL shortening service',
        'Explain the difference between REST and GraphQL',
        'How would you optimize this database query?',
        'Walk me through your development workflow'
      ]
    },
    {
      id: 'product-manager',
      name: 'Product Manager',
      description: 'Product strategy and user experience',
      icon: Briefcase,
      questionStyle: 'Product strategy, user experience, metrics',
      sampleQuestions: [
        'How would you prioritize features for our product?',
        'Design a product for elderly users',
        'How do you measure product success?',
        'Tell me about a time you had to make a difficult product decision',
        'How would you handle conflicting stakeholder requirements?'
      ]
    },
    {
      id: 'technical-panel',
      name: 'Technical Panel',
      description: 'Mixed technical and behavioral questions',
      icon: Users,
      questionStyle: 'Technical depth, leadership, problem-solving',
      sampleQuestions: [
        'Explain your approach to technical debt',
        'How do you handle disagreements in technical decisions?',
        'Design the architecture for a real-time chat application',
        'How do you ensure code quality in your team?',
        'Tell me about a technical challenge you overcame'
      ]
    }
  ];

  const currentInterviewer = interviewers.find(i => i.id === selectedInterviewer) || null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Interview Coach</h1>
          <p className="text-muted-foreground mt-1">
            Practice with AI-powered mock interviews
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
          <Button 
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={() => setIsSessionActive(!isSessionActive)}
            disabled={!currentInterviewer}
          >
            <Play className="w-4 h-4 mr-2" />
            {isSessionActive ? 'End Session' : 'Start New Session'}
          </Button>
        </div>
      </div>

      {/* Interviewer Selection */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Interview Setup
          </CardTitle>
          <CardDescription>
            Configure your mock interview session
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Interviewer Type Selector */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Select Interviewer Type
            </label>
            <Select
              value={selectedInterviewer}
              onValueChange={(value: InterviewerType) => setSelectedInterviewer(value)}
            >
              <SelectTrigger className="w-full h-12 px-4 rounded-xl border-2 hover:border-indigo-300 focus:border-indigo-500 transition-colors">
                <SelectValue placeholder="Choose interviewer role..." />
              </SelectTrigger>
              <SelectContent className="w-full max-h-60 rounded-xl border-2 shadow-lg bg-card">
                {interviewers.map((interviewer) => {
                  const Icon = interviewer.icon;
                  return (
                    <SelectItem
                      key={interviewer.id}
                      value={interviewer.id}
                      className="py-3 px-4 cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-950 focus:bg-indigo-50 dark:focus:bg-indigo-950 rounded-lg mx-1 my-1"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">
                            {interviewer.name}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">
                            {interviewer.description}
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Selected Interviewer Preview */}
          {currentInterviewer ? (
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 rounded-xl border border-indigo-200 dark:border-indigo-800 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <currentInterviewer.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-indigo-900 dark:text-indigo-100">
                    {currentInterviewer.name}
                  </h4>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">
                    {currentInterviewer.description}
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                    <strong>Focus:</strong> {currentInterviewer.questionStyle}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-300 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    No Interviewer Selected
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Please choose an interviewer type from the dropdown above to begin
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Ready to start:</strong> Choose your interview focus area
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Video Interview Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Mock Interview Session</CardTitle>
                <Badge variant="secondary" className="bg-red-100 text-red-800 border-0">
                  Live Recording
                </Badge>
              </div>
              <CardDescription>
                {currentInterviewer ? `${currentInterviewer.questionStyle} - ${currentInterviewer.name} Role` : 'Select an interviewer type to begin practice'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Video Area */}
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center relative">
                <div className="text-center text-white">
                  <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Camera Feed</p>
                  <p className="text-sm opacity-75">Your video will appear here</p>
                </div>
                
                {/* Timer */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  02:45
                </div>
                
                {/* Recording Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  REC
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button variant="outline" size="sm">
                  <Camera className="w-4 h-4 mr-2" />
                  Camera
                </Button>
                <Button variant="outline" size="sm">
                  <Mic className="w-4 h-4 mr-2" />
                  Microphone
                </Button>
                <Button variant="destructive" size="sm">
                  <Pause className="w-4 h-4 mr-2" />
                  Pause
                </Button>
                <Button variant="outline" size="sm">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Restart
                </Button>
              </div>

              {/* Current Question */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Current Question</p>
                      <p className="text-blue-800 mt-1">
                        "{currentInterviewer ? currentInterviewer.sampleQuestions[2] : 'Please select an interviewer type to begin'}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        {/* Notes and Feedback */}
        <div className="space-y-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>AI Questions</CardTitle>
              <CardDescription>
                Interview questions for this session
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                {[
                  { question: "Tell me about yourself", status: "completed" },
                  { question: "Why do you want this role?", status: "completed" },
                  { question: "Describe a challenging project", status: "current" },
                  { question: "Where do you see yourself in 5 years?", status: "upcoming" },
                  { question: "Do you have any questions for us?", status: "upcoming" },
                ].map((item, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    item.status === 'current' ? 'bg-blue-50 border-blue-200' :
                    item.status === 'completed' ? 'bg-green-50 border-green-200' :
                    'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        item.status === 'current' ? 'text-blue-900' :
                        item.status === 'completed' ? 'text-green-900' :
                        'text-gray-700'
                      }`}>
                        Q{index + 1}: {item.question}
                      </span>
                      <Badge variant="secondary" className={
                        item.status === 'current' ? 'bg-blue-100 text-blue-800 border-0' :
                        item.status === 'completed' ? 'bg-green-100 text-green-800 border-0' :
                        'bg-gray-100 text-gray-800 border-0'
                      }>
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Live Notes</CardTitle>
              <CardDescription>
                Jot down key points during the interview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Take notes here..."
                className="min-h-32"
              />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Real-time Feedback</CardTitle>
              <CardDescription>
                AI insights on your performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Speech Pace</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                    Good
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Eye Contact</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-0">
                    Improve
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Confidence Level</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0">
                    High
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Answer Structure</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">
                    Excellent
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Sessions */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle>Recent Practice Sessions</CardTitle>
          <CardDescription>
            Review your past interview performances
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "Today", role: "Software Engineer", score: 85, duration: "25 min" },
              { date: "Yesterday", role: "Product Manager", score: 78, duration: "30 min" },
              { date: "2 days ago", role: "Data Scientist", score: 82, duration: "22 min" },
            ].map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Video className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium">{session.role}</p>
                    <p className="text-sm text-muted-foreground">{session.date} • {session.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0">
                    Score: {session.score}%
                  </Badge>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onNavigate?.('feedback')}
                  >
                    View Report
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}