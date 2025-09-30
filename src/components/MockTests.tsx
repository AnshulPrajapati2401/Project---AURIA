import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { Clock, CheckCircle, XCircle, AlertCircle, Trophy, Target, Code, Brain, Calculator, FileText, Timer, Play } from "lucide-react";
import { useState } from "react";

// Mock data for different test sections
const mockQuestions = {
  mcq: [
    {
      id: 1,
      type: "mcq",
      category: "Technical",
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1
    },
    {
      id: 2,
      type: "mcq", 
      category: "Technical",
      question: "Which of the following is not a JavaScript data type?",
      options: ["String", "Boolean", "Float", "Undefined"],
      correct: 2
    },
    {
      id: 3,
      type: "mcq",
      category: "Aptitude", 
      question: "If a train travels 120 km in 2 hours, what is its speed?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correct: 1
    },
    {
      id: 4,
      type: "mcq",
      category: "Technical",
      question: "Which data structure uses LIFO (Last In First Out) principle?",
      options: ["Queue", "Stack", "Array", "Tree"],
      correct: 1
    },
    {
      id: 5,
      type: "mcq",
      category: "Aptitude",
      question: "If 5x + 3 = 23, what is the value of x?",
      options: ["2", "3", "4", "5"],
      correct: 2
    }
  ],
  coding: [
    {
      id: 1,
      title: "Two Sum Problem",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      difficulty: "Easy",
      timeLimit: 30,
      starterCode: `def two_sum(nums, target):
    # Your code here
    pass

# Test case
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # Expected: [0, 1]`
    },
    {
      id: 2,
      title: "Valid Parentheses",
      description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      difficulty: "Easy",
      timeLimit: 25,
      starterCode: `def is_valid(s):
    # Your code here
    pass

# Test case
s = "()[]{}"
print(is_valid(s))  # Expected: True`
    }
  ]
};

const completedTests = [
  { name: "Full Stack Assessment", score: 85, date: "2 days ago", sections: 3, type: "Mixed", duration: "75 min" },
  { name: "JavaScript Fundamentals", score: 92, date: "1 week ago", sections: 2, type: "Technical", duration: "45 min" },
  { name: "Problem Solving", score: 78, date: "2 weeks ago", sections: 3, type: "Mixed", duration: "60 min" },
];

interface MockTestsProps {
  onNavigate?: (page: string) => void;
}

type TestSection = 'selection' | 'mcq' | 'coding' | 'timed' | 'results';

export function MockTests({ onNavigate }: MockTestsProps) {
  const [currentSection, setCurrentSection] = useState<TestSection>('selection');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mcqAnswers, setMcqAnswers] = useState<number[]>([]);
  const [codingAnswers, setCodingAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const [testStarted, setTestStarted] = useState(false);
  const [codingCode, setCodingCode] = useState("");

  const handleStartTest = () => {
    setCurrentSection('mcq');
    setCurrentQuestion(0);
    setMcqAnswers([]);
    setCodingAnswers([]);
    setTestStarted(true);
    setTimeLeft(3600);
  };

  const handleMcqAnswer = (answerIndex: number) => {
    const newAnswers = [...mcqAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setMcqAnswers(newAnswers);
  };

  const handleNextMcq = () => {
    if (currentQuestion < mockQuestions.mcq.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentSection('coding');
      setCurrentQuestion(0);
      setCodingCode(mockQuestions.coding[0]?.starterCode || "");
    }
  };

  const handleNextCoding = () => {
    const newAnswers = [...codingAnswers];
    newAnswers[currentQuestion] = codingCode;
    setCodingAnswers(newAnswers);

    if (currentQuestion < mockQuestions.coding.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCodingCode(mockQuestions.coding[currentQuestion + 1]?.starterCode || "");
    } else {
      setCurrentSection('timed');
    }
  };

  const handleFinishTest = () => {
    setCurrentSection('results');
  };

  const calculateMcqScore = () => {
    let correct = 0;
    mcqAnswers.forEach((answer, index) => {
      if (answer === mockQuestions.mcq[index]?.correct) {
        correct++;
      }
    });
    return Math.round((correct / mockQuestions.mcq.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Results Section
  if (currentSection === 'results') {
    const mcqScore = calculateMcqScore();
    const codingScore = 85; // Mock coding score
    const timedScore = 80; // Mock timed assessment score
    const overallScore = Math.round((mcqScore + codingScore + timedScore) / 3);

    return (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold">Test Complete!</h1>
          <p className="text-muted-foreground">Your comprehensive assessment results</p>
        </div>

        <Card className="border-0 shadow-lg max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Overall Score</CardTitle>
            <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              {overallScore}%
            </div>
            <CardDescription>
              Comprehensive assessment across multiple sections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Section Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Brain className="w-5 h-5 text-blue-600" />
                    Multiple Choice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{mcqScore}%</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {mcqAnswers.filter((answer, index) => answer === mockQuestions.mcq[index]?.correct).length}/{mockQuestions.mcq.length} correct
                    </p>
                  </div>
                  <Progress value={mcqScore} className="h-2 mt-3" />
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code className="w-5 h-5 text-purple-600" />
                    Coding Problems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{codingScore}%</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {mockQuestions.coding.length} problems attempted
                    </p>
                  </div>
                  <Progress value={codingScore} className="h-2 mt-3" />
                </CardContent>
              </Card>

              <Card className="border">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Timer className="w-5 h-5 text-green-600" />
                    Timed Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{timedScore}%</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Time management & accuracy
                    </p>
                  </div>
                  <Progress value={timedScore} className="h-2 mt-3" />
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* AI-Generated Report */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">AI Performance Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border bg-green-50 dark:bg-green-950">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-green-800 dark:text-green-200">Strengths</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                      <li>• Strong algorithmic thinking</li>
                      <li>• Good understanding of data structures</li>
                      <li>• Efficient problem-solving approach</li>
                      <li>• Excellent time management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border bg-orange-50 dark:bg-orange-950">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-orange-800 dark:text-orange-200">Areas for Improvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1 text-orange-700 dark:text-orange-300">
                      <li>• Practice more complex coding patterns</li>
                      <li>• Review mathematical concepts</li>
                      <li>• Focus on edge case handling</li>
                      <li>• Improve code optimization techniques</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Suggestions */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Recommended Next Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">Practice Coding</div>
                    <div className="text-xs text-muted-foreground">Focus on medium difficulty problems</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">Review Concepts</div>
                    <div className="text-xs text-muted-foreground">Data structures & algorithms</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4">
                  <div className="text-left">
                    <div className="font-medium">Mock Interview</div>
                    <div className="text-xs text-muted-foreground">Practice with AI interviewer</div>
                  </div>
                </Button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => setCurrentSection('selection')}
                variant="outline" 
                className="flex-1"
              >
                Take Another Test
              </Button>
              <Button 
                className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                onClick={() => onNavigate?.('feedback')}
              >
                Detailed Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Timed Assessment Section
  if (currentSection === 'timed') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Section 3: Timed Assessment</h1>
            <p className="text-muted-foreground">Quick problem-solving under time pressure</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
              <Clock className="w-4 h-4" />
              <span className="font-mono">10:00</span>
            </div>
          </div>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Quick Problem Solving</CardTitle>
            <CardDescription>
              Solve as many problems as possible in the given time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-medium">Problem 1: Array Sum</h3>
                <p className="text-sm text-muted-foreground">
                  Find the maximum sum of any contiguous subarray in the given array: [2, -3, 4, -1, 2, 1, -5, 4]
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">6</Button>
                  <Button variant="outline" size="sm">7</Button>
                  <Button variant="outline" size="sm">8</Button>
                  <Button variant="outline" size="sm">9</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Problem 2: String Manipulation</h3>
                <p className="text-sm text-muted-foreground">
                  How many palindromic substrings are in the string "racecar"?
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">5</Button>
                  <Button variant="outline" size="sm">7</Button>
                  <Button variant="outline" size="sm">9</Button>
                  <Button variant="outline" size="sm">10</Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={handleFinishTest}
              >
                Finish Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Coding Section
  if (currentSection === 'coding') {
    const problem = mockQuestions.coding[currentQuestion];
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Section 2: Coding Problems</h1>
            <p className="text-muted-foreground">Solve programming challenges</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-0">
              Problem {currentQuestion + 1} of {mockQuestions.coding.length}
            </Badge>
          </div>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  {problem?.title}
                </CardTitle>
                <CardDescription>{problem?.description}</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={
                  problem?.difficulty === 'Easy' ? 'secondary' : 
                  problem?.difficulty === 'Medium' ? 'default' : 'destructive'
                }>
                  {problem?.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Timer className="w-4 h-4" />
                  {problem?.timeLimit} min
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Your Solution:</Label>
              <Textarea
                value={codingCode}
                onChange={(e) => setCodingCode(e.target.value)}
                placeholder="Write your code here..."
                className="min-h-64 font-mono text-sm"
              />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Run Code
                </Button>
                <Button variant="outline" size="sm">
                  Test Cases
                </Button>
              </div>
              <Button 
                onClick={handleNextCoding}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                {currentQuestion === mockQuestions.coding.length - 1 ? 'Next Section' : 'Next Problem'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // MCQ Section
  if (currentSection === 'mcq') {
    const question = mockQuestions.mcq[currentQuestion];
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Section 1: Multiple Choice</h1>
            <p className="text-muted-foreground">Technical & Aptitude Questions</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime(timeLeft)}</span>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0">
              Question {currentQuestion + 1} of {mockQuestions.mcq.length}
            </Badge>
          </div>
        </div>

        <Progress value={((currentQuestion + 1) / mockQuestions.mcq.length) * 100} className="h-2" />

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Question {currentQuestion + 1}</CardTitle>
              <Badge variant="secondary" className={`${
                question?.category === 'Technical' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
              } border-0`}>
                {question?.category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-lg font-medium">{question?.question}</div>
            
            <RadioGroup 
              value={mcqAnswers[currentQuestion]?.toString()} 
              onValueChange={(value) => handleMcqAnswer(parseInt(value))}
            >
              {question?.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between">
              <Button 
                variant="outline" 
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNextMcq}
                disabled={mcqAnswers[currentQuestion] === undefined}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                {currentQuestion === mockQuestions.mcq.length - 1 ? 'Next Section' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Test Selection (Main Page)
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Mock Tests</h1>
          <p className="text-muted-foreground">
            Comprehensive assessments to evaluate your technical and problem-solving skills
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
        </div>
      </div>

      {/* Test Structure Overview */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Full Assessment Structure
          </CardTitle>
          <CardDescription>
            Complete all three sections for a comprehensive evaluation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Section 1: Multiple Choice</h3>
              <p className="text-sm text-muted-foreground">
                Technical & aptitude questions to test your knowledge foundation
              </p>
              <div className="text-xs text-muted-foreground">
                {mockQuestions.mcq.length} questions • 20 minutes
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Section 2: Coding Problems</h3>
              <p className="text-sm text-muted-foreground">
                Programming challenges with AI-powered compiler
              </p>
              <div className="text-xs text-muted-foreground">
                {mockQuestions.coding.length} problems • 30 minutes
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Section 3: Timed Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Quick problem-solving under time pressure
              </p>
              <div className="text-xs text-muted-foreground">
                10 problems • 15 minutes
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button 
              className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 px-8"
              onClick={handleStartTest}
            >
              <Play className="w-4 h-4 mr-2" />
              Start Full Assessment
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Total Duration: ~65 minutes
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Test History */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Recent Test Results</CardTitle>
          <CardDescription>
            Your performance history and improvement tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {completedTests.map((test, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-xl hover:bg-accent/50 transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    test.score >= 90 ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                    test.score >= 80 ? 'bg-gradient-to-br from-blue-500 to-indigo-500' :
                    test.score >= 70 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                    'bg-gradient-to-br from-red-500 to-pink-500'
                  }`}>
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">{test.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {test.sections} sections • {test.duration} • {test.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className={`${
                    test.type === 'Technical' ? 'bg-blue-100 text-blue-800' : 
                    test.type === 'Mixed' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  } border-0`}>
                    {test.type}
                  </Badge>
                  <div className="text-right">
                    <div className="font-bold text-lg">{test.score}%</div>
                    <div className="text-xs text-muted-foreground">Overall Score</div>
                  </div>
                  <Button variant="outline" size="sm">
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