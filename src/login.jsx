import React, { useMemo, useState } from 'react';

const App = () => {
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showJoin, setShowJoin] = useState(false);
  const [joinRole, setJoinRole] = useState('student');
  const [join, setJoin] = useState({
    name: '',
    class: '',
    fatherNumber: '',
    motherNumber: '',
    phone: '',
    email: '',
    age: '',
    aadhaar: ''
  });
  const [joinSubmitting, setJoinSubmitting] = useState(false);
  const [joinMsg, setJoinMsg] = useState('');

  const t = {
    appName: 'EcoMitra',
    tagline: 'Your Green Learning Companion',
    about: 'Learn, Play, and Save Our Planet Together!',
    aboutDesc: 'Join thousands of eco-warriors on a fun adventure!',
    loginTitle: 'Welcome Back, Eco Hero!',
    userType: 'Who are you?',
    student: 'Student',
    teacher: 'Teacher',
    email: 'Email Address',
    password: 'Password',
    login: 'Start Adventure',
    noAccount: 'New Explorer?',
    signup: 'Join Us!',
    forgotPassword: 'Forgot Password?',
    featuresTitle: 'Fun Activities Await!',
    point1: 'Play Eco Games',
    point2: 'Earn Cool Badges',
    point3: 'Save Real Trees',
    point4: 'Make New Friends',
    joinUsTitle: 'Join Us',
    joinUsSubtitle: 'Be part of our planet-saving adventure!',
    whyJoinTitle: 'Why Join EcoMitra?',
    why1: 'Learn sustainability with fun games',
    why2: 'Earn badges and plant real trees',
    why3: 'Compete in eco-challenges with friends',
    stepsTitle: 'How to Start',
    step1: 'Create your account',
    step2: 'Pick Student or Teacher',
    step3: 'Start learning and playing',
    contactTitle: 'Contact Us',
    contactDesc: 'Schools and NGOs can partner with us.',
    contactEmail: 'Email',
    contactMessage: 'Message',
    contactSend: 'Send Message',
  };

  const handleInputChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const isEmailValid = useMemo(() => {
    if (!formData.email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  }, [formData.email]);

  const isPasswordValid = formData.password.length >= 6;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleLogin = async (e) => {
    e?.preventDefault();
    if (!isFormValid || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      alert(`Welcome ${userType}! Let's start your eco-adventure!`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateJoin = (e) => {
    setJoin((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const validateJoin = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(join.email);
    const ageOk = /^\d{1,2}$/.test(join.age);
    const aadhaarOk = /^\d{12}$/.test(join.aadhaar);
    const phoneOk = (n) => (!n ? true : /^\d{10}$/.test(n));
    if (!join.name) return 'Please enter name';
    if (!emailOk) return 'Please enter a valid email';
    if (!ageOk) return 'Please enter a valid age (0-99)';
    if (!aadhaarOk) return 'Enter 12-digit Aadhaar';
    if (joinRole === 'student') {
      if (!join.class) return 'Please enter class';
      if (!phoneOk(join.fatherNumber)) return 'Enter 10-digit father number';
      if (!phoneOk(join.motherNumber)) return 'Enter 10-digit mother number';
    } else {
      if (!phoneOk(join.phone)) return 'Enter 10-digit phone number';
    }
    return '';
  };

  const submitJoin = async (e) => {
    e.preventDefault();
    setJoinMsg('');
    const err = validateJoin();
    if (err) {
      setJoinMsg(err);
      return;
    }
    setJoinSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setJoinMsg('Thanks! We will contact you soon.');
      setJoin({
        name: '',
        class: '',
        fatherNumber: '',
        motherNumber: '',
        phone: '',
        email: '',
        age: '',
        aadhaar: ''
      });
    } finally {
      setJoinSubmitting(false);
    }
  };

  const IconCard = ({ emoji, label, className = '' }) => (
    <div className={`rounded-3xl p-5 text-center bg-slate-800 border border-slate-600 shadow-lg hover:translate-y-[-3px] transition-transform hover:border-green-400 ${className}`}>
      <div className="text-4xl mb-2">{emoji}</div>
      <p className="text-white font-extrabold text-sm sm:text-base">{label}</p>
    </div>
  );

  const BigBadge = ({ emoji, title, color }) => (
    <div className={`rounded-3xl p-6 sm:p-7 text-center border shadow-lg hover:border-green-400 transition-colors ${color}`}>
      <div className="text-5xl mb-2">{emoji}</div>
      <div className="text-lg font-extrabold text-green-400">{title}</div>
    </div>
  );

  return (
    <div
      className="relative w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-slate-900"
      style={{ background: 'linear-gradient(135deg, #0A192F 0%, #112240 50%, #1A365D 100%)' }}
    >
      <style>{`
        @keyframes wiggle { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        .wiggle { animation: wiggle 2.2s ease-in-out infinite; }
      `}</style>

      {/* Top bar */}
      <div className="w-full flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center border border-green-400">
            <span className="text-xl">🌍</span>
          </div>
          <div>
            <div className="text-xl font-extrabold text-green-400 leading-none">EcoMitra</div>
            <div className="text-white text-xs font-semibold">Your Green Learning Companion</div>
          </div>
        </div>
        {/* Join Us button */}
        <button
          onClick={() => setShowJoin(true)}
          className="px-3 py-2 rounded-xl font-extrabold text-sm border bg-gradient-to-r from-green-600 to-green-400 text-white hover:from-green-500 hover:to-green-300 border-green-400 transition-all"
        >
          Join Us
        </button>
      </div>

      {/* Main content */}
      <div className="w-full min-h-[calc(100vh-56px)] flex items-stretch justify-stretch px-4 pb-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
          {/* Left: Info with badges */}
          <section className="bg-slate-800 rounded-2xl p-5 border border-slate-600 shadow-lg flex flex-col">
            <h2 className="text-2xl font-extrabold text-green-400 mb-1">{t.about}</h2>
            <p className="text-white text-sm mb-3">{t.aboutDesc}</p>

            <div className="grid grid-cols-4 gap-2 mb-3">
              <IconCard emoji="🎮" label={t.point1} className="wiggle" />
              <IconCard emoji="🏆" label={t.point2} className="wiggle" />
              <IconCard emoji="🌱" label={t.point3} className="wiggle" />
              <IconCard emoji="👫" label={t.point4} className="wiggle" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 mt-auto">
              <BigBadge emoji="🌟" title="Super Star" color="bg-slate-800 border-slate-600" />
              <BigBadge emoji="🌳" title="Tree Saver" color="bg-slate-800 border-slate-600" />
              <BigBadge emoji="🦋" title="Nature Buddy" color="bg-slate-800 border-slate-600" />
              <BigBadge emoji="📚" title="Study Champ" color="bg-slate-800 border-slate-600" />
              <BigBadge emoji="🚲" title="Fit Hero" color="bg-slate-800 border-slate-600" />
              <BigBadge emoji="🌈" title="Color Wizard" color="bg-slate-800 border-slate-600" />
            </div>
          </section>

          {/* Right: Login */}
          <section className="rounded-2xl p-0 overflow-hidden border border-green-400 shadow-lg bg-slate-800 flex">
            <div className="w-full p-5">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center border border-green-400">
                  <span className="text-3xl">🦸</span>
                </div>
                <h3 className="text-xl font-extrabold text-green-400 mt-2">{t.loginTitle}</h3>
              </div>

              <div className="mb-3">
                <label className="block text-white font-extrabold mb-2 text-center text-sm">{t.userType}</label>
                <div className="flex gap-2">
                  {/* Student button */}
                  <button
                    type="button"
                    onClick={() => setUserType('student')}
                    aria-pressed={userType === 'student'}
                    className={`flex-1 py-2 px-3 rounded-xl font-extrabold text-sm transition border ${
                      userType === 'student'
                        ? 'bg-gradient-to-r from-green-600 to-green-400 text-white border-green-400'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border-slate-600'
                    }`}
                  >
                    🎒 {t.student}
                  </button>
                  {/* Teacher button */}
                  <button
                    type="button"
                    onClick={() => setUserType('teacher')}
                    aria-pressed={userType === 'teacher'}
                    className={`flex-1 py-2 px-3 rounded-xl font-extrabold text-sm transition border ${
                      userType === 'teacher'
                        ? 'bg-gradient-to-r from-green-600 to-green-400 text-white border-green-400'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border-slate-600'
                    }`}
                  >
                    📚 {t.teacher}
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-white font-bold mb-1 text-sm">{t.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-4 text-sm font-semibold bg-slate-700 text-white placeholder-slate-300 ${
                      isEmailValid ? 'border-green-400 focus:border-green-300 focus:ring-green-500/20' : 'border-red-400 focus:border-red-300 focus:ring-red-500/20'
                    }`}
                    placeholder="hero@ecomitra.com"
                    aria-invalid={!isEmailValid}
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-1 text-sm">{t.password}</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 pr-16 rounded-xl border focus:outline-none focus:ring-4 text-sm font-semibold bg-slate-700 text-white placeholder-slate-300 ${
                        isPasswordValid ? 'border-green-400 focus:border-green-300 focus:ring-green-500/20' : 'border-red-400 focus:border-red-300 focus:ring-red-500/20'
                      }`}
                      placeholder="Enter 6+ characters"
                      aria-invalid={!isPasswordValid}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute inset-y-0 right-2 my-1 px-3 rounded-lg text-xs font-extrabold text-white bg-green-600 border border-green-400 hover:bg-green-500"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                {/* Login CTA */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-3 rounded-xl font-extrabold text-sm border transition ${
                    !isFormValid || isSubmitting
                      ? 'bg-slate-600 text-slate-400 cursor-not-allowed border-slate-500'
                      : 'bg-gradient-to-r from-green-600 to-green-400 text-white hover:from-green-500 hover:to-green-300 border-green-400'
                  }`}
                >
                  {isSubmitting ? 'Starting...' : t.login}
                </button>
              </div>

              <div className="text-center mt-3 space-y-2">
                <button type="button" className="text-green-400 hover:text-green-300 font-extrabold text-xs">
                  {t.forgotPassword}
                </button>
                <div className="text-white font-semibold text-sm">
                  {t.noAccount}{' '}
                  <button
                    type="button"
                    onClick={() => setShowJoin(true)}
                    className="font-extrabold bg-gradient-to-r from-green-600 to-green-400 text-white px-2 py-1 rounded-lg hover:from-green-500 hover:to-green-300"
                  >
                    {t.signup}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FULL-SCREEN JOIN US */}
      {showJoin && (
        <div className="fixed inset-0 z-50 bg-slate-900">
          <div className="w-full flex items-center justify-between px-4 py-3 border-b border-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center border border-green-400">
                <span className="text-xl">🌿</span>
              </div>
              <div>
                <div className="text-xl font-extrabold text-green-400 leading-none">{t.joinUsTitle}</div>
                <div className="text-white text-xs font-semibold">{t.joinUsSubtitle}</div>
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={() => setShowJoin(false)}
              className="px-3 py-2 rounded-xl font-extrabold text-sm border bg-slate-700 text-white hover:bg-slate-600 border-slate-600"
            >
              Close
            </button>
          </div>

          <div className="w-full h-[calc(100vh-56px)] overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* Why Join Us */}
              <div className="bg-slate-800 rounded-2xl p-4 border border-slate-600">
                <h4 className="text-lg font-extrabold text-green-400 mb-2">{t.whyJoinTitle}</h4>
                <ul className="space-y-2 text-sm text-white">
                  <li className="flex items-center gap-2"><span>🎨</span>{t.why1}</li>
                  <li className="flex items-center gap-2"><span>🌳</span>{t.why2}</li>
                  <li className="flex items-center gap-2"><span>🚴</span>{t.why3}</li>
                </ul>
                <h4 className="text-lg font-extrabold text-green-400 mt-4 mb-2">{t.stepsTitle}</h4>
                <ol className="space-y-2 text-sm text-white">
                  <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-green-500 text-white font-extrabold flex items-center justify-center">1</span>{t.step1}</li>
                  <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-green-500 text-white font-extrabold flex items-center justify-center">2</span>{t.step2}</li>
                  <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-green-500 text-white font-extrabold flex items-center justify-center">3</span>{t.step3}</li>
                </ol>
              </div>

              <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-4 border border-slate-600">
                <div className="flex items-center gap-2 mb-3">
                  {/* Student/Teacher toggles */}
                  <button
                    type="button"
                    onClick={() => setJoinRole('student')}
                    className={`px-3 py-2 rounded-xl font-extrabold text-sm border ${
                      joinRole === 'student'
                        ? 'bg-gradient-to-r from-green-600 to-green-400 text-white border-green-400'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border-slate-600'
                    }`}
                  >
                    🎒 Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setJoinRole('teacher')}
                    className={`px-3 py-2 rounded-xl font-extrabold text-sm border ${
                      joinRole === 'teacher'
                        ? 'bg-gradient-to-r from-green-600 to-green-400 text-white border-green-400'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border-slate-600'
                    }`}
                  >
                    📚 Teacher
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white font-bold mb-1 text-sm">Name</label>
                    <input
                      name="name"
                      value={join.name}
                      onChange={updateJoin}
                      className="w-full px-3 py-2 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-400 text-sm"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {joinRole === 'student' && (
                    <div>
                      <label className="block text-white font-bold mb-1 text-sm">Class</label>
                      <input
                        name="class"
                        value={join.class}
                        onChange={updateJoin}
                        className="w-full px-3 py-2 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-400 text-sm"
                        placeholder="e.g., 6, 7, 8, 9, 10, 11, 12"
                        required
                      />
                    </div>
                  )}

                  {joinRole === 'student' && (
                    <div>
                      <label className="block text-white font-bold mb-1 text-sm">Father Number</label>
                      <input
                        name="fatherNumber"
                        value={join.fatherNumber}
                        onChange={updateJoin}
                        className="w-full px-3 py-2 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-400 text-sm"
                        placeholder="10-digit number"
                      />
                    </div>
                  )}

                  {joinRole === 'student' && (
                    <div>
                      <label className="block text-white font-bold mb-1 text-sm">Mother Number</label>
                      <input
                        name="motherNumber"
                        value={join.motherNumber}
                        onChange={updateJoin}
                        className="w-full px-3 py-2 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-400 text-sm"
                        placeholder="10-digit number"
                      />
                    </div>
                  )}

                  {joinRole === 'teacher' && (
                    <div className="sm:col-span-2">
                      <label className="block text-white font-bold mb-1 text-sm">Phone</label>
                      <input
                        name="phone"
                        value={join.phone}
                        onChange={updateJoin}
                        className="w-full px-3 py-2 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-400 text-sm"
                        placeholder="10-digit number"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-white font-bold mb-1 text-sm">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={join.email}
                      onChange={updateJoin}
                      className="w-full px-3 py-2 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-400 text-sm"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-bold mb-1 text-sm">Age</label>
                    <input
                      name="age"
                      value={join.age}
                      onChange={updateJoin}
                      className="w-full px-3 py-2 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-400 text-sm"
                      placeholder="e.g., 12"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-white font-bold mb-1 text-sm">Aadhaar</label>
                    <input
                      name="aadhaar"
                      value={join.aadhaar}
                      onChange={updateJoin}
                      className="w-full px-3 py-2 rounded-xl border border-slate-600 bg-slate-700 text-white placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-400 text-sm"
                      placeholder="12-digit Aadhaar"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2 flex items-center justify-between">
                    <div className={`text-xs font-extrabold ${joinMsg.includes('Thanks') ? 'text-green-400' : 'text-red-400'}`}>
                      {joinMsg}
                    </div>
                    <div className="flex gap-2">
                      {/* Cancel button */}
                      <button
                        type="button"
                        onClick={() => setShowJoin(false)}
                        className="px-3 py-2 rounded-xl font-extrabold text-sm border bg-slate-700 text-white hover:bg-slate-600 border-slate-600"
                      >
                        Cancel
                      </button>
                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={joinSubmitting}
                        className={`px-4 py-2 rounded-xl font-extrabold text-sm border ${
                          joinSubmitting
                            ? 'bg-slate-600 text-slate-400 cursor-not-allowed border-slate-500'
                            : 'bg-gradient-to-r from-green-600 to-green-400 text-white hover:from-green-500 hover:to-green-300 border-green-400'
                        }`}
                      >
                        {joinSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
