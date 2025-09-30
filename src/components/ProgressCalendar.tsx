import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, ChevronLeft, ChevronRight, Target, FileText, Video, Code } from 'lucide-react';

interface ProgressCalendarProps {
  trigger?: React.ReactNode;
}

interface DayActivity {
  date: number;
  activities: {
    resume: number;
    interview: number;
    coding: number;
    tests: number;
  };
}

export function ProgressCalendar({ trigger }: ProgressCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Mock progress data
  const progressData: DayActivity[] = [
    { date: 1, activities: { resume: 2, interview: 1, coding: 3, tests: 1 } },
    { date: 3, activities: { resume: 1, interview: 2, coding: 2, tests: 0 } },
    { date: 5, activities: { resume: 0, interview: 1, coding: 4, tests: 2 } },
    { date: 8, activities: { resume: 3, interview: 0, coding: 1, tests: 1 } },
    { date: 12, activities: { resume: 1, interview: 3, coding: 2, tests: 0 } },
    { date: 15, activities: { resume: 2, interview: 1, coding: 5, tests: 1 } },
    { date: 18, activities: { resume: 0, interview: 2, coding: 3, tests: 2 } },
    { date: 22, activities: { resume: 1, interview: 1, coding: 2, tests: 0 } },
    { date: 25, activities: { resume: 2, interview: 0, coding: 1, tests: 1 } },
    { date: 28, activities: { resume: 1, interview: 2, coding: 4, tests: 1 } },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(currentMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(currentMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const getDayActivity = (day: number) => {
    return progressData.find(item => item.date === day);
  };

  const getTotalActivity = (activities: DayActivity['activities']) => {
    return activities.resume + activities.interview + activities.coding + activities.tests;
  };

  const getActivityColor = (total: number) => {
    if (total === 0) return 'bg-muted';
    if (total <= 2) return 'bg-green-200 dark:bg-green-900';
    if (total <= 4) return 'bg-green-300 dark:bg-green-800';
    if (total <= 6) return 'bg-green-400 dark:bg-green-700';
    return 'bg-green-500 dark:bg-green-600';
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayActivity = getDayActivity(day);
      const totalActivity = dayActivity ? getTotalActivity(dayActivity.activities) : 0;
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === currentMonth.getMonth() && 
                     new Date().getFullYear() === currentMonth.getFullYear();

      days.push(
        <div key={day} className="relative group">
          <div 
            className={`h-12 w-full flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer
              ${getActivityColor(totalActivity)}
              ${isToday ? 'ring-2 ring-indigo-500' : ''}
              hover:scale-105 hover:shadow-md
            `}
          >
            <span className={`text-sm font-medium ${totalActivity > 3 ? 'text-white' : 'text-foreground'}`}>
              {day}
            </span>
          </div>
          
          {/* Tooltip on hover */}
          {dayActivity && (
            <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 bg-popover border border-border rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 min-w-48">
              <p className="font-medium text-sm mb-2">{months[currentMonth.getMonth()]} {day}</p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    Resume
                  </span>
                  <Badge variant="secondary" className="text-xs">{dayActivity.activities.resume}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    Interview
                  </span>
                  <Badge variant="secondary" className="text-xs">{dayActivity.activities.interview}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Code className="w-3 h-3" />
                    Coding
                  </span>
                  <Badge variant="secondary" className="text-xs">{dayActivity.activities.coding}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    Tests
                  </span>
                  <Badge variant="secondary" className="text-xs">{dayActivity.activities.tests}</Badge>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="sm" className="hover:bg-accent">
            <Calendar className="w-4 h-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Progress Calendar
          </DialogTitle>
          <DialogDescription>
            View your daily learning activities and track your progress over time.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('prev')}
              className="hover:bg-accent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h3 className="font-medium">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('next')}
              className="hover:bg-accent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="space-y-2">
            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 text-xs font-medium text-muted-foreground text-center">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            
            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
              {renderCalendarDays()}
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Activity Level</p>
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-muted rounded"></div>
                <span>None</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-200 dark:bg-green-900 rounded"></div>
                <span>Low</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-400 dark:bg-green-700 rounded"></div>
                <span>Medium</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 dark:bg-green-600 rounded"></div>
                <span>High</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}