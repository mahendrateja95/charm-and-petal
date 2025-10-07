import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Smartphone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<any>(null);
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    if (!orderId) {
      navigate("/");
      return;
    }
    fetchOrder();
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("id", orderId)
        .single();

      if (error) throw error;
      setOrder(data);
    } catch (error) {
      toast.error("Failed to load order");
      navigate("/");
    }
  };

  const handlePayment = async () => {
    toast.info("Redirecting to PhonePe...");
    
    setTimeout(async () => {
      try {
        const { error } = await supabase
          .from("orders")
          .update({
            payment_status: "completed",
            status: "confirmed",
          })
          .eq("id", orderId);

        if (error) throw error;

        setPaymentComplete(true);
        toast.success("Payment successful!");
      } catch (error) {
        toast.error("Payment failed. Please try again.");
      }
    }, 2000);
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <CheckCircle className="h-24 w-24 text-primary mx-auto mb-6" />
              <h1 className="font-playfair text-4xl font-bold mb-4">
                Order Confirmed!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your order has been placed and will reach your doorstep soon.
              </p>
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-2">Order ID</p>
                <p className="font-mono font-semibold">{orderId}</p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => navigate("/orders")} size="lg">
                  View Orders
                </Button>
                <Button onClick={() => navigate("/shop")} variant="outline" size="lg">
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-12 text-center">
            <Smartphone className="h-24 w-24 text-primary mx-auto mb-6" />
            <h1 className="font-playfair text-4xl font-bold mb-4">
              Complete Payment
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              You will be redirected to PhonePe to complete your payment securely.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Order Total</span>
                <span className="font-bold text-xl">₹{order.total_amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-primary">
                <span>Delivery</span>
                <span className="font-semibold">FREE</span>
              </div>
            </div>

            <Button onClick={handlePayment} size="lg" className="w-full">
              Pay with PhonePe
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              Secure payment powered by PhonePe UPI
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;