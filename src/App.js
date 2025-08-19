import React from 'react';
import { 
  CheckCircle, Clock, User, BookOpen, Award, MessageCircle, Search, FileText, Play, Star,
  ChevronRight, Bot, Target, Calendar, Zap, Trophy, Timer, ArrowUp, Bell, X, BarChart3,
  Users, TrendingUp, Moon, Sun,
} from 'lucide-react';

const TalentFlowDashboard = () => {
  // --- STATE MANAGEMENT (From AI Version) ---
  const [activeTab, setActiveTab] = React.useState('overview');
  const [completedTasks, setCompletedTasks] = React.useState(new Set([1, 2]));
  const [searchQuery, setSearchQuery] = React.useState('');
  const [chatOpen, setChatOpen] = React.useState(false);
  const [points, setPoints] = React.useState(245);
  const [level, setLevel] = React.useState(2);
  const [darkMode, setDarkMode] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  
  // AI-specific states
  const [personalizedPaths, setPersonalizedPaths] = React.useState([]);
  const [isLoadingPaths, setIsLoadingPaths] = React.useState(false);
  const [aiInsights, setAiInsights] = React.useState({
    predictedCompletion: null, recommendations: [], benchmarks: {}, nudges: [],
  });
  const [isLoadingInsights, setIsLoadingInsights] = React.useState(false);

  // HR Chatbot states
  const [chatMessages, setChatMessages] = React.useState([]);
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  // --- DATA (Combined from both versions) ---
  const employee = {
    name: "Sarah Chen",
    role: "Senior Product Designer", 
    department: "Design Team",
    startDate: "2025-08-15",
    avatar: "SC"
  };

  const onboardingTasks = [
    { id: 1, title: "Complete Personal Information Form", type: "document", urgent: true, points: 20, estimatedTime: "5 min" },
    { id: 2, title: "Sign Employment Contract", type: "document", urgent: true, points: 25, estimatedTime: "10 min" },
    { id: 3, title: "Setup IT Equipment", type: "checklist", urgent: false, points: 15, estimatedTime: "30 min" },
    { id: 4, title: "Company Security Training", type: "training", urgent: true, points: 30, estimatedTime: "45 min" },
    { id: 5, title: "Meet Your Team", type: "meeting", urgent: false, points: 20, estimatedTime: "60 min" },
    { id: 6, title: "Office Tour & Safety Briefing", type: "checklist", urgent: false, points: 15, estimatedTime: "20 min" }
  ];

  const achievements = [
    { id: 1, title: "First Steps", description: "Completed your first onboarding task", earned: true },
    { id: 2, title: "Document Master", description: "Signed all required documents", earned: true },
    { id: 3, title: "Culture Explorer", description: "Finished company culture training", earned: false, progress: 75 },
    { id: 4, title: "Team Player", description: "Met with your entire team", earned: false, progress: 0 }
  ];

  const knowledgeBase = [ "How do I access company email?", "What are the office hours and remote work policies?", "Where can I find the employee handbook?", "How do I request time off?", "What benefits am I eligible for?", "How do I set up my development environment?" ];
  const analytics = { avgLearningTime: "2.3 hours/day", completionRate: 67, peerComparison: "+15%", streakDays: 3, nextMilestone: "Complete 3 more modules to unlock Culture Explorer badge", weeklyProgress: [ { day: 'Mon', minutes: 120 }, { day: 'Tue', minutes: 90 }, { day: 'Wed', minutes: 150 }, { day: 'Thu', minutes: 180 }, { day: 'Fri', minutes: 140 }, { day: 'Sat', minutes: 60 }, { day: 'Sun', minutes: 85 } ] };

  // --- THEME (Merged from both versions) ---
  const getTheme = () => {
    if (darkMode) {
      return {
        bg: '#0B1120',
        cardBg: '#1A202C',
        headerBg: 'rgba(26, 32, 44, 0.8)',
        text: '#E2E8F0',
        textSecondary: '#A0AEC0',
        border: '#2D3748',
        accent: '#38B2AC', // Teal accent
        primary: '#0EA5E9', // Main bright blue
        taskBg: '#2D3748',
      };
    }
    return {
      bg: '#F7F9FC',
      cardBg: '#FFFFFF',
      headerBg: 'rgba(255, 255, 255, 0.8)',
      text: '#2D3748',
      textSecondary: '#718096',
      border: '#E2E8F0',
      accent: '#38B2AC', // Teal accent from the design for secondary elements
      primary: '#0EA5E9', // The main bright blue
      taskBg: '#F7F9FC',
    };
  };
  const theme = getTheme();

  // --- ASYNC FUNCTIONS (From AI Version) ---
  // IMPORTANT: Replace `YOUR_GROQ_API_KEY` with your actual Groq API key.
  const API_KEY = 'YOUR_GROQ_API_KEY'; // Replace this!

  const generatePersonalizedPaths = async (userProfile) => {
    setIsLoadingPaths(true);
    // Mock API call for demonstration
    setTimeout(() => {
        const fallbackPaths = [
            { id: 1, title: "Company Culture & Values", description: "Learn about our mission, values, and workplace culture", priority: "high", estimatedTime: "2h 30m", modules: 4, completed: 0, progress: 0, relevanceReason: "Essential for all new employees to understand company culture" },
            { id: 2, title: "Design System & Brand Guidelines", description: "Master our design system, components, and brand standards", priority: "high", estimatedTime: "3h 15m", modules: 6, completed: 0, progress: 0, relevanceReason: "Critical for designers to maintain consistency across all products" },
            { id: 3, title: "User Research & Testing Process", description: "Learn our UX research methodologies and testing protocols", priority: "medium", estimatedTime: "2h 45m", modules: 5, completed: 0, progress: 0, relevanceReason: "Essential for creating user-centered designs in our workflow" },
        ];
        setPersonalizedPaths(fallbackPaths);
        setIsLoadingPaths(false);
    }, 1500);
  };

  const generateAIInsights = async (userProfile) => {
    setIsLoadingInsights(true);
    // Mock API call for demonstration
    setTimeout(() => {
        const fallbackInsights = {
            predictedCompletion: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            daysAhead: 2,
            recommendations: [{ type: "focus", title: "Complete High-Priority Tasks", reason: `You have ${onboardingTasks.filter(t => t.urgent && !completedTasks.has(t.id)).length} urgent tasks remaining`, urgency: "high" }],
            benchmarks: { roleComparison: `+18% vs other Designers`, departmentRank: `Top 20%`, companyPercentile: 82 },
            nudges: [{ type: "motivation", message: `You're on a ${analytics.streakDays}-day streak! Keep it up!`, icon: "🔥" }],
        };
        setAiInsights(fallbackInsights);
        setIsLoadingInsights(false);
    }, 1500);
  };

  const sendMessageToHR = async (message, userProfile, conversationHistory) => {
    setIsTyping(true);
    // Mock bot response
    setTimeout(() => {
      const botResponse = "Thanks for your question! I'm looking into that for you. For specific policy details, you can always check the company handbook in the Knowledge Base tab.";
      const newBotMessage = { id: Date.now(), sender: 'bot', message: botResponse, timestamp: new Date() };
      setChatMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1200);
  };
  
  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;
    const userMessage = { id: Date.now(), sender: 'user', message: currentMessage.trim(), timestamp: new Date() };
    setChatMessages(prev => [...prev, userMessage]);
    await sendMessageToHR(currentMessage.trim(), employee, chatMessages);
    setCurrentMessage('');
  };
  
  // --- HELPER FUNCTIONS & COMPONENTS ---
  const Confetti = () => {
    if (!showConfetti) return null;
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
        {[...Array(50)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute', width: '10px', height: '10px',
            backgroundColor: [theme.primary, theme.accent, '#f59e0b', '#ef4444'][i % 4],
            left: `${Math.random() * 100}%`, top: '-10px', animation: `confetti-fall 3s linear forwards`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}/>
        ))}
      </div>
    );
  };
  
  const toggleTask = (taskId) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
      setPoints(prev => prev - 20);
    } else {
      newCompleted.add(taskId);
      const task = onboardingTasks.find(t => t.id === taskId);
      setPoints(prev => prev + (task?.points || 20));
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    setCompletedTasks(newCompleted);
  };
  
  React.useEffect(() => {
    if (points >= 300) setLevel(3);
    else if (points >= 150) setLevel(2);
    else setLevel(1);
  }, [points]);
  
  React.useEffect(() => {
    setChatMessages([{
      id: 1, sender: 'bot',
      message: `👋 Hi ${employee.name.split(' ')[0]}! I'm your AI assistant. How can I help you with your onboarding today?`,
    }]);
    generateAIInsights(employee); 
    generatePersonalizedPaths(employee);
  }, []);

  const completionPercentage = Math.round((completedTasks.size / onboardingTasks.length) * 100);

  // Style objects from "blue UI" version, using the dynamic theme
  const cardStyle = {
    backgroundColor: theme.cardBg,
    borderRadius: '16px',
    border: `1px solid ${theme.border}`,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  };

  const primaryButtonStyle = {
    backgroundColor: theme.primary,
    color: '#FFFFFF',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    boxShadow: `0 4px 6px rgba(14, 165, 233, ${darkMode ? 0.3 : 0.2})`,
  };

  // --- JSX RENDER ---
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: theme.bg,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: theme.text,
      transition: 'all 0.3s ease',
    }}>
      <Confetti />
      
      {/* Header combining elements from both versions */}
      <header style={{
        padding: '16px 0', position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: theme.headerBg, backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${theme.border}`,
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bot size={24} color={theme.primary} />
            <span style={{ fontWeight: 'bold', fontSize: '20px', color: theme.text }}>TalentFlow</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
             <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.textSecondary }}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <div style={{ position: 'relative', cursor: 'pointer' }}>
                <Bell size={20} color={theme.textSecondary} />
                <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }} />
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{width: '32px', height: '32px', backgroundColor: theme.primary, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px'}}>{employee.avatar}</div>
                <div>
                   <p style={{ margin: 0, fontWeight: '500', color: theme.text }}>{employee.name}</p>
                   <p style={{ margin: 0, fontSize: '12px', color: theme.textSecondary }}>Level {level} • {points} pts</p>
                </div>
             </div>
          </div>
        </div>
      </header>
      
      <main>
        {/* Hero Section from the "blue UI" version */}
        <div style={{ 
            padding: '80px 24px',
            textAlign: 'center',
            background: darkMode ? theme.bg : `linear-gradient(180deg, #E0F2FE 0%, ${theme.bg} 100%)`
        }}>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 16px 0', lineHeight: 1.2, color: theme.text }}>
                Welcome Aboard, Sarah! <br/> Your Journey Starts Here.
            </h1>
            <p style={{ fontSize: '18px', color: theme.textSecondary, maxWidth: '600px', margin: '0 auto 40px auto' }}>
                We’re thrilled to have you. Let’s complete your onboarding tasks and get you ready to succeed.
            </p>
            <div style={{
                width: '200px', height: '200px', margin: '0 auto',
                position: 'relative', display: 'flex',
                alignItems: 'center', justifyContent: 'center'
            }}>
                <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
                    <circle cx="100" cy="100" r="90" stroke={theme.border} strokeWidth="10" fill="transparent" />
                    <circle cx="100" cy="100" r="90" stroke={theme.primary} strokeWidth="10" fill="transparent"
                        strokeDasharray={2 * Math.PI * 90}
                        strokeDashoffset={(2 * Math.PI * 90) * (1 - completionPercentage / 100)}
                        strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.5s ease' }}/>
                </svg>
                <div style={{
                    width: '140px', height: '140px', borderRadius: '50%', backgroundColor: theme.cardBg,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(0,0,0,0.05)'
                }}>
                    <Bot size={40} color={theme.primary} />
                    <p style={{ margin: '8px 0 0 0', fontWeight: 'bold', fontSize: '24px', color: theme.text }}>{completionPercentage}%</p>
                    <p style={{ margin: 0, fontSize: '12px', color: theme.textSecondary }}>Complete</p>
                </div>
            </div>
        </div>

        <div style={{ maxWidth: '1024px', margin: '-40px auto 40px auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
            {/* Tab navigation styled to match the new theme */}
            <div style={{
                display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '32px',
                backgroundColor: theme.cardBg, padding: '8px', borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', border: `1px solid ${theme.border}`
            }}>
                {[
                  { key: 'overview', label: 'Overview', icon: User },
                  { key: 'tasks', label: 'Tasks', icon: CheckCircle },
                  { key: 'learning', label: 'Learning', icon: BookOpen },
                  { key: 'analytics', label: 'Analytics', icon: BarChart3 },
                  { key: 'knowledge', label: 'Knowledge Base', icon: Search }
                ].map(tab => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.key;
                    return (
                        <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
                            display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px',
                            fontSize: '14px', fontWeight: '600', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease',
                            backgroundColor: isActive ? theme.primary : 'transparent',
                            color: isActive ? 'white' : theme.textSecondary,
                        }}>
                            <Icon size={16} />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* --- TAB CONTENT --- */}
            {activeTab === 'overview' && (
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
                <div style={{...cardStyle, padding: '32px'}}>
                    <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: theme.text }}>Progress Summary</h3>
                     <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', textAlign: 'center'}}>
                         <div>
                            <h4 style={{fontSize: '32px', margin: 0, color: theme.primary}}>{completedTasks.size}/{onboardingTasks.length}</h4>
                            <p style={{margin: '4px 0 0 0', color: theme.textSecondary}}>Tasks Completed</p>
                         </div>
                         <div>
                            <h4 style={{fontSize: '32px', margin: 0, color: theme.primary}}>{points}</h4>
                            <p style={{margin: '4px 0 0 0', color: theme.textSecondary}}>Points Earned</p>
                         </div>
                     </div>
                </div>
                <div style={{...cardStyle, padding: '32px'}}>
                    <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: theme.text }}>Achievements</h3>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center'}}>
                        {achievements.slice(0, 2).map(ach => (ach.earned && 
                            <div key={ach.id} style={{textAlign: 'center'}}>
                                <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#FBBF24', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px'}}>
                                    <Trophy size={28}/>
                                </div>
                                <p style={{margin: 0, fontSize: '14px', fontWeight: 500}}>{ach.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            )}
            
            {activeTab === 'tasks' && (
              <div style={{...cardStyle}}>
                <div style={{ padding: '24px', borderBottom: `1px solid ${theme.border}` }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', margin: 0, color: theme.text }}>Your Onboarding Tasks</h3>
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {onboardingTasks.map(task => {
                        const isCompleted = completedTasks.has(task.id);
                        return (
                            <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '12px', background: isCompleted ? (darkMode ? '#166534' : '#F0FFF4') : (task.urgent && !isCompleted ? (darkMode ? '#7f1d1d' : '#FEF2F2') : theme.cardBg), border: `1px solid ${isCompleted ? '#C6F6D5' : theme.border}` }}>
                                <button onClick={() => toggleTask(task.id)} style={{ minWidth: '24px', height: '24px', borderRadius: '50%', border: `2px solid ${isCompleted ? '#48BB78' : theme.border}`, backgroundColor: isCompleted ? '#48BB78' : 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {isCompleted && <CheckCircle color="white" size={16} />}
                                </button>
                                <div style={{flex: 1}}>
                                    <h4 style={{ fontWeight: '600', margin: 0, textDecoration: isCompleted ? 'line-through' : 'none', color: isCompleted ? theme.textSecondary : theme.text }}>{task.title}</h4>
                                    <p style={{margin: '4px 0 0 0', fontSize: '12px', color: theme.textSecondary}}>{task.estimatedTime}</p>
                                </div>
                                {task.urgent && !isCompleted && <span style={{fontSize: '12px', color: '#DC2626', background: '#FEE2E2', padding: '4px 8px', borderRadius: '12px', fontWeight: '500'}}>Urgent</span>}
                                <span style={{fontSize: '14px', color: theme.accent, fontWeight: '600'}}>+{task.points} pts</span>
                                <button style={{...primaryButtonStyle, padding: '8px 16px', fontSize: '12px'}}>Start</button>
                            </div>
                        )
                    })}
                </div>
              </div>
            )}

            {activeTab === 'learning' && (
                <div style={{ ...cardStyle }}>
                    <div style={{ padding: '24px', borderBottom: `1px solid ${theme.border}` }}>
                        <h3 style={{ fontSize: '20px', fontWeight: '600', margin: 0, color: theme.text }}>Personalized Learning Paths</h3>
                        <p style={{ color: theme.textSecondary, margin: '4px 0 0 0' }}>AI-curated modules for your role</p>
                    </div>
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {isLoadingPaths ? <p>AI is generating your paths...</p> : personalizedPaths.map(path => (
                            <div key={path.id} style={{ border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: theme.text }}>{path.title}</h4>
                                        <p style={{ color: theme.textSecondary, fontSize: '14px', margin: '4px 0 0 0' }}>{path.completed}/{path.modules} modules • {path.estimatedTime}</p>
                                    </div>
                                    <button style={{ ...primaryButtonStyle, padding: '10px 20px' }}>
                                        {path.progress > 0 ? 'Continue' : 'Start'}
                                    </button>
                                </div>
                                <div style={{width: '100%', height: '8px', backgroundColor: theme.border, borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', backgroundColor: theme.primary, width: `${path.progress}%`, transition: 'width 0.5s ease' }}></div>
                                </div>
                                <div style={{marginTop: '12px', padding: '12px', background: theme.taskBg, borderRadius: '8px', borderLeft: `3px solid ${theme.accent}`}}>
                                    <p style={{margin:0, fontSize: '12px', fontWeight: 600, color: theme.accent}}>Why this is for you:</p>
                                    <p style={{margin: '4px 0 0 0', fontSize: '12px', color: theme.textSecondary}}>{path.relevanceReason}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'analytics' && (
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                    <div style={{...cardStyle, padding: '24px'}}>
                        <h3 style={{ fontSize: '20px', fontWeight: '600', margin: 0, color: theme.text }}>Weekly Activity</h3>
                        <p style={{ color: theme.textSecondary, margin: '4px 0 16px 0' }}>Minutes spent learning per day</p>
                        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', height: '200px', gap: '8px' }}>
                          {analytics.weeklyProgress.map((day, index) => (
                              <div key={index} title={`${day.minutes} mins`} style={{ flex: 1, height: `${(day.minutes / 180) * 100}%`, backgroundColor: theme.primary, borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = theme.accent} onMouseLeave={e => e.currentTarget.style.backgroundColor = theme.primary}></div>
                          ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{...cardStyle, padding: '24px', textAlign: 'center'}}>
                             <p style={{margin: '0 0 8px 0', color: theme.textSecondary}}>AI Predicted Completion</p>
                             <h4 style={{fontSize: '24px', margin: 0, color: theme.text}}>{isLoadingInsights ? '...' : aiInsights.predictedCompletion}</h4>
                        </div>
                         <div style={{...cardStyle, padding: '24px', textAlign: 'center'}}>
                             <p style={{margin: '0 0 8px 0', color: theme.textSecondary}}>Learning Streak</p>
                             <h4 style={{fontSize: '24px', margin: 0, color: theme.text}}>{analytics.streakDays} Days 🔥</h4>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'knowledge' && (
                <div style={{...cardStyle}}>
                    <div style={{ padding: '24px', borderBottom: `1px solid ${theme.border}` }}>
                      <h3 style={{ fontSize: '20px', fontWeight: '600', margin: 0, color: theme.text }}>Knowledge Base</h3>
                      <div style={{ position: 'relative', marginTop: '16px' }}>
                          <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: theme.textSecondary }} size={20} />
                          <input type="text" placeholder="Search for answers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ width: '100%', padding: '12px 16px 12px 44px', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: theme.cardBg, color: theme.text, fontSize: '16px' }}/>
                      </div>
                    </div>
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {knowledgeBase.filter(q => q.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
                          <button key={index} style={{ width: '100%', textAlign: 'left', padding: '16px', background: theme.taskBg, border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: '500', color: theme.text }}>{item}</span>
                            <ChevronRight color={theme.textSecondary} size={16} />
                          </button>
                        ))}
                    </div>
                </div>
            )}

        </div>
      </main>

      {/* Chatbot FAB */}
      <button onClick={() => setChatOpen(!chatOpen)} style={{
          position: 'fixed', bottom: '24px', right: '24px', width: '56px', height: '56px',
          borderRadius: '50%', backgroundColor: theme.primary, color: 'white', border: 'none',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 8px 16px rgba(14, 165, 233, ${darkMode ? 0.5 : 0.3})`, transition: 'transform 0.2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
        {chatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Window */}
      {chatOpen && (
         <div style={{ ...cardStyle, position: 'fixed', bottom: '96px', right: '24px', width: '350px', zIndex: 1000, display: 'flex', flexDirection: 'column', height: '450px' }}>
             <div style={{ padding: '16px', borderBottom: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <Bot color={theme.primary} size={20} />
                     <h4 style={{ fontWeight: '600', margin: 0, fontSize: '16px', color: theme.text }}>TalentFlow Assistant</h4>
                 </div>
                 <button onClick={() => setChatOpen(false)} style={{ color: theme.textSecondary, background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
             </div>
             <div ref={el => el && el.scrollTo(0, el.scrollHeight)} style={{ flex: 1, overflowY: 'auto', padding: '16px', backgroundColor: theme.taskBg }}>
                 {chatMessages.map(msg => (
                    <div key={msg.id} style={{ marginBottom: '12px', display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                        <div style={{ maxWidth: '80%', padding: '12px', borderRadius: '12px', fontSize: '14px',
                            backgroundColor: msg.sender === 'user' ? theme.primary : theme.cardBg,
                            color: msg.sender === 'user' ? 'white' : theme.text,
                        }}>
                            {msg.message}
                        </div>
                    </div>
                ))}
                {isTyping && 
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ padding: '12px', backgroundColor: theme.cardBg, borderRadius: '12px' }}>
                            <div style={{ display: 'flex', gap: '4px' }}>
                              <div style={{width: '8px', height: '8px', backgroundColor: theme.textSecondary, borderRadius: '50%', animation: 'typing-bounce 1.4s ease-in-out infinite both'}}/>
                              <div style={{width: '8px', height: '8px', backgroundColor: theme.textSecondary, borderRadius: '50%', animation: 'typing-bounce 1.4s ease-in-out 0.2s infinite both'}}/>
                              <div style={{width: '8px', height: '8px', backgroundColor: theme.textSecondary, borderRadius: '50%', animation: 'typing-bounce 1.4s ease-in-out 0.4s infinite both'}}/>
                            </div>
                        </div>
                    </div>
                }
             </div>
             <div style={{ padding: '16px', borderTop: `1px solid ${theme.border}`, flexShrink: 0 }}>
                <input type="text" placeholder="Ask a question..." disabled={isTyping} value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: `1px solid ${theme.border}`, backgroundColor: theme.cardBg, color: theme.text }} />
             </div>
         </div>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes confetti-fall { to { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
        @keyframes typing-bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-6px); } }
        * { box-sizing: border-box; }
        button:hover { filter: brightness(1.1); }
      `}</style>
    </div>
  );
};

export default TalentFlowDashboard;
