import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Handcrafted with love, designed for elegance
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-6 w-6 text-primary fill-primary" />
                <h2 className="font-playfair text-2xl font-bold">Our Story</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to Blossom Boutique, where every accessory tells a story of craftsmanship and beauty. 
                We are passionate about creating elegant, handcrafted accessories that add a touch of charm to your everyday style.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each piece in our collection is carefully crafted with attention to detail, using high-quality materials 
                and beautiful pastel colors that reflect femininity and grace. From our delicate scrunchies to our elegant 
                clutches, every item is made with love and care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that accessories should not only complement your outfit but also express your unique personality. 
                That's why we create pieces that are both beautiful and practical, designed to make you feel special every day.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:hello@blossomboutique.in" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@blossomboutique.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-muted-foreground">
                      Blossom Boutique<br />
                      Mumbai, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Monday - Saturday: 10:00 AM - 7:00 PM<br />
                  Sunday: 11:00 AM - 5:00 PM
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardContent className="p-8">
              <h2 className="font-playfair text-2xl font-bold mb-6">Customer Reviews</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-muted-foreground mb-2">
                    "The scrunchies are absolutely beautiful! The quality is amazing and they look so elegant. 
                    I've received so many compliments!"
                  </p>
                  <p className="font-semibold text-sm">- Priya Sharma</p>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-muted-foreground mb-2">
                    "I bought the clutch for a wedding and it was perfect! The craftsmanship is outstanding. 
                    Will definitely order again!"
                  </p>
                  <p className="font-semibold text-sm">- Ananya Verma</p>
                </div>

                <div className="border-l-4 border-accent pl-4">
                  <p className="text-muted-foreground mb-2">
                    "The phone charms are so cute and unique! They make my phone look so pretty. 
                    Fast delivery and excellent packaging too."
                  </p>
                  <p className="font-semibold text-sm">- Riya Patel</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;