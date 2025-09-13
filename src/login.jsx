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
    <div className={`rounded-3xl p-5 text-center bg-white border border-emerald-200 shadow-sm hover:translate-y-[-3px] transition-transform ${className}`}>
      <div className="text-4xl mb-2">{emoji}</div>
      <p className="text-emerald-900 font-extrabold text-sm sm:text-base">{label}</p>
    </div>
  );

  const BigBadge = ({ emoji, title, color }) => (
    <div className={`rounded-3xl p-6 sm:p-7 text-center border shadow-sm ${color}`}>
      <div className="text-5xl mb-2">{emoji}</div>
      <div className="text-lg font-extrabold text-emerald-900">{title}</div>
    </div>
  );

  return (
    <div
      className="relative w-screen min-h-screen overflow-x-hidden overflow-y-auto"
      style={{ backgroundImage: 'linear-gradient(135deg, #E8FFE9 0%, #FFF6C7 50%, #FFE7D3 100%)' }}
    >
      <style>{`
        @keyframes wiggle { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        .wiggle { animation: wiggle 2.2s ease-in-out infinite; }
      `}</style>

      {/* Top bar */}
      <div className="w-full flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-300 to-emerald-300 flex items-center justify-center border border-emerald-100">
            <span className="text-xl">🌍</span>
          </div>
          <div>
            <div className="text-xl font-extrabold text-emerald-900 leading-none">EcoMitra</div>
            <div className="text-emerald-800 text-xs font-semibold">Your Green Learning Companion</div>
          </div>
        </div>
        {/* Colorful Join Us button */}
        <button
          onClick={() => setShowJoin(true)}
          className="px-3 py-2 rounded-xl font-extrabold text-sm border bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-300 text-emerald-900 hover:brightness-105 border-emerald-300"
        >
          Join Us
        </button>
      </div>

      {/* Main content */}
      <div className="w-full min-h-[calc(100vh-56px)] flex items-stretch justify-stretch px-4 pb-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
          {/* Left: Info with badges */}
          <section className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 shadow-sm flex flex-col">
            <h2 className="text-2xl font-extrabold text-emerald-900 mb-1">{t.about}</h2>
            <p className="text-emerald-800 text-sm mb-3">{t.aboutDesc}</p>

            <div className="grid grid-cols-4 gap-2 mb-3">
              <IconCard emoji="🎮" label={t.point1} className="wiggle" />
              <IconCard emoji="🏆" label={t.point2} className="wiggle" />
              <IconCard emoji="🌱" label={t.point3} className="wiggle" />
              <IconCard emoji="👫" label={t.point4} className="wiggle" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 mt-auto">
              <BigBadge emoji="🌟" title="Super Star" color="bg-yellow-100 border-yellow-200" />
              <BigBadge emoji="🌳" title="Tree Saver" color="bg-emerald-100 border-emerald-200" />
              <BigBadge emoji="🦋" title="Nature Buddy" color="bg-sky-100 border-sky-200" />
              <BigBadge emoji="📚" title="Study Champ" color="bg-purple-100 border-purple-200" />
              <BigBadge emoji="🚲" title="Fit Hero" color="bg-amber-100 border-amber-200" />
              <BigBadge emoji="🌈" title="Color Wizard" color="bg-pink-100 border-pink-200" />
            </div>
          </section>

          {/* Right: Login */}
          <section className="rounded-2xl p-0 overflow-hidden border border-yellow-300 shadow-sm bg-white flex">
            <form onSubmit={handleLogin} className="w-full p-5">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-emerald-100 to-sky-100 flex items-center justify-center border border-emerald-100">
                  <span className="text-3xl">🦸</span>
                </div>
                <h3 className="text-xl font-extrabold text-emerald-900 mt-2">{t.loginTitle}</h3>
              </div>

              <div className="mb-3">
                <label className="block text-emerald-900 font-extrabold mb-2 text-center text-sm">{t.userType}</label>
                <div className="flex gap-2">
                  {/* Colorful Student button */}
                  <button
                    type="button"
                    onClick={() => setUserType('student')}
                    aria-pressed={userType === 'student'}
                    className={`flex-1 py-2 px-3 rounded-xl font-extrabold text-sm transition border ${
                      userType === 'student'
                        ? 'bg-gradient-to-r from-fuchsia-300 via-pink-300 to-orange-300 text-purple-900 border-transparent'
                        : 'bg-gradient-to-r from-fuchsia-200 via-pink-200 to-orange-200 text-purple-900 hover:brightness-105 border-transparent'
                    }`}
                  >
                    🎒 {t.student}
                  </button>
                  {/* Colorful Teacher button */}
                  <button
                    type="button"
                    onClick={() => setUserType('teacher')}
                    aria-pressed={userType === 'teacher'}
                    className={`flex-1 py-2 px-3 rounded-xl font-extrabold text-sm transition border ${
                      userType === 'teacher'
                        ? 'bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 text-sky-900 border-transparent'
                        : 'bg-gradient-to-r from-sky-200 via-cyan-200 to-teal-200 text-sky-900 hover:brightness-105 border-transparent'
                    }`}
                  >
                    📚 {t.teacher}
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-emerald-900 font-bold mb-1 text-sm">{t.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-4 text-sm font-semibold bg-emerald-50 text-slate-800 placeholder-slate-500 ${
                      isEmailValid ? 'border-emerald-300 focus:border-emerald-500 focus:ring-emerald-200' : 'border-rose-300 focus:border-rose-400 focus:ring-rose-200'
                    }`}
                    placeholder="hero@ecomitra.com"
                    aria-invalid={!isEmailValid}
                  />
                </div>

                <div>
                  <label className="block text-emerald-900 font-bold mb-1 text-sm">{t.password}</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 pr-16 rounded-xl border focus:outline-none focus:ring-4 text-sm font-semibold bg-amber-50 text-slate-800 placeholder-slate-500 ${
                        isPasswordValid ? 'border-amber-300 focus:border-amber-500 focus:ring-amber-200' : 'border-rose-300 focus:border-rose-400 focus:ring-rose-200'
                      }`}
                      placeholder="Enter 6+ characters"
                      aria-invalid={!isPasswordValid}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute inset-y-0 right-2 my-1 px-3 rounded-lg text-xs font-extrabold text-emerald-900 bg-emerald-100 border border-emerald-200 hover:bg-emerald-200"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                {/* Colorful Login CTA */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-3 rounded-xl font-extrabold text-sm border transition ${
                    !isFormValid || isSubmitting
                      ? 'bg-slate-200 text-slate-700 cursor-not-allowed border-slate-200'
                      : 'bg-gradient-to-r from-rose-300 via-amber-300 to-yellow-300 text-emerald-900 hover:brightness-105 border-transparent'
                  }`}
                >
                  {isSubmitting ? 'Starting...' : t.login}
                </button>
              </div>

              <div className="text-center mt-3 space-y-2">
                <button type="button" className="text-sky-900 hover:text-sky-800 font-extrabold text-xs">
                  {t.forgotPassword}
                </button>
                <div className="text-emerald-900 font-semibold text-sm">
                  {t.noAccount}{' '}
                  <button
                    type="button"
                    onClick={() => setShowJoin(true)}
                    className="font-extrabold bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-300 text-emerald-900 px-2 py-1 rounded-lg hover:brightness-105"
                  >
                    {t.signup}
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* FULL-SCREEN JOIN US */}
      {showJoin && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="w-full flex items-center justify-between px-4 py-3 border-b border-emerald-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-300 to-emerald-300 flex items-center justify-center border border-emerald-100">
                <span className="text-xl">🌿</span>
              </div>
              <div>
                <div className="text-xl font-extrabold text-emerald-900 leading-none">{t.joinUsTitle}</div>
                <div className="text-emerald-800 text-xs font-semibold">{t.joinUsSubtitle}</div>
              </div>
            </div>
            {/* Colorful Close */}
            <button
              onClick={() => setShowJoin(false)}
              className="px-3 py-2 rounded-xl font-extrabold text-sm border bg-gradient-to-r from-sky-200 via-cyan-200 to-teal-200 text-sky-900 hover:brightness-105 border-transparent"
            >
              Close
            </button>
          </div>

          <div className="w-full h-[calc(100vh-56px)] overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* Why Join Us with BLACK text */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                <h4 className="text-lg font-extrabold text-black mb-2">{t.whyJoinTitle}</h4>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-center gap-2"><span>🎨</span>{t.why1}</li>
                  <li className="flex items-center gap-2"><span>🌳</span>{t.why2}</li>
                  <li className="flex items-center gap-2"><span>🚴</span>{t.why3}</li>
                </ul>
                <h4 className="text-lg font-extrabold text-black mt-4 mb-2">{t.stepsTitle}</h4>
                <ol className="space-y-2 text-sm text-black">
                  <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-emerald-300 text-emerald-900 font-extrabold flex items-center justify-center">1</span>{t.step1}</li>
                  <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-amber-300 text-amber-900 font-extrabold flex items-center justify-center">2</span>{t.step2}</li>
                  <li className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-sky-300 text-sky-900 font-extrabold flex items-center justify-center">3</span>{t.step3}</li>
                </ol>
              </div>

              <div className="lg:col-span-2 bg-white rounded-2xl p-4 border border-emerald-200">
                <div className="flex items-center gap-2 mb-3">
                  {/* Colorful Student/Teacher toggles */}
                  <button
                    type="button"
                    onClick={() => setJoinRole('student')}
                    className={`px-3 py-2 rounded-xl font-extrabold text-sm border ${
                      joinRole === 'student'
                        ? 'bg-gradient-to-r from-fuchsia-300 via-pink-300 to-orange-300 text-purple-900 border-transparent'
                        : 'bg-gradient-to-r from-fuchsia-200 via-pink-200 to-orange-200 text-purple-900 hover:brightness-105 border-transparent'
                    }`}
                  >
                    🎒 Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setJoinRole('teacher')}
                    className={`px-3 py-2 rounded-xl font-extrabold text-sm border ${
                      joinRole === 'teacher'
                        ? 'bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 text-sky-900 border-transparent'
                        : 'bg-gradient-to-r from-sky-200 via-cyan-200 to-teal-200 text-sky-900 hover:brightness-105 border-transparent'
                    }`}
                  >
                    📚 Teacher
                  </button>
                </div>

                <form onSubmit={submitJoin} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-emerald-900 font-bold mb-1 text-sm">Name</label>
                    <input
                      name="name"
                      value={join.name}
                      onChange={updateJoin}
                      className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 text-sm"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {joinRole === 'student' && (
                    <div>
                      <label className="block text-emerald-900 font-bold mb-1 text-sm">Class</label>
                      <input
                        name="class"
                        value={join.class}
                        onChange={updateJoin}
                        className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 text-sm"
                        placeholder="e.g., 6, 7, 8, 9, 10, 11, 12"
                        required
                      />
                    </div>
                  )}

                  {joinRole === 'student' && (
                    <div>
                      <label className="block text-emerald-900 font-bold mb-1 text-sm">Father Number</label>
                      <input
                        name="fatherNumber"
                        value={join.fatherNumber}
                        onChange={updateJoin}
                        className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 text-sm"
                        placeholder="10-digit number"
                      />
                    </div>
                  )}

                  {joinRole === 'student' && (
                    <div>
                      <label className="block text-emerald-900 font-bold mb-1 text-sm">Mother Number</label>
                      <input
                        name="motherNumber"
                        value={join.motherNumber}
                        onChange={updateJoin}
                        className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 text-sm"
                        placeholder="10-digit number"
                      />
                    </div>
                  )}

                  {joinRole === 'teacher' && (
                    <div className="sm:col-span-2">
                      <label className="block text-emerald-900 font-bold mb-1 text-sm">Phone</label>
                      <input
                        name="phone"
                        value={join.phone}
                        onChange={updateJoin}
                        className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 text-sm"
                        placeholder="10-digit number"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-emerald-900 font-bold mb-1 text-sm">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={join.email}
                      onChange={updateJoin}
                      className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 text-sm"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-emerald-900 font-bold mb-1 text-sm">Age</label>
                    <input
                      name="age"
                      value={join.age}
                      onChange={updateJoin}
                      className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 text-sm"
                      placeholder="e.g., 12"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-emerald-900 font-bold mb-1 text-sm">Aadhaar</label>
                    <input
                      name="aadhaar"
                      value={join.aadhaar}
                      onChange={updateJoin}
                      className="w-full px-3 py-2 rounded-xl border border-emerald-300 bg-emerald-50 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 text-sm"
                      placeholder="12-digit Aadhaar"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2 flex items-center justify-between">
                    <div className={`text-xs font-extrabold ${joinMsg.includes('Thanks') ? 'text-emerald-800' : 'text-rose-700'}`}>
                      {joinMsg}
                    </div>
                    <div className="flex gap-2">
                      {/* Colorful Cancel */}
                      <button
                        type="button"
                        onClick={() => setShowJoin(false)}
                        className="px-3 py-2 rounded-xl font-extrabold text-sm border bg-gradient-to-r from-amber-200 via-yellow-200 to-lime-200 text-amber-900 hover:brightness-105 border-transparent"
                      >
                        Cancel
                      </button>
                      {/* Colorful Submit */}
                      <button
                        type="submit"
                        disabled={joinSubmitting}
                        className={`px-4 py-2 rounded-xl font-extrabold text-sm border ${
                          joinSubmitting
                            ? 'bg-slate-200 text-slate-700 cursor-not-allowed border-slate-200'
                            : 'bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-300 text-emerald-900 hover:brightness-105 border-transparent'
                        }`}
                      >
                        {joinSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;