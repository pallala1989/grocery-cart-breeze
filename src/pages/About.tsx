import { Store, Users, Award, Leaf, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-4xl font-bold bg-gradient-fresh bg-clip-text text-transparent mb-4">
            About SV Provisions
          </h1>
          <h2 className="text-2xl text-muted-foreground mb-6">
            ఎస్వీ ప్రొవిజన్స్ గురించి
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Your trusted neighborhood grocery store committed to providing fresh, quality products 
            at affordable prices. Serving the community with dedication and care.
          </p>
          <p className="text-md text-muted-foreground max-w-3xl mx-auto mt-2">
            తాజా, నాణ్యమైన ఉత్పాదనలను సరసమైన ధరలకు అందించడంలో నిబద్ధతతో ఉన్న మీ నమ్మకమైన కిరాణా దుకాణం.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 animate-float">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-fresh rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-sv-primary mb-2">Fresh Quality</h3>
              <p className="text-sm text-muted-foreground mb-2">తాజా నాణ్యత</p>
              <p className="text-sm">
                We source the freshest produce directly from local farmers and trusted suppliers.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 animate-float" style={{animationDelay: '0.2s'}}>
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-fresh rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-sv-primary mb-2">Best Prices</h3>
              <p className="text-sm text-muted-foreground mb-2">అత్యుత్తম ధరలు</p>
              <p className="text-sm">
                Competitive pricing without compromising on quality. Value for your money.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 animate-float" style={{animationDelay: '0.4s'}}>
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-fresh rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-sv-primary mb-2">Community First</h3>
              <p className="text-sm text-muted-foreground mb-2">సమాజం మొదట</p>
              <p className="text-sm">
                Serving our community with dedication, trust, and personalized service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-sv-primary mb-6">Our Story / మా కథ</h2>
            <div className="space-y-4 text-foreground">
              <p>
                SV Provisions started as a small family business with a simple mission: 
                to provide fresh, quality groceries to our neighbors at fair prices.
              </p>
              <p>
                ఎస్వీ ప్రొవిజన్స్ ఒక చిన్న కుటుంబ వ్యాపారంగా ప్రారంభమైంది, ఒక సాధారణ లక్ష్యంతో: 
                మా పొరుగువారికి తాజా, నాణ్యమైన కిరాణా సామాగ్రిని న్యాయమైన ధరలకు అందించడం.
              </p>
              <p>
                Over the years, we've grown while maintaining our core values of quality, 
                affordability, and exceptional customer service. Today, we're proud to be 
                your trusted grocery partner.
              </p>
              <p className="text-muted-foreground">
                సంవత్సరాలుగా, మేము నాణ్యత, సరసమైన ధర మరియు అసాధారణ కస్టమర్ సేవ యొక్క 
                మా ప్రధాన విలువలను కొనసాగిస్తూ అభివృద్ధి చెందాము.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center bg-sv-primary text-white">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Service</div>
                <div className="text-xs opacity-80">సేవా సంవత్సరాలు</div>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center bg-cart-orange text-white">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Happy Customers</div>
                <div className="text-xs opacity-80">సంతృప్త కస్టమర్లు</div>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center bg-brand-blue text-white">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm">Products</div>
                <div className="text-xs opacity-80">ఉత్పాదనలు</div>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center bg-fresh-green text-white">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Online Service</div>
                <div className="text-xs opacity-80">ఆన్‌లైన్ సేవ</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location & Hours */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-sv-primary mr-2" />
                <h3 className="text-xl font-bold text-sv-primary">Location / స్థానం</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium">SV Provisions</p>
                <p className="text-sm text-muted-foreground">
                  123 Main Street, Local Area<br />
                  City, State - 500001<br />
                  Near Central Bus Station
                </p>
                <p className="text-sm text-muted-foreground">
                  సెంట్రల్ బస్ స్టేషన్ దగ్గర<br />
                  123 మెయిన్ స్ట్రీట్, లోకల్ ఏరియా
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-gradient-card border-0 shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-sv-primary mr-2" />
                <h3 className="text-xl font-bold text-sv-primary">Business Hours / సమయం</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Saturday</span>
                  <span>7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>సోమవారం - శనివారం</span>
                  <span>ఉదయం 7:00 - రాత్రి 9:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>ఆదివారం</span>
                  <span>ఉదయం 8:00 - రాత్రి 8:00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}