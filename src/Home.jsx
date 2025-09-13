import React, { useState } from 'react';
import { Menu, X, Home, User, BarChart3, Gamepad2, HelpCircle, Info, Leaf, Users, Trophy, Globe, BookOpen, Target, Heart } from 'lucide-react';

const EcomitraHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      nav: {
        home: 'Home',
        login: 'Login',
        dashboard: 'Dashboard',
        game: 'Game',
        quizzes: 'Quizzes',
        about: 'About Us'
      },
      hero: {
        title: 'Ecomitra – Together for a Greener Tomorrow',
        subtitle: 'An interactive, gamified platform for students to learn sustainability in a fun way.',
        loginBtn: 'Login',
        exploreBtn: 'Explore Games'
      },
      features: {
        title: 'Our Features',
        login: {
          title: 'Login / Sign Up',
          desc: 'Secure access with personalized dashboard tracking your progress and achievements.'
        },
        dashboard: {
          title: 'Dashboard',
          desc: 'Track eco-points, completed challenges, and compare progress with classmates.'
        },
        games: {
          title: 'Interactive Games',
          desc: 'Learn waste segregation and recycling through fun drag & drop games.'
        },
        quizzes: {
          title: 'Fun Quizzes',
          desc: 'Challenge yourself with questions about climate change and sustainability.'
        },
        about: {
          title: 'About Us',
          desc: 'Developed for Smart India Hackathon aligned with NEP 2020 and UN SDGs.'
        }
      },
      why: {
        title: 'Why Choose Ecomitra?',
        point1: 'Environmental education in India is mostly textbook-based',
        point2: 'Students need real-world applications and hands-on learning',
        point3: 'Experiential learning bridging theory and action',
        point4: 'Small steps leading to big impact on communities'
      },
      cta: {
        title: 'Join the Movement!',
        subtitle: 'Play, Learn, and Act for the planet with Ecomitra',
        description: 'Together, let\'s build a sustainable future — one game, one quiz, one habit at a time.',
        playBtn: 'Start Playing',
        learnBtn: 'Learn More'
      },
      footer: 'Made with ❤️ by Team teamhactrix (SIH 2025)'
    },
    hi: {
      nav: {
        home: 'होम',
        login: 'लॉगिन',
        dashboard: 'डैशबोर्ड',
        game: 'गेम',
        quizzes: 'क्विज़',
        about: 'हमारे बारे में'
      },
      hero: {
        title: 'इकोमित्र – हरित कल के लिए साथ',
        subtitle: 'छात्रों के लिए एक इंटरैक्टिव, गेमीफाइड प्लेटफॉर्म जो मज़ेदार तरीके से स्थिरता सिखाता है।',
        loginBtn: 'लॉगिन',
        exploreBtn: 'गेम्स देखें'
      },
      features: {
        title: 'हमारी सुविधाएं',
        login: {
          title: 'लॉगिन / साइन अप',
          desc: 'व्यक्तिगत डैशबोर्ड के साथ सुरक्षित पहुंच जो आपकी प्रगति को ट्रैक करता है।'
        },
        dashboard: {
          title: 'डैशबोर्ड',
          desc: 'इको-पॉइंट्स, पूरी चुनौतियों को ट्रैक करें और सहपाठियों से तुलना करें।'
        },
        games: {
          title: 'इंटरैक्टिव गेम्स',
          desc: 'मज़ेदार ड्रैग एंड ड्रॉप गेम्स के माध्यम से कचरा अलगाव और रीसाइक्लिंग सीखें।'
        },
        quizzes: {
          title: 'मज़ेदार क्विज़',
          desc: 'जलवायु परिवर्तन और स्थिरता के बारे में सवालों से खुद को चुनौती दें।'
        },
        about: {
          title: 'हमारे बारे में',
          desc: 'स्मार्ट इंडिया हैकथॉन के लिए विकसित, NEP 2020 और UN SDGs के अनुरूप।'
        }
      },
      why: {
        title: 'इकोमित्र क्यों चुनें?',
        point1: 'भारत में पर्यावरण शिक्षा ज्यादातर किताबी है',
        point2: 'छात्रों को वास्तविक दुनिया के अनुप्रयोग चाहिए',
        point3: 'सिद्धांत और कार्य के बीच सेतु का काम करने वाली शिक्षा',
        point4: 'छोटे कदम समुदायों पर बड़ा प्रभाव डालते हैं'
      },
      cta: {
        title: 'आंदोलन में शामिल हों!',
        subtitle: 'इकोमित्र के साथ खेलें, सीखें और ग्रह के लिए कार्य करें',
        description: 'आइए मिलकर एक स्थायी भविष्य बनाएं — एक खेल, एक क्विज़, एक आदत के साथ।',
        playBtn: 'खेलना शुरू करें',
        learnBtn: 'और जानें'
      },
      footer: 'टीम teamhactrix (SIH 2025) द्वारा ❤️ के साथ बनाया गया'
    }
  };

  const t = translations[language];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'en' ? 'hi' : 'en');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-green-800">Ecomitra</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-green-800 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  {t.nav.home}
                </a>
                <a href="/login" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {t.nav.login}
                </a>
                <a href="/dashboard" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  {t.nav.dashboard}
                </a>
                <a href="/waste" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <Gamepad2 className="h-4 w-4 mr-1" />
                  {t.nav.game}
                </a>
                <a href="/quiz" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <HelpCircle className="h-4 w-4 mr-1" />
                  {t.nav.quizzes}
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <Info className="h-4 w-4 mr-1" />
                  {t.nav.about}
                </a>
              </div>
            </div>

            {/* Language Toggle & Mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={toggleLanguage}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-4"
              >
                {language === 'en' ? 'हिं' : 'EN'}
              </button>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-green-600"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-green-800 block px-3 py-2 rounded-md text-base font-medium">{t.nav.home}</a>
              <a href="#" className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">{t.nav.login}</a>
              <a href="#" className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">{t.nav.dashboard}</a>
              <a href="#" className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">{t.nav.game}</a>
              <a href="#" className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">{t.nav.quizzes}</a>
              <a href="#" className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">{t.nav.about}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-400 to-blue-500 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_6cSzKTxdTjKJLv0rl4sJdptIIV2gzICZQ&s')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-50 transition duration-300 shadow-lg">
              {t.hero.loginBtn}
            </button>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition duration-300 shadow-lg">
              {t.hero.exploreBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {t.features.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Login Feature */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-blue-500">
              <User className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.features.login.title}</h3>
              <p className="text-gray-600">{t.features.login.desc}</p>
            </div>

            {/* Dashboard Feature */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-green-500">
              <BarChart3 className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.features.dashboard.title}</h3>
              <p className="text-gray-600">{t.features.dashboard.desc}</p>
            </div>

            {/* Games Feature */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-purple-500">
              <Gamepad2 className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.features.games.title}</h3>
              <p className="text-gray-600">{t.features.games.desc}</p>
            </div>

            {/* Quizzes Feature */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-orange-500">
              <HelpCircle className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.features.quizzes.title}</h3>
              <p className="text-gray-600">{t.features.quizzes.desc}</p>
            </div>

            {/* About Feature */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-red-500 md:col-span-2 lg:col-span-1">
              <Info className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.features.about.title}</h3>
              <p className="text-gray-600">{t.features.about.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ecomitra Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {t.why.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-gray-700 text-lg">{t.why.point1}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-700 text-lg">{t.why.point2}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-700 text-lg">{t.why.point3}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-700 text-lg">{t.why.point4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-white mb-4">
            {t.cta.subtitle}
          </p>
          <p className="text-lg text-white mb-8 opacity-90">
            {t.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-50 transition duration-300 shadow-lg">
              {t.cta.playBtn}
            </button>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-400 transition duration-300 shadow-lg border-2 border-white">
              {t.cta.learnBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="flex items-center justify-center text-lg">
            {t.footer.replace('❤️', '')}
            <Heart className="h-5 w-5 text-red-500 mx-1" />
            {language === 'hi' ? 'टीम teamhactrix (SIH 2025) द्वारा बनाया गया' : 'by Team teamhactrix (SIH 2025)'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EcomitraHomepage;