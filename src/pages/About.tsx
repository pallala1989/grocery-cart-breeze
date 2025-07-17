
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Users, Truck, Star, Clock } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-fresh-green" />,
      title: "Fresh & Organic",
      titleTe: "తాజా & సేంద్రీయ",
      description: "We source the freshest produce directly from local farmers",
      descriptionTe: "మేము స్థానిక రైతుల నుండి నేరుగా తాజా ఉత్పాదనలను సేకరిస్తాము"
    },
    {
      icon: <Heart className="h-8 w-8 text-destructive" />,
      title: "Quality Guaranteed",
      titleTe: "నాణ్యత హామీ",
      description: "Every product is carefully selected and quality checked",
      descriptionTe: "ప్రతి ఉత్పాదనను జాగ్రత్తగా ఎంపిక చేసి నాణ్యత పరీక్షించుతాము"
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Family Business",
      titleTe: "కుటుంబ వ్యాపారం",
      description: "Serving the community with love and care for generations",
      descriptionTe: "తరతరాలుగా ప్రేమ మరియు శ్రద్ధతో సమాజానికి సేవ చేస్తున్నాము"
    },
    {
      icon: <Truck className="h-8 w-8 text-cart-orange" />,
      title: "Fast Delivery",
      titleTe: "వేగవంతమైన డెలివరీ",
      description: "Quick and reliable delivery service to your doorstep",
      descriptionTe: "మీ ఇంటి వద్దకు వేగవంతమైన మరియు నమ్మకమైన డెలివరీ సేవ"
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers", labelTe: "సంతోషకరమైన కస్టమర్లు" },
    { number: "10+", label: "Years Experience", labelTe: "సంవత్సరాల అనుభవం" },
    { number: "500+", label: "Products", labelTe: "ఉత్పాదనలు" },
    { number: "24/7", label: "Support", labelTe: "మద్దతు" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={0} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-fresh bg-clip-text text-transparent mb-4">
            About SV Provisions
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            ఎస్వీ ప్రొవిజన్స్ గురించి
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted neighborhood grocery store providing fresh and quality products 
            at affordable prices for over a decade.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            దశాబ్దానికి మించి సరసమైన ధరలకు తాజా మరియు నాణ్యమైన ఉత్పాదనలను 
            అందించే మీ నమ్మకమైన కిరాణా దుకాణం.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center animate-slide-in bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm font-medium">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.labelTe}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-fresh bg-clip-text text-transparent">
            Why Choose Us? / మమమ్ములను ఎందుకు ఎంచుకోవాలి?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="animate-slide-in bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{feature.titleTe}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">{feature.description}</p>
                  <p className="text-xs text-muted-foreground">{feature.descriptionTe}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <Card className="animate-slide-in bg-gradient-card shadow-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center bg-gradient-fresh bg-clip-text text-transparent">
              Our Mission / మా లక్ష్యం
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg leading-relaxed">
              To provide fresh, quality groceries to our community while supporting local farmers 
              and maintaining affordable prices for all families.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              స్థానిక రైతులకు మద్దతు ఇస్తూ మరియు అన్ని కుటుంబాలకు సరసమైన ధరలను 
              కొనసాగిస్తూ మా సమాజానికి తాజా, నాణ్యమైన కిరాణా సామాను అందించడం.
            </p>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="animate-slide-in bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Star className="h-10 w-10 text-cart-orange" />
              </div>
              <CardTitle className="text-center">Excellence / శ్రేష్ఠత</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm">
                We strive for excellence in everything we do, from product selection to customer service.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-in bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-10 w-10 text-destructive" />
              </div>
              <CardTitle className="text-center">Trust / నమ్మకం</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm">
                Building lasting relationships with our customers through honesty and reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-in bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-10 w-10 text-brand-blue" />
              </div>
              <CardTitle className="text-center">Service / సేవ</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm">
                Committed to providing exceptional service and support to our valued customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
