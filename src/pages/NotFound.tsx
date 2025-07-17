
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center animate-slide-in bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="text-6xl font-bold bg-gradient-fresh bg-clip-text text-transparent mb-4">
            404
          </CardTitle>
          <h2 className="text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            పేజీ దొరకలేదు
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-sm text-muted-foreground">
            మీరు వెతుకుతున్న పేజీ ఉనికిలో లేదు లేదా తరలించబడింది.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild variant="outline" className="flex-1">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back / వెనుకకు
              </Link>
            </Button>
            <Button asChild className="flex-1 bg-gradient-fresh hover:opacity-90 text-white">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Home / హోమ్
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
