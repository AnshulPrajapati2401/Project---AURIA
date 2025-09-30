import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { CheckCircle, Sparkles, Target, TrendingUp, FileText, Video, Code } from "lucide-react";
import { useState } from "react";

interface AuthPageProps {
  onLogin: () => void;
}

export function AuthPage({ onLogin }: AuthPageProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  const features = [
    {
      icon: FileText,
      title: "AI Resume Builder",
      description: "Create ATS-optimized resumes in minutes"
    },
    {
      icon: Video,
      title: "Mock Interviews",
      description: "Practice with AI interviewer and get feedback"
    },
    {
      icon: Code,
      title: "Coding Practice",
      description: "Solve problems and track your progress"
    },
    {
      icon: Target,
      title: "Job Matching",
      description: "Get personalized job recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex">
      {/* Left Side - Hero */}
      <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-center">
        <div className="max-w-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">AURIA</span>
          </div>
          
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Your AI-Powered 
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent"> Career Coach</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Land your dream job with personalized AI assistance. Build resumes, practice interviews, and master coding challenges.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-medium">JS</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-medium">AM</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-medium">SK</span>
                </div>
              </div>
              <div>
                <p className="font-medium text-foreground">10,000+ users hired</p>
                <p className="text-sm text-muted-foreground">at top tech companies</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-foreground">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md shadow-2xl border-0 backdrop-blur-sm bg-white/95 dark:bg-slate-900/95">
          <CardHeader className="text-center space-y-6 pb-8">
            <div className="lg:hidden mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 via-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <div>
              <CardTitle className="text-3xl lg:hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                AURIA
              </CardTitle>
              <CardTitle className="text-2xl lg:text-3xl">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </CardTitle>
              <CardDescription className="text-base mt-3">
                {isSignUp 
                  ? 'Join thousands advancing their careers with AI' 
                  : 'Sign in to continue your career journey'
                }
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {isSignUp && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    First Name
                  </label>
                  <Input
                    placeholder="Alex"
                    className="bg-input-background border-0 h-12 rounded-xl focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Last Name
                  </label>
                  <Input
                    placeholder="Smith"
                    className="bg-input-background border-0 h-12 rounded-xl focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="alex@example.com"
                  className="bg-input-background border-0 h-12 rounded-xl focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Create a strong password"
                  className="bg-input-background border-0 h-12 rounded-xl focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              
              {isSignUp && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Career Level
                  </label>
                  <select className="w-full h-12 px-3 bg-input-background border-0 rounded-xl focus:ring-2 focus:ring-indigo-500/20 text-foreground">
                    <option>Student</option>
                    <option>Entry Level (0-2 years)</option>
                    <option>Mid Level (3-5 years)</option>
                    <option>Senior Level (5+ years)</option>
                    <option>Executive Level</option>
                  </select>
                </div>
              )}
              
              <Button 
                onClick={onLogin}
                className="w-full h-12 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {isSignUp ? 'Start Your Journey' : 'Sign In'}
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full h-12 rounded-xl hover:bg-accent transition-all duration-200 transform hover:scale-[1.02]" 
                onClick={onLogin}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-12 rounded-xl hover:bg-accent transition-all duration-200 transform hover:scale-[1.02]" 
                onClick={onLogin}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Continue with LinkedIn
              </Button>
            </div>

            {isSignUp && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
                      Get started instantly
                    </p>
                    <p className="text-xs text-indigo-700 dark:text-indigo-300 mt-1">
                      Free 14-day trial • No credit card required • Full AI features included
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="text-center">
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}