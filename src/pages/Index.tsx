import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import scrunchie1 from "@/assets/scrunchie-1.jpg";
import phoneCharm1 from "@/assets/phone-charm-1.jpg";
import flowerClip1 from "@/assets/flower-clip-1.jpg";
import clutch1 from "@/assets/clutch-1.jpg";

const Index = () => {
  const categories = [
    {
      name: "Scrunchies",
      image: scrunchie1,
      link: "/shop?category=scrunchies",
      description: "Soft & elegant hair accessories",
    },
    {
      name: "Phone Charms",
      image: phoneCharm1,
      link: "/shop?category=phone-charms",
      description: "Cute charms for your phone",
    },
    {
      name: "Flower Clips",
      image: flowerClip1,
      link: "/shop?category=flower-clips",
      description: "Beautiful floral hair clips",
    },
    {
      name: "Clutches",
      image: clutch1,
      link: "/shop?category=clutches",
      description: "Elegant evening bags",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Handcrafted with Love
            </span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Blossom Boutique
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Discover elegant accessories that add a touch of beauty to every moment
          </p>
          <Link to="/shop">
            <Button size="lg" className="shadow-elegant hover:shadow-hover transition-all">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">
            Explore our collection of handcrafted accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group animate-fade-in"
            >
              <div className="relative overflow-hidden rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300">
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Handcrafted Quality</h3>
              <p className="text-sm text-muted-foreground">
                Each piece is carefully made with attention to detail
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy free delivery on all orders across India
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                Safe and secure payment through PhonePe
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;