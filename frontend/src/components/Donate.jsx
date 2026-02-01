import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Shield, Clock, Users, CreditCard, Banknote } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

const Donate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const amounts = [10, 25, 50, 100, 250];

  const impactStats = [
    { amount: 10, impact: 'Provides school supplies for 1 child' },
    { amount: 25, impact: 'Feeds a family for a week' },
    { amount: 50, impact: 'Funds medical checkup for 5 people' },
    { amount: 100, impact: 'Supports a month of education' },
    { amount: 250, impact: 'Provides clean water for a village' },
  ];

  const features = [
    { icon: Shield, text: 'Secure & Encrypted' },
    { icon: Clock, text: 'Instant Processing' },
    { icon: Users, text: '100% Goes to Cause' },
  ];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    toast.success(`Thank you for your ${isMonthly ? 'monthly ' : ''}donation of $${amount}!`, {
      description: 'This is a demo. In production, you would be redirected to a payment gateway.',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;
  const currentImpact = impactStats.find(s => s.amount <= currentAmount)?.impact || impactStats[0].impact;

  return (
    <section data-testid="donate-section" ref={ref} className="section-padding bg-gradient-to-br from-[#0056D2]/5 via-white to-[#E91E63]/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF9F1C] rounded-full filter blur-[100px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E91E63] rounded-full filter blur-[100px] opacity-15" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-[#E91E63] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
          >
            <Heart className="w-10 h-10 text-white" fill="white" />
          </motion.div>
          <span className="inline-block px-4 py-2 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-semibold mb-4">
            Make a Difference Today
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Donate Now
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generosity has the power to transform lives. Every dollar makes a difference 
            in our mission to create a better world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Impact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Impact</h3>
              <div className="space-y-3">
                {impactStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                      currentAmount >= stat.amount ? 'bg-[#0056D2]/10' : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      currentAmount >= stat.amount ? 'bg-[#0056D2] text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      ${stat.amount}
                    </div>
                    <p className={`text-sm ${currentAmount >= stat.amount ? 'text-gray-900' : 'text-gray-500'}`}>
                      {stat.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <feature.icon className="w-5 h-5 text-[#0056D2]" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <form onSubmit={handleSubmit}>
                {/* Donation Type Toggle */}
                <div className="flex items-center justify-center gap-2 mb-8 p-1 bg-gray-100 rounded-full max-w-xs mx-auto">
                  <button
                    type="button"
                    onClick={() => setIsMonthly(false)}
                    data-testid="one-time-btn"
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                      !isMonthly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMonthly(true)}
                    data-testid="monthly-btn"
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                      isMonthly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountClick(amount)}
                        data-testid={`amount-${amount}-btn`}
                        className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                    <Input
                      type="text"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      data-testid="custom-amount-input"
                      className="pl-8 w-full rounded-xl border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
                    />
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-4 mb-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    data-testid="donate-name-input"
                    className="w-full rounded-xl border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    data-testid="donate-email-input"
                    className="w-full rounded-xl border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
                    required
                  />
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      data-testid="card-payment-btn"
                      className="flex items-center justify-center gap-2 p-4 border-2 border-[#0056D2] rounded-xl bg-[#0056D2]/5"
                    >
                      <CreditCard className="w-5 h-5 text-[#0056D2]" />
                      <span className="font-semibold text-[#0056D2]">Card</span>
                    </button>
                    <button
                      type="button"
                      data-testid="bank-payment-btn"
                      className="flex items-center justify-center gap-2 p-4 border-2 border-gray-200 rounded-xl hover:border-[#0056D2]/50 transition-colors"
                    >
                      <Banknote className="w-5 h-5 text-gray-500" />
                      <span className="font-semibold text-gray-500">Bank</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  data-testid="donate-submit-btn"
                  className="w-full bg-[#E91E63] hover:bg-[#d81b60] text-white rounded-full py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
                  Donate ${customAmount || selectedAmount} {isMonthly && '/ month'}
                </Button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  Your donation is tax-deductible. You'll receive a receipt via email.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
