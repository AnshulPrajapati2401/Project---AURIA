import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  Building2, 
  Star, 
  Heart, 
  ExternalLink, 
  Search, 
  Filter,
  TrendingUp,
  Users,
  Calendar
} from "lucide-react";

const jobRecommendations = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote / Bangalore, India",
    salary: "₹18,00,000 - ₹25,00,000",
    type: "Full-time",
    match: 95,
    description: "We're looking for an experienced frontend developer to join our growing team. You'll work on cutting-edge React applications and collaborate with designers and backend engineers.",
    requirements: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    benefits: ["Health Insurance", "PF/ESIC", "Remote Work", "Learning Budget", "Flexible Hours"],
    posted: "2 days ago",
    applicants: 23,
    featured: true,
    remote: true,
    experience: "Senior",
    logo: "TC"
  },
  {
    id: 2,
    title: "React Developer",
    company: "StartupXYZ",
    location: "Hyderabad, India",
    salary: "₹8,50,000 - ₹12,00,000",
    type: "Full-time",
    match: 88,
    description: "Join our fast-growing startup as a React developer. You'll be working on innovative fintech solutions and have the opportunity to shape our product direction.",
    requirements: ["React", "JavaScript", "Node.js", "MongoDB", "AWS"],
    benefits: ["Equity Package", "Health Insurance", "Gym Membership", "Team Events", "Growth Opportunities"],
    posted: "1 day ago",
    applicants: 45,
    featured: true,
    remote: false,
    experience: "Mid",
    logo: "SX"
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "InnovateInc",
    location: "Mumbai, India",
    salary: "₹15,00,000 - ₹20,00,000",
    type: "Full-time",
    match: 82,
    description: "Looking for a versatile full-stack engineer to work on both frontend and backend systems. Experience with modern web technologies is essential.",
    requirements: ["React", "Node.js", "Python", "PostgreSQL", "Docker"],
    benefits: ["Health Insurance", "PF", "PTO", "Professional Development", "Office Perks"],
    posted: "3 days ago",
    applicants: 67,
    featured: false,
    remote: false,
    experience: "Mid",
    logo: "II"
  },
  {
    id: 4,
    title: "Junior React Developer",
    company: "WebSolutions Ltd",
    location: "Remote",
    salary: "₹5,00,000 - ₹7,50,000",
    type: "Full-time",
    match: 78,
    description: "Great opportunity for a junior developer to grow their skills in React development. We provide mentorship and a supportive learning environment.",
    requirements: ["React", "JavaScript", "HTML/CSS", "Git", "REST APIs"],
    benefits: ["Remote Work", "Mentorship Program", "Learning Budget", "Health Insurance", "Flexible Schedule"],
    posted: "4 days ago",
    applicants: 89,
    featured: false,
    remote: true,
    experience: "Junior",
    logo: "WS"
  },
  {
    id: 5,
    title: "Frontend Team Lead",
    company: "Enterprise Corp",
    location: "Chennai, India",
    salary: "₹22,00,000 - ₹28,00,000",
    type: "Full-time",
    match: 75,
    description: "Lead our frontend team and drive technical decisions for our enterprise-grade applications. Looking for someone with strong leadership and technical skills.",
    requirements: ["React", "TypeScript", "Leadership", "Architecture", "Testing"],
    benefits: ["Stock Options", "Health Insurance", "PF", "Leadership Training", "Conference Budget"],
    posted: "1 week ago",
    applicants: 34,
    featured: false,
    remote: false,
    experience: "Senior",
    logo: "EC"
  },
  {
    id: 6,
    title: "React Native Developer",
    company: "MobileFirst",
    location: "Pune, India",
    salary: "₹12,00,000 - ₹16,00,000",
    type: "Contract",
    match: 72,
    description: "Work on exciting mobile applications using React Native. Experience with both iOS and Android development is preferred.",
    requirements: ["React Native", "JavaScript", "iOS", "Android", "Redux"],
    benefits: ["High Hourly Rate", "Flexible Hours", "Remote Option", "Project Variety"],
    posted: "5 days ago",
    applicants: 56,
    featured: false,
    remote: true,
    experience: "Mid",
    logo: "MF"
  }
];

const savedJobs = [
  { id: 1, title: "Frontend Developer", company: "Google", saved: "2 days ago" },
  { id: 3, title: "Full Stack Engineer", company: "InnovateInc", saved: "1 week ago" },
  { id: 7, title: "UI/UX Developer", company: "Apple", saved: "3 days ago" }
];

const appliedJobs = [
  { id: 2, title: "React Developer", company: "StartupXYZ", applied: "3 days ago", status: "In Review" },
  { id: 8, title: "Senior Developer", company: "Microsoft", applied: "1 week ago", status: "Phone Screen" },
  { id: 9, title: "Tech Lead", company: "Netflix", applied: "2 weeks ago", status: "Final Round" }
];

interface JobRecommendationsProps {
  onNavigate?: (page: string) => void;
}

export function JobRecommendations({ onNavigate }: JobRecommendationsProps) {
  const [selectedJob, setSelectedJob] = useState<typeof jobRecommendations[0] | null>(null);
  const getMatchColor = (match: number) => {
    if (match >= 90) return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
    if (match >= 80) return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300';
    if (match >= 70) return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
    return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300';
  };

  const getExperienceColor = (level: string) => {
    switch (level) {
      case 'Junior': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Mid': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Senior': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Job Recommendations</h1>
          <p className="text-muted-foreground">
            Personalized job matches based on your skills and preferences
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
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for jobs, companies, or skills..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all-locations">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="san-francisco">San Francisco</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                  <SelectItem value="seattle">Seattle</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-experience">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-experience">All Levels</SelectItem>
                  <SelectItem value="junior">Junior</SelectItem>
                  <SelectItem value="mid">Mid-Level</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-base">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Salary Range */}
              <div>
                <label className="text-sm font-medium">Salary Range (₹)</label>
                <div className="mt-2 space-y-3">
                  <Slider defaultValue={[1200000]} max={3000000} step={100000} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹5L</span>
                    <span>₹30L+</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Job Type */}
              <div>
                <label className="text-sm font-medium">Job Type</label>
                <div className="mt-2 space-y-2">
                  {['Full-time', 'Part-time', 'Contract', 'Freelance'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm cursor-pointer">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Experience Level */}
              <div>
                <label className="text-sm font-medium">Experience Level</label>
                <div className="mt-2 space-y-2">
                  {['Junior', 'Mid-Level', 'Senior', 'Lead'].map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox id={level} />
                      <label htmlFor={level} className="text-sm cursor-pointer">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Remote Work */}
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <label htmlFor="remote" className="text-sm cursor-pointer">
                  Remote Work Available
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-base">Your Job Search</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-3 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 rounded-xl">
                <div className="text-xl font-bold text-indigo-600">{jobRecommendations.length}</div>
                <div className="text-xs text-muted-foreground">New matches</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-xl">
                <div className="text-xl font-bold text-green-600">{savedJobs.length}</div>
                <div className="text-xs text-muted-foreground">Saved jobs</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 rounded-xl">
                <div className="text-xl font-bold text-orange-600">{appliedJobs.length}</div>
                <div className="text-xs text-muted-foreground">Applications</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          <Tabs defaultValue="recommendations" className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="recommendations">For You</TabsTrigger>
              <TabsTrigger value="saved">Saved ({savedJobs.length})</TabsTrigger>
              <TabsTrigger value="applied">Applied ({appliedJobs.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="recommendations" className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {jobRecommendations.length} jobs match your profile
                </p>
                <Select defaultValue="match">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="match">Best Match</SelectItem>
                    <SelectItem value="date">Most Recent</SelectItem>
                    <SelectItem value="salary">Salary</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                {jobRecommendations.map((job) => (
                  <Card 
                    key={job.id} 
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${job.featured ? 'ring-2 ring-indigo-200 dark:ring-indigo-800' : ''}`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                          {job.logo}
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-lg">{job.title}</h3>
                                {job.featured && (
                                  <Badge className="bg-indigo-100 text-indigo-700 border-0 text-xs">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Building2 className="w-4 h-4" />
                                  {job.company}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {job.type}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={`${getMatchColor(job.match)} border-0 font-semibold`}>
                                {job.match}% AI Match
                              </Badge>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle save job
                                }}
                              >
                                <Heart className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {job.requirements.slice(0, 4).map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {job.requirements.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{job.requirements.length - 4} more
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1 text-green-600">
                                <span className="font-medium">{job.salary}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>{job.posted}</span>
                              </div>
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <Users className="w-4 h-4" />
                                <span>{job.applicants} applicants</span>
                              </div>
                              <Badge className={`${getExperienceColor(job.experience)} border-0 text-xs`}>
                                {job.experience}
                              </Badge>
                              {job.remote && (
                                <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 border-0 text-xs">
                                  Remote
                                </Badge>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle save job
                                }}
                              >
                                Save Job
                              </Button>
                              <Button 
                                size="sm" 
                                className="bg-indigo-600 hover:bg-indigo-700"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle apply now
                                }}
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saved" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {savedJobs.length} saved jobs
              </p>
              <div className="space-y-4">
                {savedJobs.map((job) => (
                  <Card key={job.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                            {job.company.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-medium">{job.title}</h4>
                            <p className="text-sm text-muted-foreground">{job.company} • Saved {job.saved}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="applied" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {appliedJobs.length} job applications
              </p>
              <div className="space-y-4">
                {appliedJobs.map((job) => (
                  <Card key={job.id} className="border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                            {job.company.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-medium">{job.title}</h4>
                            <p className="text-sm text-muted-foreground">{job.company} • Applied {job.applied}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge 
                            className={`border-0 ${
                              job.status === 'Final Round' ? 'bg-green-100 text-green-700' :
                              job.status === 'Phone Screen' ? 'bg-blue-100 text-blue-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {job.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {selectedJob.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <DialogTitle className="text-2xl">{selectedJob.title}</DialogTitle>
                    {selectedJob.featured && (
                      <Badge className="bg-indigo-100 text-indigo-700 border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {selectedJob.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedJob.type}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge className={`${getMatchColor(selectedJob.match)} border-0 font-semibold`}>
                      {selectedJob.match}% AI Match
                    </Badge>
                    <Badge className={`${getExperienceColor(selectedJob.experience)} border-0`}>
                      {selectedJob.experience}
                    </Badge>
                    {selectedJob.remote && (
                      <Badge className="bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300 border-0">
                        Remote
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6 mt-6">
              {/* Salary and Key Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-xl">
                  <div className="font-medium text-green-600">Salary</div>
                  <div className="text-lg font-bold">{selectedJob.salary}</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-xl">
                  <div className="font-medium text-blue-600">Posted</div>
                  <div className="text-lg font-bold">{selectedJob.posted}</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-xl">
                  <div className="font-medium text-orange-600">Applicants</div>
                  <div className="text-lg font-bold">{selectedJob.applicants}</div>
                </div>
              </div>

              {/* Job Description */}
              <div>
                <h3 className="font-semibold mb-3">Job Description</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedJob.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="font-semibold mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.requirements.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="font-semibold mb-3">Benefits & Perks</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.benefits.map((benefit, index) => (
                    <Badge key={index} className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 border-0 px-3 py-1">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button variant="outline" className="flex-1">
                  <Heart className="w-4 h-4 mr-2" />
                  Save Job
                </Button>
                <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}