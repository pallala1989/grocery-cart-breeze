import { Store, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sv-primary to-brand-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Store className="h-6 w-6" />
              <h3 className="text-xl font-bold">SV Provisions</h3>
            </div>
            <p className="text-sm opacity-90">
              ఎస్వీ ప్రొవిజన్స్
            </p>
            <p className="text-sm opacity-80">
              Your trusted neighborhood grocery store providing fresh and quality products at affordable prices.
            </p>
            <p className="text-sm opacity-80">
              తాజా మరియు నాణ్యమైన ఉత్పాదనలను సరసమైన ధరలకు అందించే మీ నమ్మకమైన కిరాణా దుకాణం.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact / సంప్రదింపు</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">prsr4u@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  123 Main Street, Local Area<br />
                  City, State - 500001
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hours / సమయం</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div className="text-sm">
                  <div>Mon-Sat: 7:00 AM - 9:00 PM</div>
                  <div>Sunday: 8:00 AM - 8:00 PM</div>
                </div>
              </div>
              <div className="text-sm opacity-80">
                సోమ-శని: ఉదయం 7:00 - రాత్రి 9:00<br />
                ఆదివారం: ఉదయం 8:00 - రాత్రి 8:00
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us / అనుసరించండి</h4>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-sv-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-sv-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-sv-primary">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <h5 className="font-medium">Quick Links</h5>
              <div className="flex flex-col space-y-1 text-sm">
                <button className="text-left hover:opacity-80 transition-opacity">Privacy Policy</button>
                <button className="text-left hover:opacity-80 transition-opacity">Terms of Service</button>
                <button className="text-left hover:opacity-80 transition-opacity">Return Policy</button>
                <button className="text-left hover:opacity-80 transition-opacity">Help Center</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 SV Provisions. All rights reserved. | Powered by SV Provisions Team
          </p>
          <p className="text-xs opacity-70 mt-1">
            Made with ❤️ for fresh groceries | తాజా కిరాణా సామాను కోసం ❤️ తో తయారు చేయబడింది
          </p>
        </div>
      </div>
    </footer>
  );
}