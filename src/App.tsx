import React from 'react';
import { 
  Download, 
  Shield, 
  Zap, 
  Globe, 
  Star, 
  Check, 
  Users, 
  Award,
  Lock,
  Wifi,
  Monitor,
  ChevronRight,
  Play
} from 'lucide-react';

function App() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Real-time Protection",
      description: "Advanced threat detection that monitors your system 24/7 against malware, viruses, and ransomware."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Lightning Fast Scans",
      description: "Optimized scanning engine that's 3x faster than competitors while using minimal system resources."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Web Protection",
      description: "Blocks malicious websites, phishing attempts, and unsafe downloads before they reach your device."
    },
    {
      icon: <Wifi className="w-12 h-12 text-blue-600" />,
      title: "Network Security",
      description: "Monitors network traffic and protects against intrusions and suspicious connections."
    }
  ];

  const freeFeatures = [
    'Real-time virus scanning',
    'Advanced malware protection',
    'Web protection & safe browsing',
    'Automatic security updates',
    'Email & chat support',
    'Compatible with Windows systems',
    'No ads or pop-ups',
    'Lightweight & fast performance'
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "DefensePRO saved my business from a ransomware attack. The real-time protection is incredible and it's completely free!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IT Professional",
      content: "Finally, a free antivirus that doesn't slow down my system. Fast, reliable, and comprehensive protection.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Remote Worker",
      content: "The web protection feature blocks so many threats daily. I feel much safer browsing online now.",
      rating: 5
    }
  ];

  const handleDownload = () => {
    // This will trigger the download of DefensePRO.exe when the file is added
    const link = document.createElement('a');
    link.href = '/DefensePRO.exe';
    link.download = 'DefensePRO.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">DefensePRO</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#download" className="text-gray-600 hover:text-blue-600 transition-colors">Download</a>
              <a href="#support" className="text-gray-600 hover:text-blue-600 transition-colors">Support</a>
            </nav>
            <button 
              onClick={handleDownload}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download Free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Trusted by 50M+ users worldwide
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  100% Free Forever
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Ultimate 
                <span className="text-blue-600"> Protection</span>
                <br />Against All Threats
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional-grade antivirus software that protects your Windows devices from malware, ransomware, 
                and cyber threats without slowing down your system. Completely free, no hidden costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={handleDownload}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download DefensePRO.exe</span>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No registration required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Instant download</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Always free</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">DefensePRO Dashboard</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-8 h-8 text-green-600" />
                      <div>
                        <div className="font-semibold text-green-800">System Protected</div>
                        <div className="text-sm text-green-600">All threats blocked</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">100%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">1,247</div>
                      <div className="text-sm text-blue-600">Threats Blocked</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">99.9%</div>
                      <div className="text-sm text-purple-600">Detection Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Protection Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced security suite provides complete protection against all types of digital threats - completely free
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Features Section */}
      <section id="download" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need - Completely Free
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional antivirus protection with all essential features at no cost
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  <span>Premium Features - Free Forever</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">DefensePRO Free</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$0</div>
                <p className="text-gray-600">Complete antivirus protection for Windows</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {freeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button 
                  onClick={handleDownload}
                  className="bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto"
                >
                  <Download className="w-6 h-6" />
                  <span>Download DefensePRO.exe</span>
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  No registration • Instant download • Windows compatible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Millions Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about DefensePRO Free
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              System Requirements
            </h2>
            <p className="text-xl text-gray-600">
              DefensePRO works on Windows systems
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Monitor className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Windows</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Windows 10/11 (64-bit)</li>
                <li>2 GB RAM minimum</li>
                <li>2 GB free disk space</li>
                <li>Internet connection required for updates</li>
                <li>Administrator privileges for installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join millions of users who trust DefensePRO to protect their devices and personal information - completely free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDownload}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download DefensePRO.exe</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View All Features
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No credit card required • No hidden fees • Always free
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">DefensePRO</span>
              </div>
              <p className="text-gray-400 mb-4">
                Leading free antivirus software providing comprehensive protection for over 50 million users worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Free Antivirus</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Windows Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Browser Extension</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security Tools</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DefensePRO. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;