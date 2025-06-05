"use client"

import { Phone, MapPin, Clock, Star, Zap, Shield, Wrench, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProductGallery from "./components/product-gallery"

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Luminous Zelio+ 1100",
      capacity: "1100VA/12V",
      price: "₹8,500",
      images: [
        "/placeholder.svg?height=300&width=400&text=Luminous+Zelio+1100",
        "/placeholder.svg?height=300&width=400&text=LCD+Display",
        "/placeholder.svg?height=300&width=400&text=Pure+Sine+Wave",
      ],
      features: ["Pure Sine Wave", "LCD Display", "Overload Protection"],
      rating: 4.5,
    },
    {
      id: 2,
      name: "Microtek UPS SEBz 1000VA",
      capacity: "1000VA/12V",
      price: "₹7,200",
      images: [
        "/placeholder.svg?height=300&width=400&text=Microtek+UPS+1000VA",
        "/placeholder.svg?height=300&width=400&text=Auto+Start+Feature",
        "/placeholder.svg?height=300&width=400&text=Battery+Protection",
      ],
      features: ["Auto Start", "Short Circuit Protection", "Low Battery Alarm"],
      rating: 4.3,
    },
    {
      id: 3,
      name: "Sukam Brainy Eco 1600",
      capacity: "1600VA/24V",
      price: "₹12,800",
      images: [
        "/placeholder.svg?height=300&width=400&text=Sukam+Brainy+Eco+1600",
        "/placeholder.svg?height=300&width=400&text=MPPT+Technology",
        "/placeholder.svg?height=300&width=400&text=Solar+Compatible",
      ],
      features: ["MPPT Technology", "Wi-Fi Monitoring", "Solar Compatible"],
      rating: 4.7,
    },
    {
      id: 4,
      name: "Exide Technologies 850VA",
      capacity: "850VA/12V",
      price: "₹6,500",
      images: [
        "/placeholder.svg?height=300&width=400&text=Exide+Technologies+850VA",
        "/placeholder.svg?height=300&width=400&text=Fast+Charging",
        "/placeholder.svg?height=300&width=400&text=Compact+Design",
      ],
      features: ["Fast Charging", "Compact Design", "LED Indicators"],
      rating: 4.2,
    },
    {
      id: 5,
      name: "V-Guard Prime 1150",
      capacity: "1150VA/12V",
      price: "₹9,200",
      images: [
        "/placeholder.svg?height=300&width=400&text=V-Guard+Prime+1150",
        "/placeholder.svg?height=300&width=400&text=Battery+Management",
        "/placeholder.svg?height=300&width=400&text=Bypass+Switch",
      ],
      features: ["Intelligent Battery Management", "Bypass Switch", "Surge Protection"],
      rating: 4.4,
    },
    {
      id: 6,
      name: "APC Back-UPS 1100VA",
      capacity: "1100VA/12V",
      price: "₹11,500",
      images: [
        "/placeholder.svg?height=300&width=400&text=APC+Back-UPS+1100VA",
        "/placeholder.svg?height=300&width=400&text=Voltage+Regulation",
        "/placeholder.svg?height=300&width=400&text=USB+Connectivity",
      ],
      features: ["Automatic Voltage Regulation", "USB Connectivity", "Energy Star Certified"],
      rating: 4.6,
    },
  ]

  // Function to handle phone call
  const handleCall = () => {
    window.open("tel:+919927403117", "_self")
  }

  // Function to handle WhatsApp
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in your inverter products. Please share more details.")
    window.open(`https://wa.me/919927403117?text=${message}`, "_blank")
  }

  // Function to handle location/directions
  const handleLocation = () => {
    const address = encodeURIComponent("Paigu Road, Sirsaganj")
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank")
  }

  // Function to scroll to products section
  const scrollToProducts = () => {
    document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" })
  }

  // Function to scroll to contact section
  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Jain Line Electronic</h1>
                <p className="text-sm text-gray-600 font-medium">Premium Inverter Solutions</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">+91 9927403117</span>
              </div>
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 shadow-lg"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Owner Introduction Banner */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="/images/owner-photo.jpg" alt="Dheeraj Jain - Owner" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">Meet the Owner - Dheeraj Jain</p>
              <p className="text-blue-100">10+ Years Experience • Your Trusted Electronics Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="container mx-auto text-center relative">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-6">
                Trusted Since Years • Sirsaganj's #1 Electronics Store
              </Badge>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
                Jain Line Electronic
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Your most trusted destination for premium quality inverters and complete power backup solutions in
              Sirsaganj. Experience excellence with every purchase and unmatched customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={scrollToProducts}
                className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-lg px-10 py-4 shadow-xl"
              >
                <Zap className="h-5 w-5 mr-2" />
                View Our Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleLocation}
                className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 text-lg px-10 py-4 shadow-lg"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Visit Our Store
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">1000+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">10+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Jain Line Electronic?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just sell inverters - we provide complete power solutions with unmatched quality and service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Quality Guaranteed</h4>
              <p className="text-gray-600 leading-relaxed">
                Every product comes with manufacturer warranty and our personal quality assurance. We stand behind every
                sale.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Expert Installation</h4>
              <p className="text-gray-600 leading-relaxed">
                Professional installation by certified technicians with comprehensive after-sales service and
                maintenance support.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">Customer First</h4>
              <p className="text-gray-600 leading-relaxed">
                Thousands of satisfied customers across Sirsaganj trust us for honest pricing and exceptional service
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Premium Inverter Collection</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated selection of high-performance inverters from India's most trusted brands,
              perfect for homes, offices, and commercial establishments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <ProductGallery images={product.images} productName={product.name} />
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-700 to-indigo-700 px-3 py-1 text-sm font-semibold">
                      {product.capacity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-xl font-bold text-gray-800">{product.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-3xl font-bold text-blue-700 mb-4">{product.price}</CardDescription>
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleCall}
                      className="flex-1 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 py-3 font-semibold shadow-lg"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                    <Button
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="px-4 border-green-500 text-green-600 hover:bg-green-50"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Real Products in Our Store */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-gray-800 mb-4">See Our Actual Store & Products</h4>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit our well-stocked shop and see the wide range of premium batteries and inverters we have in stock
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative group">
                  <img
                    src="/images/product-display-1.jpg"
                    alt="Battery Display - Su-Kam, Jindal, Lenx Diamond"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h5 className="text-xl font-bold mb-2">Premium Battery Collection</h5>
                    <p className="text-sm opacity-90">Su-Kam • Jindal • Lenx Diamond • Dura</p>
                    <div className="flex gap-2 mt-3">
                      <Badge className="bg-green-500 text-white text-xs">In Stock</Badge>
                      <Badge className="bg-blue-500 text-white text-xs">Best Prices</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative group">
                  <img
                    src="/images/product-display-2.jpg"
                    alt="Jain Line Electronic Shop Interior with Dheeraj Jain"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h5 className="text-xl font-bold mb-2">Expert Consultation</h5>
                    <p className="text-sm opacity-90">Professional guidance by Dheeraj Jain</p>
                    <div className="flex gap-2 mt-3">
                      <Badge className="bg-orange-500 text-white text-xs">Expert Advice</Badge>
                      <Badge className="bg-purple-500 text-white text-xs">10+ Years</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={handleCall}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-3 shadow-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Stock Availability
                </Button>
                <Button
                  size="lg"
                  onClick={handleLocation}
                  variant="outline"
                  className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-3"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Visit Our Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-6">
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-4">Meet The Owner</Badge>
                <h3 className="text-4xl font-bold text-gray-800 mb-6">Dheeraj Jain</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over a decade of dedicated experience in the electronics and power solutions industry, I have built
                Jain Line Electronic as Sirsaganj's most trusted destination for premium inverters and electrical
                solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My commitment goes beyond just selling products - I believe in building lasting relationships with every
                customer through honest business practices, competitive pricing, and unmatched after-sales support that
                you can rely on.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Jain Line Electronic, every customer is family, and every solution is crafted with care and
                expertise.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-blue-100 text-blue-800">
                  10+ Years Experience
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-green-100 text-green-800">
                  1000+ Happy Customers
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-purple-100 text-purple-800">
                  Authorized Dealer
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-orange-100 text-orange-800">
                  Expert Technician
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleCall}
                  className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 px-8 py-3 shadow-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: +91 9927403117
                </Button>
                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-3"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative">
                <img
                  src="/images/shop-interior-1.jpg"
                  alt="Dheeraj Jain - Owner of Jain Line Electronic"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-6 rounded-2xl shadow-xl">
                  <p className="font-bold text-lg">Dheeraj Jain</p>
                  <p className="text-sm opacity-90 font-medium">Founder & Owner</p>
                  <p className="text-xs opacity-75 mt-1">Jain Line Electronic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Visit Our Store</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look inside our well-organized shop featuring premium brands and professional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative group">
              <img
                src="/images/shop-interior-1.jpg"
                alt="Jain Line Electronic Shop Interior"
                className="rounded-2xl shadow-xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Professional Service Counter</h4>
                <p className="text-sm opacity-90">Expert consultation and customer service</p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/images/shop-interior-2.jpg"
                alt="Battery and Inverter Display"
                className="rounded-2xl shadow-xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Premium Product Display</h4>
                <p className="text-sm opacity-90">Su-Kam, Jindal, Lenx Diamond & more brands</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={handleLocation}
              className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 px-8 py-4 shadow-xl"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Visit Our Store Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="py-20 px-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Get In Touch Today</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to find the perfect power solution for your needs? Contact Jain Line Electronic today for expert
              consultation and the most competitive prices in Sirsaganj.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              className="bg-white/15 border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={handleCall}
            >
              <CardContent className="p-8 text-center">
                <Phone className="h-10 w-10 mx-auto mb-4 text-blue-200" />
                <h4 className="font-bold text-lg mb-3">Call Us Now</h4>
                <p className="text-blue-100 font-semibold text-lg">+91 9927403117</p>
                <p className="text-blue-200 text-sm mt-2">Available 9 AM - 8 PM</p>
              </CardContent>
            </Card>

            <Card
              className="bg-white/15 border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={handleWhatsApp}
            >
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-10 w-10 mx-auto mb-4 text-blue-200" />
                <h4 className="font-bold text-lg mb-3">WhatsApp</h4>
                <p className="text-blue-100 font-semibold">Quick Response</p>
                <p className="text-blue-200 text-sm mt-2">Instant Support</p>
              </CardContent>
            </Card>

            <Card
              className="bg-white/15 border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={handleLocation}
            >
              <CardContent className="p-8 text-center">
                <MapPin className="h-10 w-10 mx-auto mb-4 text-blue-200" />
                <h4 className="font-bold text-lg mb-3">Visit Our Store</h4>
                <p className="text-blue-100 font-semibold">Paigu Road</p>
                <p className="text-blue-100 font-semibold">Sirsaganj</p>
              </CardContent>
            </Card>

            <Card className="bg-white/15 border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Clock className="h-10 w-10 mx-auto mb-4 text-blue-200" />
                <h4 className="font-bold text-lg mb-3">Store Hours</h4>
                <p className="text-blue-100 font-semibold">Mon - Sat: 9AM - 8PM</p>
                <p className="text-blue-100 font-semibold">Sunday: 10AM - 6PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleLocation}
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 font-semibold shadow-xl"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsApp}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 font-semibold"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-left">
                <h4 className="text-2xl font-bold">Jain Line Electronic</h4>
                <p className="text-gray-400">Premium Power Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-lg">Your Most Trusted Electronics Partner in Sirsaganj</p>
            <div className="border-t border-gray-800 pt-6 mt-6">
              <p className="text-sm text-gray-500">
                © 2024 Jain Line Electronic. All rights reserved. | Owned & Operated by Dheeraj Jain
              </p>
              <p className="text-xs text-gray-600 mt-2">Paigu Road, Sirsaganj | Call: +91 9927403117</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
