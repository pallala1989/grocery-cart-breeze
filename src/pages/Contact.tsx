import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message sent! / సందేశం పంపబడింది!",
      description: "We'll get back to you soon. / మేము త్వరలో మీకు సమాధానం ఇస్తాము.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-in">
          <h1 className="text-4xl font-bold bg-gradient-fresh bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <h2 className="text-2xl text-muted-foreground mb-6">
            మాతో సంప్రదించండి
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Get in touch with us for any questions, suggestions, or orders.
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-2">
            మీ నుండి వినడానికి మేము ఆసక్తిగా ఉన్నాము! ఏదైనా ప్రశ్నలు, సూచనలు లేదా ఆర్డర్లు కోసం మాతో సంప్రదించండి.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-sv-primary">
                <MessageSquare className="h-6 w-6 mr-2" />
                Send us a message / మాకు సందేశం పంపండి
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name / పేరు</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name / మీ పేరు"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone / ఫోన్</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email / ఇమెయిల్</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message / సందేశం</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you? / మేము మీకు ఎలా సహాయం చేయగలము?"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-fresh hover:opacity-90 text-white shadow-glow"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message / సందేశం పంపండి
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-fresh rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sv-primary mb-1">Phone / ఫోన్</h3>
                    <p className="text-lg font-medium">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">
                      Call us for quick orders and queries
                    </p>
                    <p className="text-xs text-muted-foreground">
                      త్వరిత ఆర్డర్లు మరియు ప్రశ్నల కోసం కాల్ చేయండి
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cart-orange rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sv-primary mb-1">Email / ఇమెయిల్</h3>
                    <p className="text-lg font-medium">prsr4u@gmail.com</p>
                    <p className="text-sm text-muted-foreground">
                      Send us your requirements and feedback
                    </p>
                    <p className="text-xs text-muted-foreground">
                      మీ అవసరాలు మరియు ఫీడ్‌బ్యాక్ మాకు పంపండి
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sv-primary mb-1">Address / చిరునామా</h3>
                    <p className="text-sm font-medium">SV Provisions</p>
                    <p className="text-sm">
                      123 Main Street, Local Area<br />
                      City, State - 500001<br />
                      Near Central Bus Station
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      సెంట్రల్ బస్ స్టేషన్ దగ్గర<br />
                      123 మెయిన్ స్ట్రీట్, లోకల్ ఏరియా
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fresh-green rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-sv-primary mb-3">Business Hours / వ్యాపార సమయం</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Monday - Saturday</span>
                        <span className="text-sm font-medium">7:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>సోమవారం - శనివారం</span>
                        <span>ఉదయం 7:00 - రాత్రి 9:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Sunday</span>
                        <span className="text-sm font-medium">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>ఆదివారం</span>
                        <span>ఉదయం 8:00 - రాత్రి 8:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-sv-primary mb-4 text-center">
                Find Us / మాకు దారి
              </h3>
              <div className="bg-muted rounded-lg p-8 text-center">
                <MapPin className="h-16 w-16 text-sv-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map would be integrated here in a full implementation
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  పూర్తి అమలులో ఇంటరాక్టివ్ మ్యాప్ ఇక్కడ ఇంటిగ్రేట్ చేయబడుతుంది
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}