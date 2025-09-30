import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MockTests } from "./MockTests";
import { Play, RotateCcw, Check, X, Lightbulb, Clock, Code, Terminal, Target } from "lucide-react";
import { useState } from "react";

interface CodingPracticeProps {
  onNavigate?: (page: string) => void;
}

export function CodingPractice({ onNavigate }: CodingPracticeProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [code, setCode] = useState(`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Your solution here
        hash_map = {}
        
        for i, num in enumerate(nums):
            complement = target - num
            if complement in hash_map:
                return [hash_map[complement], i]
            hash_map[num] = i
        
        return []`);

  const runCode = () => {
    // Simulate code execution
    console.log("Running code...");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Coding Practice</h1>
          <p className="text-muted-foreground mt-1">
            Sharpen your programming skills with AI-guided practice
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            onClick={() => onNavigate?.('dashboard')}
            className="hover:bg-accent"
          >
            Back to Dashboard
          </Button>
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-0 dark:bg-emerald-900 dark:text-emerald-300">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Streak: 7 days
          </Badge>
          <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200">
            <Code className="w-4 h-4 mr-2" />
            New Problem
          </Button>
        </div>
      </div>

      {/* Tabs for Coding Practice and Mock Tests */}
      <Tabs defaultValue="coding" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="coding" className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Coding Practice
          </TabsTrigger>
          <TabsTrigger value="tests" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Mock Tests
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="coding" className="space-y-6">
          {/* Main Coding Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Problem Description */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      Two Sum
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-0 dark:bg-emerald-900 dark:text-emerald-300">
                        Easy
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-0 dark:bg-blue-900 dark:text-blue-300">
                        Array
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>
                    Problem #1 • Array Fundamentals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <p>
                      Given an array of integers <code>nums</code> and an integer <code>target</code>, 
                      return indices of the two numbers such that they add up to target.
                    </p>
                    <p>
                      You may assume that each input would have exactly one solution, and you may not use the same element twice.
                    </p>
                    <p>You can return the answer in any order.</p>
                    
                    <h4>Example 1:</h4>
                    <div className="bg-slate-100 p-3 rounded dark:bg-slate-800">
                      <strong>Input:</strong> nums = [2,7,11,15], target = 9<br/>
                      <strong>Output:</strong> [0,1]<br/>
                      <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
                    </div>
                    
                    <h4>Example 2:</h4>
                    <div className="bg-slate-100 p-3 rounded dark:bg-slate-800">
                      <strong>Input:</strong> nums = [3,2,4], target = 6<br/>
                      <strong>Output:</strong> [1,2]
                    </div>
                    
                    <h4>Constraints:</h4>
                    <ul className="text-sm">
                      <li>2 ≤ nums.length ≤ 10⁴</li>
                      <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                      <li>-10⁹ ≤ target ≤ 10⁹</li>
                      <li>Only one valid answer exists.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-600" />
                    AI Hints
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      💡 Hint 1: Think about data structures
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      💡 Hint 2: Consider time complexity
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      💡 Hint 3: Hash map approach
                    </Button>
                  </div>
                  <Separator />
                  <div className="text-sm text-muted-foreground">
                    <p>💡 <strong>Pro tip:</strong> Try to solve it in O(n) time complexity</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Code Editor */}
            <div className="lg:col-span-3 space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-indigo-600" />
                      Code Editor
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="python">Python</SelectItem>
                          <SelectItem value="javascript">JavaScript</SelectItem>
                          <SelectItem value="java">Java</SelectItem>
                          <SelectItem value="cpp">C++</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="sm" className="hover:bg-accent">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Textarea 
                      className="font-mono text-sm min-h-96 bg-background border border-border rounded-lg p-4 resize-none"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    
                    {/* Line numbers */}
                    <div className="absolute top-4 left-4 text-xs text-muted-foreground font-mono space-y-1 pointer-events-none">
                      {code.split('\n').map((_, i) => (
                        <div key={i} className="h-5 flex items-center">{i + 1}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Time: 05:23</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={runCode} className="hover:bg-blue-50 hover:border-blue-200">
                        <Terminal className="w-4 h-4 mr-2" />
                        Run Code
                      </Button>
                      <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200" size="sm">
                        <Play className="w-4 h-4 mr-2" />
                        Submit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
          
              {/* Test Results & Console */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-green-600" />
                    Console & Test Results
                  </CardTitle>
                  <CardDescription>
                    Output from your solution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-xl dark:bg-emerald-950 dark:border-emerald-800">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <div>
                          <span className="font-medium text-emerald-800 dark:text-emerald-200">Test Case 1</span>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400">Expected: [0,1], Got: [0,1]</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-0 dark:bg-emerald-900 dark:text-emerald-300">
                        Passed
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-xl dark:bg-emerald-950 dark:border-emerald-800">
                      <div className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <div>
                          <span className="font-medium text-emerald-800 dark:text-emerald-200">Test Case 2</span>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400">Expected: [1,2], Got: [1,2]</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-0 dark:bg-emerald-900 dark:text-emerald-300">
                        Passed
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-xl dark:bg-red-950 dark:border-red-800">
                      <div className="flex items-center gap-3">
                        <X className="w-5 h-5 text-red-600" />
                        <div>
                          <span className="font-medium text-red-800 dark:text-red-200">Test Case 3</span>
                          <p className="text-sm text-red-600 dark:text-red-400">Expected: [0,3], Got: [0,1]</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-red-100 text-red-800 border-0 dark:bg-red-900 dark:text-red-300">
                        Failed
                      </Badge>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Runtime:</span>
                        <span className="font-medium">52ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Memory:</span>
                        <span className="font-medium">15.2MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time Complexity:</span>
                        <span className="font-medium">O(n)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Space Complexity:</span>
                        <span className="font-medium">O(n)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Problem Queue */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-indigo-600" />
                Practice Queue
              </CardTitle>
              <CardDescription>
                Recommended problems based on your progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Valid Parentheses", difficulty: "Easy", category: "Stack", completed: true },
                  { title: "Best Time to Buy Stock", difficulty: "Easy", category: "Array", completed: true },
                  { title: "Binary Tree Inorder", difficulty: "Medium", category: "Tree", completed: false },
                  { title: "3Sum", difficulty: "Medium", category: "Array", completed: false },
                  { title: "Longest Substring", difficulty: "Medium", category: "String", completed: false },
                  { title: "Merge Intervals", difficulty: "Medium", category: "Array", completed: false },
                ].map((problem, index) => (
                  <Card key={index} className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    problem.completed ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800' : 'hover:bg-accent/50'
                  }`}>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{problem.title}</h4>
                          {problem.completed && <Check className="w-5 h-5 text-emerald-600" />}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={
                            problem.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-800 border-0 dark:bg-emerald-900 dark:text-emerald-300' :
                            problem.difficulty === 'Medium' ? 'bg-amber-100 text-amber-800 border-0 dark:bg-amber-900 dark:text-amber-300' :
                            'bg-red-100 text-red-800 border-0 dark:bg-red-900 dark:text-red-300'
                          }>
                            {problem.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0 dark:bg-blue-900 dark:text-blue-300">
                            {problem.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tests">
          <MockTests onNavigate={onNavigate} />
        </TabsContent>
      </Tabs>
    </div>
  );
}