import React from 'react';
import { 
  CheckCircle, 
  User, 
  BookOpen, 
  Award, 
  MessageCircle, 
  Search, 
  FileText, 
  Play, 
  Star,
  ChevronRight,
  Bot,
  Target,
  Calendar
} from 'lucide-react';

import OfficeTour from "./OfficeTour";

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  header: {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid #e5e7eb'
  },
  headerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeSection: {
    background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
    borderRadius: '12px',
    padding: '24px',
    color: 'white',
    marginBottom: '32px'
  },
  welcomeContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  welcomeTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  welcomeSubtitle: {
    color: '#bfdbfe',
    marginBottom: '16px'
  },
  progressPercent: {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'right'
  },
  tabContainer: {
    display: 'flex',
    gap: '4px',
    marginBottom: '32px',
    backgroundColor: '#f3f4f6',
    padding: '4px',
    borderRadius: '8px'
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  tabActive: {
    backgroundColor: 'white',
    color: '#2563eb',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  },
  tabInactive: {
    backgroundColor: 'transparent',
    color: '#4b5563'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  },
  cardHeader: {
    padding: '24px',
    borderBottom: '1px solid #e5e7eb'
  },
  cardContent: {
    padding: '24px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '32px'
  },
  gridMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    transition: 'width 0.3s ease'
  },
  button: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s'
  },
  taskItem: {
    padding: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  taskCompleted: {
    borderColor: '#10b981',
    backgroundColor: '#f0fdf4'
  },
  taskUrgent: {
    borderColor: '#ef4444',
    backgroundColor: '#fef2f2'
  },
  chatbot: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    width: '320px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: '1px solid #e5e7eb'
  },
  achievement: {
    padding: '16px',
    borderRadius: '8px',
    border: '2px solid #e5e7eb',
    backgroundColor: '#f9fafb'
  },
  achievementEarned: {
    borderColor: '#fbbf24',
    backgroundColor: '#fefbf0'
  }
};

const TalentFlowDashboard = () => {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [completedTasks, setCompletedTasks] = React.useState(new Set());
  const [searchQuery, setSearchQuery] = React.useState('');
  const [chatOpen, setChatOpen] = React.useState(false);
  const [points, setPoints] = React.useState(245);
  const [level, setLevel] = React.useState(2);

  const employee = {
    name: "Risikesan",
    role: "ML Engineer", 
    department: "Developer Team",
    startDate: "2025-08-15",
    avatar: "RY"
  };

  const onboardingTasks = [
    { id: 1, title: "Complete Personal Information Form", type: "document", urgent: true, points: 20 },
    { id: 2, title: "Sign Employment Contract", type: "document", urgent: true, points: 25 },
    { id: 3, title: "Setup IT Equipment", type: "checklist", urgent: false, points: 15 },
    { id: 4, title: "Company Security Training", type: "training", urgent: true, points: 30 },
    { id: 5, title: "Meet Your Team", type: "meeting", urgent: false, points: 20 },
    { id: 6, title: "Office Tour & Safety Briefing", type: "checklist", urgent: false, points: 15 }
  ];

  const learningPaths = [
    { id: 1, title: "Company Culture & Values", progress: 75, modules: 4, completed: 3, estimatedTime: "2h 30m" },
    { id: 2, title: "Design System Fundamentals", progress: 25, modules: 8, completed: 2, estimatedTime: "4h 15m" },
    { id: 3, title: "Product Development Process", progress: 0, modules: 6, completed: 0, estimatedTime: "3h 45m" }
  ];

  const achievements = [
    { id: 1, title: "First Steps", description: "Completed your first onboarding task", earned: true },
    { id: 2, title: "Document Master", description: "Signed all required documents", earned: true },
    { id: 3, title: "Culture Explorer", description: "Finished company culture training", earned: false },
    { id: 4, title: "Team Player", description: "Met with your entire team", earned: false }
  ];

  const knowledgeBase = [
    "How do I access company email?",
    "What are the office hours and remote work policies?", 
    "Where can I find the employee handbook?",
    "How do I request time off?",
    "What benefits am I eligible for?",
    "How do I set up my development environment?"
  ];


  const vrTour = [];


  const toggleTask = (taskId) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
      setPoints(prev => prev - 20);
    } else {
      newCompleted.add(taskId);
      const task = onboardingTasks.find(t => t.id === taskId);
      setPoints(prev => prev + (task?.points || 20));
    }
    setCompletedTasks(newCompleted);
  };

  const [chatMessages, setChatMessages] = React.useState([
  {
    id: 1,
    text: `👋 Hi ${employee.name.split(' ')[0]}! I'm here to help with any onboarding questions you have. What can I assist you with today?`,
    sender: 'bot',
    timestamp: new Date()
  }
]);
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [isConnected, setIsConnected] = React.useState(true);


  const getTaskIcon = (type) => {
    switch(type) {
      case 'document': return <FileText size={16} />;
      case 'training': return <BookOpen size={16} />;
      case 'meeting': return <User size={16} />;
      default: return <CheckCircle size={16} />;
    }
  };

  const sendMessageToAPI = async (message) => {
  try {
    setIsTyping(true);
    
    
    // Replace with your actual API endpoint
    const response = await fetch('https://openrouter.ai/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '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', // Add your API key
      },
      body: JSON.stringify({
        message: message,
        userId: employee.name, // or employee ID
        context: {
          role: employee.role,
          department: employee.department,
          completedTasks: Array.from(completedTasks),
          onboardingProgress: completionPercentage
        }
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    // Add bot response to chat
    const botMessage = {
      id: Date.now() + 1,
      text: data.response || data.message, // Adjust based on your API response structure
      sender: 'bot',
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, botMessage]);
    
  } catch (error) {
    console.error('Error sending message:', error);
    
    // Fallback response for errors
    const errorMessage = {
      id: Date.now() + 1,
      text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact HR directly.",
      sender: 'bot',
      timestamp: new Date(),
      isError: true
    };
    
    setChatMessages(prev => [...prev, errorMessage]);
    setIsConnected(false);
    
    // Retry connection after 3 seconds
    setTimeout(() => setIsConnected(true), 3000);
  } finally {
    setIsTyping(false);
  }
};

  const handleSendMessage = async (e) => {
  e.preventDefault();
  
  if (!currentMessage.trim()) return;
  
  // Add user message to chat
  const userMessage = {
    id: Date.now(),
    text: currentMessage,
    sender: 'user',
    timestamp: new Date()
  };
  
  setChatMessages(prev => [...prev, userMessage]);
  const messageToSend = currentMessage;
  setCurrentMessage('');
  
  // Send to API
  await sendMessageToAPI(messageToSend);
};

  const filteredKnowledge = knowledgeBase.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  React.useEffect(() => {
    if (points >= 300) setLevel(3);
    else if (points >= 150) setLevel(2);
    else setLevel(1);
  }, [points]);

  const completionPercentage = Math.round((completedTasks.size / onboardingTasks.length) * 100);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Bot color="white" size={24} />
            </div>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, color: '#111827' }}>TalentFlow AI</h1>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Employee Onboarding</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
              padding: '8px 12px', 
              borderRadius: '8px' 
            }}>
              <Award color="#d97706" size={16} />
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#92400e' }}>Level {level}</span>
              <span style={{ fontSize: '14px', color: '#d97706' }}>{points} pts</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                backgroundColor: '#3b82f6', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                fontSize: '14px', 
                fontWeight: '600' 
              }}>
                {employee.avatar}
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: '500', margin: 0, color: '#111827' }}>{employee.name}</p>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>{employee.role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Welcome Section */}
        <div style={styles.welcomeSection}>
          <div style={styles.welcomeContent}>
            <div>
              <h2 style={styles.welcomeTitle}>Welcome to the team, {employee.name.split(' ')[0]}! 🎉</h2>
              <p style={styles.welcomeSubtitle}>Let's get you onboarded and ready to make an impact</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar color="white" size={16} />
                  <span style={{ fontSize: '14px' }}>Started: {employee.startDate}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Target color="white" size={16} />
                  <span style={{ fontSize: '14px' }}>{employee.department}</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={styles.progressPercent}>{completionPercentage}%</div>
              <div style={{ fontSize: '14px', color: '#bfdbfe' }}>Complete</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={styles.tabContainer}>
          {[
            { key: 'overview', label: 'Overview', icon: User },
            { key: 'tasks', label: 'Tasks', icon: CheckCircle },
            { key: 'learning', label: 'Learning', icon: BookOpen },
            { key: 'knowledge', label: 'Knowledge Base', icon: Search },
            { key: 'vrTour', label: 'VR Office Tour', icon: Search }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  ...styles.tab,
                  ...(isActive ? styles.tabActive : styles.tabInactive)
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.color = '#111827';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = '#4b5563';
                  }
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div style={window.innerWidth >= 1024 ? styles.grid : styles.gridMobile}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Progress Summary */}
              <div style={styles.card}>
                <div style={styles.cardContent}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Your Progress</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                        <span>Onboarding Tasks</span>
                        <span>{completedTasks.size}/{onboardingTasks.length}</span>
                      </div>
                      <div style={styles.progressBar}>
                        <div style={{ ...styles.progressFill, width: `${completionPercentage}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                        <span>Learning Modules</span>
                        <span>5/18 completed</span>
                      </div>
                      <div style={styles.progressBar}>
                        <div style={{ ...styles.progressFill, backgroundColor: '#10b981', width: '33%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div style={styles.card}>
                <div style={styles.cardContent}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Achievements</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    {achievements.map(achievement => (
                      <div key={achievement.id} style={achievement.earned ? styles.achievementEarned : styles.achievement}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            backgroundColor: achievement.earned ? '#f59e0b' : '#9ca3af'
                          }}>
                            <Award color="white" size={20} />
                          </div>
                          <div>
                            <h4 style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>{achievement.title}</h4>
                            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>{achievement.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            

            {/* Quick Actions Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={styles.card}>
                <div style={styles.cardContent}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Quick Actions</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button 
                      onClick={() => setActiveTab('tasks')}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        padding: '12px', 
                        backgroundColor: '#eff6ff', 
                        border: 'none',
                        borderRadius: '8px', 
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#dbeafe'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#eff6ff'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircle color="#2563eb" size={20} />
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>View Tasks</span>
                      </div>
                      <ChevronRight color="#2563eb" size={16} />
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('learning')}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        padding: '12px', 
                        backgroundColor: '#f0fdf4', 
                        border: 'none',
                        borderRadius: '8px', 
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <BookOpen color="#16a34a" size={20} />
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>Start Learning</span>
                      </div>
                      <ChevronRight color="#16a34a" size={16} />
                    </button>
                    
                    <button 
                      onClick={() => setChatOpen(true)}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        padding: '12px', 
                        backgroundColor: '#faf5ff', 
                        border: 'none',
                        borderRadius: '8px', 
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <MessageCircle color="#9333ea" size={20} />
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>Ask HR</span>
                      </div>
                      <ChevronRight color="#9333ea" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Onboarding Tasks</h3>
              <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>Complete these tasks to get fully onboarded</p>
            </div>
            <div style={styles.cardContent}>
              {onboardingTasks.map(task => {
                const isCompleted = completedTasks.has(task.id);
                return (
                  <div key={task.id} style={{
                    ...styles.taskItem,
                    ...(isCompleted ? styles.taskCompleted : task.urgent ? styles.taskUrgent : {})
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button
                        onClick={() => toggleTask(task.id)}
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          border: `2px solid ${isCompleted ? '#10b981' : '#9ca3af'}`,
                          backgroundColor: isCompleted ? '#10b981' : 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {isCompleted && <CheckCircle color="white" size={16} />}
                      </button>
                      
                      <div>
                        <h4 style={{ 
                          fontWeight: '500', 
                          margin: 0,
                          textDecoration: isCompleted ? 'line-through' : 'none',
                          color: isCompleted ? '#6b7280' : '#111827'
                        }}>
                          {task.title}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {getTaskIcon(task.type)}
                            <span style={{ fontSize: '12px', color: '#6b7280', textTransform: 'capitalize' }}>{task.type}</span>
                          </div>
                          {task.urgent && !isCompleted && (
                            <span style={{ 
                              fontSize: '12px', 
                              backgroundColor: '#fef2f2', 
                              color: '#dc2626', 
                              padding: '2px 8px', 
                              borderRadius: '4px' 
                            }}>Urgent</span>
                          )}
                          <span style={{ fontSize: '12px', color: '#6b7280' }}>+{task.points} points</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      style={styles.button}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
                    >
                      Start
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Learning Tab */}
        {activeTab === 'learning' && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Learning Paths</h3>
              <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>Personalized training modules for your role</p>
            </div>
            <div style={styles.cardContent}>
              {learningPaths.map(path => (
                <div key={path.id} style={{ 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px', 
                  padding: '24px',
                  marginBottom: '24px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>{path.title}</h4>
                      <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0 0 0' }}>
                        {path.completed}/{path.modules} modules completed • {path.estimatedTime} total
                      </p>
                    </div>
                    <button style={{ 
                      ...styles.button,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <Play size={16} />
                      <span>{path.progress > 0 ? 'Continue' : 'Start'}</span>
                    </button>
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                      <span>Progress</span>
                      <span>{path.progress}%</span>
                    </div>
                    <div style={styles.progressBar}>
                      <div style={{ ...styles.progressFill, width: `${path.progress}%` }}></div>
                    </div>
                  </div>
                  
                  {path.progress > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {[...Array(path.completed)].map((_, i) => (
                          <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                        ))}
                        {[...Array(path.modules - path.completed)].map((_, i) => (
                          <Star key={i} size={16} color="#d1d5db" />
                        ))}
                      </div>
                      <span style={{ fontSize: '14px', color: '#6b7280' }}>
                        {path.completed} of {path.modules} modules complete
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Knowledge Base Tab */}
        {activeTab === 'knowledge' && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Knowledge Base</h3>
              <p style={{ color: '#6b7280', margin: '4px 0 0 0' }}>Find answers to common questions</p>
            </div>
            <div style={styles.cardContent}>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ position: 'relative' }}>
                  <Search 
                    style={{ 
                      position: 'absolute', 
                      left: '12px', 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      color: '#9ca3af' 
                    }} 
                    size={20} 
                  />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      paddingLeft: '44px',
                      paddingRight: '16px',
                      paddingTop: '12px',
                      paddingBottom: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredKnowledge.map((item, index) => (
                  <button
                    key={index}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '16px',
                      backgroundColor: '#f9fafb',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f9fafb'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: '500' }}>{item}</span>
                      <ChevronRight color="#9ca3af" size={16} />
                    </div>
                  </button>
                ))}
              </div>
              
              {filteredKnowledge.length === 0 && searchQuery && (
                <div style={{ textAlign: 'center', padding: '32px' }}>
                  <p style={{ color: '#6b7280', marginBottom: '8px' }}>No results found for "{searchQuery}"</p>
                  <button 
                    onClick={() => setChatOpen(true)}
                    style={{ 
                      color: '#3b82f6', 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Ask our HR chatbot instead
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

        {activeTab === "vrTour" && <OfficeTour />}


   

      {/* HR Chatbot */}
{chatOpen && (
  <div style={styles.chatbot}>
    <div style={{ 
      padding: '16px', 
      borderBottom: '1px solid #e5e7eb', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: '#8b5cf6', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <Bot color="white" size={16} />
        </div>
        <div>
          <h4 style={{ fontWeight: '600', margin: 0, fontSize: '14px' }}>HR Assistant</h4>
          <p style={{ 
            fontSize: '12px', 
            color: isConnected ? '#10b981' : '#ef4444', 
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isConnected ? '#10b981' : '#ef4444',
              display: 'inline-block'
            }} />
            {isConnected ? 'Online' : 'Reconnecting...'}
          </p>
        </div>
      </div>
      <button 
        onClick={() => setChatOpen(false)}
        style={{ 
          color: '#9ca3af', 
          background: 'none', 
          border: 'none', 
          fontSize: '20px', 
          cursor: 'pointer',
          padding: '0',
          width: '24px',
          height: '24px'
        }}
      >
        ×
      </button>
    </div>
    
    {/* Chat Messages */}
    <div style={{ 
      padding: '16px', 
      height: '300px', 
      backgroundColor: '#f9fafb',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      {chatMessages.map((message) => (
        <div 
          key={message.id}
          style={{
            display: 'flex',
            justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
          }}
        >
          <div style={{ 
            backgroundColor: message.sender === 'user' ? '#3b82f6' : 'white', 
            color: message.sender === 'user' ? 'white' : '#111827',
            padding: '10px 14px', 
            borderRadius: message.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
            maxWidth: '80%',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            fontSize: '14px',
            lineHeight: '1.4',
            border: message.isError ? '1px solid #ef4444' : 'none'
          }}>
            {message.text}
            <div style={{
              fontSize: '11px',
              opacity: 0.7,
              marginTop: '4px',
              color: message.sender === 'user' ? '#bfdbfe' : '#6b7280'
            }}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      ))}
      
      {/* Typing Indicator */}
      {isTyping && (
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '10px 14px', 
            borderRadius: '18px 18px 18px 4px',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <div style={{
              display: 'flex',
              gap: '2px'
            }}>
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#6b7280',
                    borderRadius: '50%',
                    animation: `typing 1.5s ease-in-out ${i * 0.2}s infinite`
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: '12px', color: '#6b7280', marginLeft: '4px' }}>
              HR Assistant is typing...
            </span>
          </div>
        </div>
      )}
    </div>
    
    {/* Message Input */}
    <div style={{ padding: '16px', borderTop: '1px solid #e5e7eb' }}>
      <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
        <input 
          type="text" 
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type your question..."
          disabled={!isConnected}
          style={{
            flex: 1,
            padding: '10px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '20px',
            outline: 'none',
            fontSize: '14px',
            backgroundColor: isConnected ? 'white' : '#f3f4f6'
          }}
          onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
          onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
        />
        <button 
          type="submit"
          disabled={!currentMessage.trim() || !isConnected}
          style={{
            ...styles.button,
            backgroundColor: (!currentMessage.trim() || !isConnected) ? '#9ca3af' : '#8b5cf6',
            cursor: (!currentMessage.trim() || !isConnected) ? 'not-allowed' : 'pointer',
            borderRadius: '20px',
            padding: '10px 16px'
          }}
        >
          Send
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

function App() {
  return <TalentFlowDashboard />;
 
}


export default App;
