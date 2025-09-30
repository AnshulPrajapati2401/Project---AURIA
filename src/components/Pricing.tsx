import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

interface PricingProps {
  onNavigate?: (page: string) => void;
}

const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '₹199',
    period: '/month',
    description: 'Perfect for getting started',
    icon: Star,
    popular: false,
    features: [
      'AI Resume Builder',
      '3 Resume Templates',
      'Basic ATS Optimization',
      '5 Mock Interviews/month',
      'Email Support',
      'Job Recommendations'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline' as const
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₹499',
    period: '/quarter',
    description: 'Most popular for job seekers',
    icon: Zap,
    popular: true,
    features: [
      'Everything in Basic',
      'All Resume Templates',
      'Advanced AI Optimization',
      'Unlimited Mock Interviews',
      'Coding Practice Platform',
      'Priority Support',
      'Interview Recording & Analysis',
      'Skills Gap Analysis'
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'default' as const
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹999',
    period: '/year',
    description: 'Complete career transformation',
    icon: Crown,
    popular: false,
    features: [
      'Everything in Professional',
      'Personal Career Coach',
      'Custom Resume Writing',
      'LinkedIn Profile Optimization',
      'Salary Negotiation Guide',
      '1-on-1 Career Consultation',
      'Company-specific Prep',
      'Lifetime Updates'
    ],
    buttonText: 'Go Premium',
    buttonVariant: 'outline' as const
  }
];

export function Pricing({ onNavigate }: PricingProps) {
  const handleSelectPlan = (planId: string) => {
    // Simulate plan selection
    console.log(`Selected plan: ${planId}`);
    // In a real app, this would redirect to payment or show a modal
    onNavigate?.('dashboard');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
          Choose Your Plan
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Affordable pricing designed for Indian job seekers. Start your career transformation today.
        </p>
        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-0 px-4 py-2">
          <Star className="w-4 h-4 mr-2" />
          30-day money-back guarantee
        </Badge>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => {
          const Icon = plan.icon;
          return (
            <Card 
              key={plan.id}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-indigo-500 ring-offset-2 scale-105' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-0 px-4 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-indigo-500 to-blue-500' 
                    : 'bg-gradient-to-br from-gray-500 to-gray-600'
                } shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-lg text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  {plan.id === 'professional' && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Save ₹98 compared to monthly
                    </p>
                  )}
                  {plan.id === 'premium' && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Save ₹1,388 compared to monthly
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full py-6 text-base ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white' 
                      : ''
                  }`}
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  {plan.buttonText}
                </Button>
                
                {plan.id === 'professional' && (
                  <p className="text-xs text-center text-muted-foreground">
                    7-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            <CardDescription>Everything you need to know about our pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Is there a free trial?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! Professional plan comes with a 7-day free trial. No credit card required.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Can I cancel anytime?</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely. You can cancel your subscription at any time with no penalties.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What payment methods do you accept?</h4>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards, debit cards, UPI, and net banking.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Is my data secure?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, we use bank-level encryption and never share your personal information.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Do you offer student discounts?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! Students get 50% off on all plans with valid student ID verification.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Can I upgrade or downgrade my plan?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can change your plan anytime. Changes take effect immediately.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold">Ready to accelerate your career?</h3>
        <p className="text-muted-foreground">
          Join thousands of professionals who've landed their dream jobs with AURIA
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600"
            onClick={() => handleSelectPlan('professional')}
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => onNavigate?.('dashboard')}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}