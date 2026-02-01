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
    <section data-testid="donate-section" ref={ref} className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="w-16 h-16 bg-[#E91E63] rounded-xl flex items-center justify-center mx-auto mb-5"
          >
            <Heart className="w-8 h-8 text-white" fill="white" />
          </motion.div>
          <span className="inline-block px-3 py-1.5 bg-[#E91E63]/10 text-[#E91E63] rounded-md text-sm font-medium mb-4">
            Make a Difference Today
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Donate Now
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Your generosity has the power to transform lives. Every dollar makes a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Impact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-5 rounded-xl border border-gray-100 mb-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Impact</h3>
              <div className="space-y-2">
                {impactStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${
                      currentAmount >= stat.amount ? 'bg-[#0056D2]/5' : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-semibold ${
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

            <div className="flex items-center justify-center gap-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-500">
                  <feature.icon className="w-4 h-4 text-[#0056D2]" />
                  <span className="text-xs font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <form onSubmit={handleSubmit}>
                {/* Donation Type Toggle */}
                <div className="flex items-center justify-center gap-1 mb-6 p-1 bg-gray-100 rounded-lg max-w-xs mx-auto">
                  <button
                    type="button"
                    onClick={() => setIsMonthly(false)}
                    data-testid="one-time-btn"
                    className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                      !isMonthly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMonthly(true)}
                    data-testid="monthly-btn"
                    className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                      isMonthly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
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
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
                    <Input
                      type="text"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      data-testid="custom-amount-input"
                      className="pl-7 w-full rounded-lg border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
                    />
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-3 mb-5">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    data-testid="donate-name-input"
                    className="w-full rounded-lg border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    data-testid="donate-email-input"
                    className="w-full rounded-lg border-gray-200 focus:border-[#0056D2] focus:ring-[#0056D2]/20"
                    required
                  />
                </div>

                {/* Payment Methods */}
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      data-testid="card-payment-btn"
                      className="flex items-center justify-center gap-2 p-3 border-2 border-[#0056D2] rounded-lg bg-[#0056D2]/5"
                    >
                      <CreditCard className="w-4 h-4 text-[#0056D2]" />
                      <span className="font-medium text-[#0056D2] text-sm">Card</span>
                    </button>
                    <button
                      type="button"
                      data-testid="bank-payment-btn"
                      className="flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <Banknote className="w-4 h-4 text-gray-500" />
                      <span className="font-medium text-gray-500 text-sm">Bank</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  data-testid="donate-submit-btn"
                  className="w-full bg-[#E91E63] hover:bg-[#d81b60] text-white rounded-lg py-5 text-base font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Donate ${customAmount || selectedAmount} {isMonthly && '/ month'}
                </Button>

                <p className="text-center text-xs text-gray-500 mt-3">
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
