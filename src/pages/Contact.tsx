
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init('your_public_key_here');

      await emailjs.send(
        'service_sv_provisions',
        'template_contact_form',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'prsr4u@gmail.com'
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:+919876543210', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:prsr4u@gmail.com', '_self');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={0} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-slide-in">
          <h1 className="text-4xl font-bold bg-gradient-fresh bg-clip-text text-transparent mb-4">
            Contact Us / మాతో సంప్రదించండి
          </h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you / మేము మీ అభిప్రాయాలను వినాలనుకుంటున్నాము
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="animate-slide-in bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle>Send us a message / మాకు సందేశం పంపండి</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name / పేరు</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name / మీ పేరు"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email / ఇమెయిల్</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone / ఫోన్</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number / మీ ఫోన్ నంబర్"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message / సందేశం</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message / మీ సందేశం"
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-fresh hover:opacity-90 text-white shadow-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending... / పంపుతోంది...' : 'Send Message / సందేశం పంపండి'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="animate-slide-in bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Get in Touch / సంప్రదించండి</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors w-full text-left"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone / ఫోన్</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </button>
                
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors w-full text-left"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email / ఇమెయిల్</p>
                    <p className="text-sm text-muted-foreground">prsr4u@gmail.com</p>
                  </div>
                </button>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Address / చిరునామా</p>
                    <p className="text-sm text-muted-foreground">
                      123 Main Street, Local Area<br />
                      City, State - 500001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-in bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Business Hours / వ్యాపార సమయం</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 p-3 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Operating Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Sat: 7:00 AM - 9:00 PM<br />
                      Sunday: 8:00 AM - 8:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      సోమ-శని: ఉదయం 7:00 - రాత్రి 9:00<br />
                      ఆదివారం: ఉదయం 8:00 - రాత్రి 8:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
