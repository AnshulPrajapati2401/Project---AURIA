import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Zap, 
  Download, 
  Eye, 
  Plus, 
  Trash2,
  Sparkles,
  Bot,
  Target,
  Palette,
  Code,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Save,
  Moon,
  Sun,
  RefreshCw,
  Award,
  User,
  MapPin,
  Phone,
  Mail,
  Globe,
  Github,
  Linkedin
} from "lucide-react";
import { useState } from "react";

interface ResumeBuilderProps {
  onNavigate?: (page: string) => void;
}

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio?: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  year: string;
  gpa?: string;
}

interface Project {
  id: string;
  name: string;
  technologies: string;
  description: string;
  link?: string;
}

type ResumeTemplate = 'modern-professional' | 'creative' | 'minimalist' | 'tech-developer' | 'student-graduate';

interface TemplateConfig {
  id: ResumeTemplate;
  name: string;
  description: string;
  icon: any;
  preview: string;
  color: string;
}

export function ResumeBuilder({ onNavigate }: ResumeBuilderProps) {
  const [activeSection, setActiveSection] = useState('personal');
  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>('modern-professional');
  const [atsScore, setAtsScore] = useState(85);
  const [isDarkPreview, setIsDarkPreview] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: 'Alex Smith',
    email: 'alex.smith@email.com',
    phone: '+91 98765 43210',
    location: 'Bangalore, India',
    linkedin: 'linkedin.com/in/alexsmith',
    github: 'github.com/alexsmith',
    portfolio: 'alexsmith.dev'
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'TechCorp India Pvt Ltd',
      location: 'Bangalore, India',
      startDate: '2022-01',
      endDate: 'Present',
      description: 'Led development of React-based applications serving 100K+ users. Improved performance by 40% through code optimization and implemented CI/CD pipelines reducing deployment time by 60%.'
    }
  ]);

  const [education, setEducation] = useState<Education>({
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Indian Institute of Technology, Delhi',
    year: '2020',
    gpa: '8.7'
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'E-commerce Platform',
      technologies: 'React, Node.js, MongoDB, AWS',
      description: 'Built a full-stack e-commerce platform with payment integration, serving 50K+ users with 99.9% uptime.',
      link: 'github.com/alexsmith/ecommerce'
    }
  ]);

  const [skills, setSkills] = useState([
    'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Git', 'MongoDB'
  ]);

  const [summary, setSummary] = useState(
    'Passionate software engineer with 4+ years of experience building scalable web applications. Expertise in React, TypeScript, and cloud technologies. Proven track record of leading teams and delivering high-quality products that drive business growth.'
  );

  const templates: TemplateConfig[] = [
    {
      id: 'modern-professional',
      name: 'Modern Professional',
      description: 'Clean, ATS-optimized, corporate style',
      icon: Briefcase,
      preview: 'Professional layout with clean typography',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Visual layout for designers/creatives',
      icon: Palette,
      preview: 'Colorful design with visual elements',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      description: 'Simple, single-column, content focused',
      icon: Lightbulb,
      preview: 'Clean minimal design',
      color: 'from-gray-500 to-slate-500'
    },
    {
      id: 'tech-developer',
      name: 'Tech/Developer',
      description: 'Project-based, skills-focused, GitHub links',
      icon: Code,
      preview: 'Developer-focused with projects section',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'student-graduate',
      name: 'Student/Graduate',
      description: 'Academic focus, achievements, projects',
      icon: GraduationCap,
      preview: 'Perfect for new graduates',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: User, completed: true },
    { id: 'summary', name: 'Summary', icon: FileText, completed: true },
    { id: 'experience', name: 'Experience', icon: Briefcase, completed: true },
    { id: 'education', name: 'Education', icon: GraduationCap, completed: true },
    { id: 'projects', name: 'Projects', icon: Code, completed: true },
    { id: 'skills', name: 'Skills', icon: Target, completed: true },
  ];

  const handleAIOptimize = async () => {
    setIsOptimizing(true);
    // Simulate AI optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setAtsScore(Math.min(atsScore + Math.floor(Math.random() * 10) + 5, 100));
    setIsOptimizing(false);
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    setExperiences([...experiences, newExp]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      technologies: '',
      description: '',
      link: ''
    };
    setProjects([...projects, newProject]);
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter(proj => proj.id !== id));
  };

  const updateProject = (id: string, field: keyof Project, value: string) => {
    setProjects(projects.map(proj => 
      proj.id === id ? { ...proj, [field]: value } : proj
    ));
  };

  const renderFormSection = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={personalInfo.name}
                  onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={personalInfo.phone}
                  onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={personalInfo.location}
                  onChange={(e) => setPersonalInfo({...personalInfo, location: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={personalInfo.linkedin}
                  onChange={(e) => setPersonalInfo({...personalInfo, linkedin: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <Input
                  id="github"
                  value={personalInfo.github}
                  onChange={(e) => setPersonalInfo({...personalInfo, github: e.target.value})}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="portfolio">Portfolio (Optional)</Label>
                <Input
                  id="portfolio"
                  value={personalInfo.portfolio}
                  onChange={(e) => setPersonalInfo({...personalInfo, portfolio: e.target.value})}
                  placeholder="yourwebsite.com"
                />
              </div>
            </div>
          </div>
        );

      case 'summary':
        return (
          <div className="space-y-4">
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea
              id="summary"
              rows={6}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Write a compelling summary that highlights your key skills and achievements..."
            />
            <Button 
              variant="outline" 
              onClick={handleAIOptimize} 
              className="w-full" 
              disabled={isOptimizing}
            >
              {isOptimizing ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Optimize Summary
                </>
              )}
            </Button>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="border">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Experience {index + 1}</CardTitle>
                    {experiences.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeExperience(exp.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Job Title</Label>
                      <Input
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                        placeholder="Senior Software Engineer"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Company</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        placeholder="TechCorp Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                        placeholder="Bangalore, India"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>End Date</Label>
                        <Input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      rows={4}
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      placeholder="Describe your achievements and responsibilities using action verbs and quantified results..."
                    />
                    <Button variant="outline" size="sm" onClick={handleAIOptimize}>
                      <Bot className="w-4 h-4 mr-2" />
                      AI Enhance Description
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button variant="outline" onClick={addExperience} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Experience
            </Button>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="degree">Degree</Label>
                <Input
                  id="degree"
                  value={education.degree}
                  onChange={(e) => setEducation({...education, degree: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="school">School</Label>
                <Input
                  id="school"
                  value={education.school}
                  onChange={(e) => setEducation({...education, school: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Graduation Year</Label>
                <Input
                  id="year"
                  value={education.year}
                  onChange={(e) => setEducation({...education, year: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA (Optional)</Label>
                <Input
                  id="gpa"
                  value={education.gpa}
                  onChange={(e) => setEducation({...education, gpa: e.target.value})}
                  placeholder="8.7"
                />
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={project.id} className="border">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Project {index + 1}</CardTitle>
                    {projects.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeProject(project.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Project Name</Label>
                      <Input
                        value={project.name}
                        onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                        placeholder="E-commerce Platform"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Technologies Used</Label>
                      <Input
                        value={project.technologies}
                        onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Project Link (Optional)</Label>
                    <Input
                      value={project.link}
                      onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                      placeholder="github.com/username/project or live-demo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      rows={3}
                      value={project.description}
                      onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                      placeholder="Describe your project, its impact, and key achievements..."
                    />
                    <Button variant="outline" size="sm" onClick={handleAIOptimize} disabled={isOptimizing}>
                      <Bot className="w-4 h-4 mr-2" />
                      AI Enhance Description
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button variant="outline" onClick={addProject} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-4">
            <Label>Technical Skills</Label>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                  <button
                    onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add a skill..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const value = e.currentTarget.value.trim();
                    if (value && !skills.includes(value)) {
                      setSkills([...skills, value]);
                      e.currentTarget.value = '';
                    }
                  }
                }}
              />
              <Button variant="outline">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderResumePreview = () => {
    const template = templates.find(t => t.id === selectedTemplate);
    const isDark = isDarkPreview;
    const bgColor = isDark ? 'bg-slate-900 text-white' : 'bg-white text-black';
    const borderColor = isDark ? 'border-slate-700' : 'border-gray-200';
    
    return (
      <div className={`${bgColor} border ${borderColor} rounded-lg p-8 min-h-[600px] text-sm transition-all duration-300 shadow-lg`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">{personalInfo.name || 'Your Name'}</h1>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-2">
            {personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {personalInfo.phone}
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {personalInfo.location}
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 text-sm">
            {personalInfo.linkedin && (
              <div className="flex items-center gap-1 text-blue-600">
                <Linkedin className="w-3 h-3" />
                {personalInfo.linkedin}
              </div>
            )}
            {personalInfo.github && (
              <div className="flex items-center gap-1 text-blue-600">
                <Github className="w-3 h-3" />
                {personalInfo.github}
              </div>
            )}
            {personalInfo.portfolio && (
              <div className="flex items-center gap-1 text-blue-600">
                <Globe className="w-3 h-3" />
                {personalInfo.portfolio}
              </div>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {summary && (
          <div className="mb-6">
            <h2 className={`font-bold text-base mb-3 pb-1 border-b ${borderColor}`}>PROFESSIONAL SUMMARY</h2>
            <p className="text-justify leading-relaxed">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experiences.length > 0 && experiences[0].title && (
          <div className="mb-6">
            <h2 className={`font-bold text-base mb-3 pb-1 border-b ${borderColor}`}>PROFESSIONAL EXPERIENCE</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="font-medium text-muted-foreground mb-2">
                  {exp.company}{exp.location && `, ${exp.location}`}
                </p>
                <p className="leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && projects[0].name && (
          <div className="mb-6">
            <h2 className={`font-bold text-base mb-3 pb-1 border-b ${borderColor}`}>PROJECTS</h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold">{project.name}</h3>
                  {project.link && (
                    <span className="text-xs text-blue-600">{project.link}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-1">{project.technologies}</p>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.degree && (
          <div className="mb-6">
            <h2 className={`font-bold text-base mb-3 pb-1 border-b ${borderColor}`}>EDUCATION</h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{education.degree}</h3>
                <p className="text-muted-foreground">{education.school}</p>
                {education.gpa && <p className="text-sm text-muted-foreground">GPA: {education.gpa}</p>}
              </div>
              <span className="text-sm text-muted-foreground">{education.year}</span>
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className={`font-bold text-base mb-3 pb-1 border-b ${borderColor}`}>TECHNICAL SKILLS</h2>
            <p className="leading-relaxed">{skills.join(' • ')}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Resume Builder</h1>
          <p className="text-muted-foreground mt-2">Build an ATS-optimized resume with AI assistance</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="bg-green-100 text-green-700 border-0 px-3 py-2">
            <Award className="w-4 h-4 mr-2" />
            ATS Score: {atsScore}%
          </Badge>
        </div>
      </div>

      {/* Template Selector */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Template: {templates.find(t => t.id === selectedTemplate)?.name}
              </CardTitle>
              <CardDescription>Choose from professional resume templates</CardDescription>
            </div>
            <Dialog open={showTemplateSelector} onOpenChange={setShowTemplateSelector}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  Change Template
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Choose Resume Template</DialogTitle>
                  <DialogDescription>
                    Select a template that best fits your career level and industry
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {templates.map((template) => {
                    const Icon = template.icon;
                    return (
                      <Card 
                        key={template.id}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                          selectedTemplate === template.id 
                            ? 'ring-2 ring-indigo-500 bg-indigo-50 dark:bg-indigo-950' 
                            : 'hover:shadow-md'
                        }`}
                        onClick={() => {
                          setSelectedTemplate(template.id);
                          setShowTemplateSelector(false);
                        }}
                      >
                        <CardHeader className="pb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${template.color} flex items-center justify-center mb-3`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-lg">{template.name}</CardTitle>
                          <CardDescription>{template.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{template.preview}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
      </Card>

      {/* Dual Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Form */}
        <div className="space-y-6">
          {/* Section Navigation */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle>Resume Sections</CardTitle>
              <CardDescription>Complete each section to build your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveSection(section.id)}
                      className={`justify-start ${activeSection === section.id ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : ''}`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {section.name}
                      {section.completed && (
                        <CheckCircle className="w-3 h-3 ml-auto text-green-600" />
                      )}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Form Content */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle>
                {sections.find(s => s.id === activeSection)?.name}
              </CardTitle>
              <CardDescription>
                Fill in your information for this section
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderFormSection()}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600">
              <Save className="w-4 h-4 mr-2" />
              Save Resume
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Right Panel - Live Preview */}
        <div className="space-y-6">
          {/* Preview Controls */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Live Preview
                  </CardTitle>
                  <CardDescription>Real-time preview of your resume</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsDarkPreview(!isDarkPreview)}
                  >
                    {isDarkPreview ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* ATS Score & Optimization */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                ATS Score Checker
              </CardTitle>
              <CardDescription>Optimize your resume for applicant tracking systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>ATS Compatibility</span>
                  <Badge variant={atsScore >= 90 ? "default" : atsScore >= 70 ? "secondary" : "destructive"}>
                    {atsScore}%
                  </Badge>
                </div>
                <Progress value={atsScore} className="h-2" />
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• ✅ Contact information properly formatted</p>
                  <p>• ✅ Professional keywords included</p>
                  <p>• ⚠️ Consider adding more quantified achievements</p>
                  <p>• ⚠️ Include relevant industry keywords</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={handleAIOptimize} 
                  className="w-full"
                  disabled={isOptimizing}
                >
                  {isOptimizing ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Applying AI Improvements...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      AI Improvements
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resume Preview */}
          <div className="max-h-[800px] overflow-y-auto">
            {renderResumePreview()}
          </div>
        </div>
      </div>
    </div>
  );
}