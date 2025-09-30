import { useState, useEffect } from "react";
import { AuthPage } from "./components/AuthPage";
import { Dashboard } from "./components/Dashboard";
import { ResumeBuilder } from "./components/ResumeBuilder";
import { InterviewCoach } from "./components/InterviewCoach";
import { FeedbackReport } from "./components/FeedbackReport";
import { CodingPractice } from "./components/CodingPractice";
import { MockTests } from "./components/MockTests";
import { TechNews } from "./components/TechNews";
import { JobRecommendations } from "./components/JobRecommendations";
import { Rankings } from "./components/Rankings";
import { AuriaScore } from "./components/AuriaScore";
import { ProgressCalendar } from "./components/ProgressCalendar";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Avatar, AvatarFallback } from "./components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import {
  LayoutDashboard,
  FileText,
  Video,
  BarChart3,
  Code,
  Search,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  User,
  Settings,
  Target,
  Globe,
  Briefcase,
  Calendar,
  TrendingUp,
  Trophy,
} from "lucide-react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isThemeTransitioning, setIsThemeTransitioning] =
    useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (
      savedTheme === "dark" ||
      (!savedTheme && systemPrefersDark)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (isThemeTransitioning) return;

    const newTheme = !isDarkMode;
    setIsThemeTransitioning(true);

    // Add button ripple effect
    const button = event.currentTarget;
    button.classList.add("active");

    // Quick theme change with smooth transition
    setTimeout(() => {
      setIsDarkMode(newTheme);

      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, 100);

    // Clean up
    setTimeout(() => {
      button.classList.remove("active");
      setIsThemeTransitioning(false);
    }, 300);
  };

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage("dashboard");
  };

  if (!isAuthenticated) {
    if (isLoading) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
          <div className="text-center space-y-8">
            {/* Animated Logo */}
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl mx-auto animate-bounce">
                <span className="text-white text-3xl font-bold">
                  A
                </span>
              </div>
              {/* Orbital rings */}
              <div className="absolute inset-0 w-20 h-20 mx-auto">
                <div
                  className="absolute inset-0 border-2 border-indigo-200 dark:border-indigo-800 rounded-full animate-spin"
                  style={{
                    width: "120px",
                    height: "120px",
                    left: "-25px",
                    top: "-25px",
                  }}
                ></div>
                <div
                  className="absolute inset-0 border-2 border-blue-200 dark:border-blue-800 rounded-full animate-ping"
                  style={{
                    width: "100px",
                    height: "100px",
                    left: "-15px",
                    top: "-15px",
                  }}
                ></div>
              </div>
            </div>

            {/* AI-style text */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                AURIA AI
              </h2>
              <div className="space-y-2">
                <p className="text-lg font-medium text-foreground">
                  Initializing AI Career Coach...
                </p>
                <p className="text-sm text-muted-foreground">
                  Setting up your personalized workspace
                </p>
              </div>
            </div>

            {/* Futuristic progress bar */}
            <div className="space-y-3">
              <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto relative">
                <div className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 rounded-full animate-pulse absolute inset-0"></div>
                <div className="h-full w-8 bg-white rounded-full absolute inset-0 animate-pulse shadow-lg opacity-50"></div>
              </div>

              {/* Loading dots */}
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>

            {/* Status messages */}
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>✓ AI Resume Analyzer loaded</p>
              <p>✓ Interview Coach initialized</p>
              <p>⏳ Personalizing your experience...</p>
            </div>
          </div>
        </div>
      );
    }
    return <AuthPage onLogin={handleLogin} />;
  }

  const navigation = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    { id: "resume", name: "Resume Builder", icon: FileText },
    { id: "coding", name: "Coding Practice", icon: Code },
    { id: "interview", name: "Interview Coach", icon: Video },
    {
      id: "jobs",
      name: "Job Recommendations",
      icon: Briefcase,
    },
    { id: "technews", name: "Tech News", icon: Globe },
    { id: "auriascore", name: "AURIA Score", icon: Trophy },
    {
      id: "feedback",
      name: "Feedback Reports",
      icon: BarChart3,
    },
  ];

  const sidebarSections = [
    { id: "mocktest", name: "Mock Tests", icon: Target },
    { id: "rankings", name: "My Rankings", icon: Trophy },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard onNavigate={setCurrentPage} />;
      case "resume":
        return <ResumeBuilder onNavigate={setCurrentPage} />;
      case "interview":
        return <InterviewCoach onNavigate={setCurrentPage} />;
      case "feedback":
        return <FeedbackReport onNavigate={setCurrentPage} />;
      case "coding":
        return <CodingPractice onNavigate={setCurrentPage} />;
      case "mocktest":
        return <MockTests onNavigate={setCurrentPage} />;
      case "jobs":
        return (
          <JobRecommendations onNavigate={setCurrentPage} />
        );
      case "auriascore":
        return <AuriaScore onNavigate={setCurrentPage} />;
      case "technews":
        return <TechNews onNavigate={setCurrentPage} />;
      case "rankings":
        return <Rankings onNavigate={setCurrentPage} />;
      case "mocktest":
        return <MockTests onNavigate={setCurrentPage} />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div
      className={`flex h-screen bg-background transition-all duration-300 ease-out ${isThemeTransitioning ? "theme-transitioning" : ""}`}
    >
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm"></div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              AURIA
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden hover:bg-accent"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] ${
                    currentPage === item.id
                      ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/25"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Sidebar Sections */}
          <div className="mt-8">
            <h4 className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Resources
            </h4>
            <div className="space-y-1">
              {sidebarSections.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] ${
                      currentPage === item.id
                        ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/25"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top header */}
        <header className="bg-card border-b border-border shadow-sm transition-all duration-300 ease-out">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden hover:bg-accent"
              >
                <Menu className="w-4 h-4" />
              </Button>

              <div className="hidden lg:block">
                <h1 className="text-lg font-medium text-foreground">
                  Welcome back, Alex 👋
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-64 bg-input-background border-0 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {/* Progress Calendar */}
              <ProgressCalendar />

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`
                  theme-toggle-button
                  hover:bg-accent hover:scale-105 
                  transition-all duration-200 
                  rounded-full
                  p-2 h-9 w-9
                  relative
                  ${isThemeTransitioning ? "scale-110" : ""}
                `}
                title={
                  isDarkMode
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
                }
              >
                {isDarkMode ? (
                  <Sun
                    className={`w-4 h-4 text-yellow-500 transition-all duration-300 ${
                      isThemeTransitioning
                        ? "rotate-180 scale-125"
                        : "hover:rotate-12 hover:drop-shadow-lg"
                    }`}
                  />
                ) : (
                  <Moon
                    className={`w-4 h-4 text-slate-600 dark:text-slate-400 transition-all duration-300 ${
                      isThemeTransitioning
                        ? "rotate-180 scale-125"
                        : "hover:-rotate-12 hover:drop-shadow-lg"
                    }`}
                  />
                )}
              </Button>

              {/* User Profile Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full hover:bg-accent"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-sm">
                        AX
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56"
                  align="end"
                  forceMount
                >
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium leading-none">
                      Alex Smith
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      User ID: alex.smith@email.com
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="hover:bg-accent">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-accent">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto transition-all duration-300 ease-out">
          <div className="p-6 animate-fade-in">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}