import { useState } from 'react';
import { FiTarget, FiCheckCircle, FiTrendingUp, FiMessageCircle, FiDownload } from 'react-icons/fi';

export default function AIPlanner() {
  const [budget, setBudget] = useState(500000);
  const [guestCount, setGuestCount] = useState(500);
  const [eventDate, setEventDate] = useState('');
  const [showAIChat, setShowAIChat] = useState(false);

  const budgetBreakdown = [
    { category: 'Venue', percentage: 25, amount: budget * 0.25, icon: '🏛️' },
    { category: 'Catering', percentage: 30, amount: budget * 0.30, icon: '🍛' },
    { category: 'Decoration', percentage: 15, amount: budget * 0.15, icon: '🎨' },
    { category: 'Photography', percentage: 10, amount: budget * 0.10, icon: '📸' },
    { category: 'DJ/Music', percentage: 8, amount: budget * 0.08, icon: '🎵' },
    { category: 'Misc', percentage: 12, amount: budget * 0.12, icon: '⭐' },
  ];

  const checklist = [
    { id: 1, task: 'Finalize guest list', completed: true },
    { id: 2, task: 'Book venue', completed: true },
    { id: 3, task: 'Confirm catering', completed: false },
    { id: 4, task: 'Plan decorations', completed: false },
    { id: 5, task: 'Hire photographer', completed: false },
    { id: 6, task: 'Book DJ/Music', completed: false },
    { id: 7, task: 'Arrange transportation', completed: false },
    { id: 8, task: 'Finalize makeup', completed: false },
  ];

  const timeline = [
    { month: '3 months before', tasks: ['Finalize Guest List', 'Book Venue'] },
    { month: '2 months before', tasks: ['Confirm Catering', 'Plan Decorations'] },
    { month: '1 month before', tasks: ['Photographer', 'DJ', 'Transportation'] },
    { month: '2 weeks before', tasks: ['Final Confirmations', 'Payment Reminders'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] to-[#FFE8CC]">
      {/* Header */}
      <div className="glass-effect text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">🤖 AI Wedding Planner</h1>
          <p className="text-white/80">Plan your perfect wedding with intelligent suggestions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Budget & Details Setup */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-mehrun mb-6">💰 Budget Planning</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Budget */}
            <div className="bg-mehrun/10 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-2">Total Budget</p>
              <div className="mb-4">
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="10000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              <p className="text-3xl font-bold text-gold">₹{budget.toLocaleString('en-IN')}</p>
            </div>

            {/* Guest Count */}
            <div className="bg-gold/10 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-2">Expected Guests</p>
              <div className="mb-4">
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              <p className="text-3xl font-bold text-mehrun">{guestCount}</p>
            </div>

            {/* Wedding Date */}
            <div className="bg-mehrun/10 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-2">Wedding Date</p>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun mb-4"
              />
              <p className="text-sm font-semibold text-mehrun">
                {eventDate ? `${Math.ceil((new Date(eventDate) - new Date()) / (1000 * 60 * 60 * 24))} days away` : 'Select a date'}
              </p>
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="bg-gold/20 rounded-lg p-6 border-2 border-gold">
            <h3 className="font-bold text-mehrun mb-3 flex items-center gap-2">
              <FiTrendingUp /> AI Budget Recommendation
            </h3>
            <p className="text-gray-700 mb-4">
              Based on {guestCount} guests and ₹{budget.toLocaleString('en-IN')} budget, here's our recommended spending breakdown:
            </p>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Chart */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-mehrun mb-6">Budget Distribution</h3>
            <div className="space-y-4">
              {budgetBreakdown.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700 flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      {item.category}
                    </span>
                    <span className="text-gold font-bold">₹{Math.floor(item.amount).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-mehrun h-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{item.percentage}% of total</p>
                </div>
              ))}
            </div>
          </div>

          {/* Per Plate Cost */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-mehrun mb-6">💡 Smart Insights</h3>
            <div className="space-y-4">
              <div className="bg-mehrun/10 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Cost per Guest</p>
                <p className="text-3xl font-bold text-mehrun">₹{Math.floor(budget / guestCount).toLocaleString('en-IN')}</p>
              </div>
              <div className="bg-gold/10 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Recommended Catering Cost</p>
                <p className="text-2xl font-bold text-gold">₹{Math.floor((budget * 0.30) / guestCount).toLocaleString('en-IN')}/plate</p>
              </div>
              <div className="bg-mehrun/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Days Until Wedding</p>
                <p className="text-2xl font-bold text-mehrun">
                  {eventDate ? Math.ceil((new Date(eventDate) - new Date()) / (1000 * 60 * 60 * 24)) : '--'} days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-mehrun mb-6">📅 Planning Timeline</h3>
          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 last:border-0">
                <div className="text-3xl min-w-fit">{['🔴', '🟡', '🟢', '🔵'][idx]}</div>
                <div>
                  <h4 className="font-bold text-mehrun mb-2">{item.month}</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tasks.map((task, i) => (
                      <span key={i} className="px-3 py-1 bg-mehrun/10 text-mehrun text-sm rounded-full">
                        ✓ {task}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-mehrun mb-6 flex items-center gap-2">
              <FiCheckCircle /> Planning Checklist
            </h3>
            <div className="space-y-3">
              {checklist.map((item) => (
                <label key={item.id} className="flex items-center gap-3 p-3 hover:bg-mehrun/5 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={item.completed}
                    className="w-5 h-5 text-mehrun rounded"
                  />
                  <span className={item.completed ? 'text-gray-400 line-through' : 'text-gray-700'}>
                    {item.task}
                  </span>
                </label>
              ))}
            </div>
            <button className="w-full btn-mehrun mt-6">📥 Download Checklist</button>
          </div>

          {/* Guest Management */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-mehrun mb-6">👥 Guest Management</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-mehrun/10 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Total Guests Expected</p>
                <p className="text-3xl font-bold text-mehrun">{guestCount}</p>
              </div>
              <div className="bg-gold/10 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Confirmed RSVPs</p>
                <p className="text-2xl font-bold text-gold">{Math.floor(guestCount * 0.7)}</p>
              </div>
              <div className="bg-mehrun/20 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Pending Responses</p>
                <p className="text-2xl font-bold text-mehrun">{Math.floor(guestCount * 0.3)}</p>
              </div>
            </div>
            <button className="w-full btn-gold">📧 Send RSVP Reminders</button>
          </div>
        </div>

        {/* AI Chatbot */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-mehrun mb-6 flex items-center gap-2">
            <FiMessageCircle /> AI Wedding Assistant
          </h3>
          <div className="bg-mehrun/10 rounded-lg p-6 mb-4 h-64 overflow-y-auto">
            <div className="text-center text-gray-600">
              💬 Chat with our AI assistant for wedding planning tips, vendor recommendations, and budget advice!
            </div>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask anything about your wedding planning..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-mehrun"
            />
            <button className="btn-mehrun">Send</button>
          </div>
        </div>

        {/* Export Options */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="btn-mehrun flex items-center gap-2">
            <FiDownload /> Download Plan (PDF)
          </button>
          <button className="btn-gold flex items-center gap-2">
            <FiDownload /> Export Timeline (CSV)
          </button>
        </div>
      </div>
    </div>
  );
}
