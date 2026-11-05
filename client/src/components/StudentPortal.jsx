import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

const notices = [
  { id: 1, title: 'Mid-Term Exam Schedule Released', date: 'Sept 10, 2026', dept: 'SOCSE' },
  { id: 2, title: 'Hackathon Registration Open', date: 'Sept 15, 2026', dept: 'RVU Tech Club' }
];

const assignments = [
  { id: 1, subject: 'CS3301 - Full Stack', title: 'Lab Assignment 2: React State Management', status: 'Pending', dueDate: 'Sept 12, 2026' },
  { id: 2, subject: 'CS3302 - DBMS', title: 'ER Diagram Project Report', status: 'Submitted', dueDate: 'Sept 01, 2026' }
];

/* ---------- Nested route views ---------- */

function Notices() {
  return (
    <div>
      <h3>📢 Campus Notices & Events</h3>
      <ul style={styles.list}>
        {notices.map((item) => (
          <li key={item.id} style={styles.listItem}>
            <div>
              <strong>{item.title}</strong>
              <p style={styles.subText}>{item.dept} • {item.date}</p>
            </div>
            <button style={styles.actionBtn}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Assignments() {
  return (
    <div>
      <h3>📝 Assignments & Submissions</h3>
      <ul style={styles.list}>
        {assignments.map((item) => (
          <li key={item.id} style={styles.listItem}>
            <div>
              <strong>{item.title}</strong>
              <p style={styles.subText}>{item.subject} • Due: {item.dueDate}</p>
            </div>
            <span style={item.status === 'Submitted' ? styles.badgeSuccess : styles.badgePending}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Attendance() {
  return (
    <div>
      <h3>📊 Attendance Tracker</h3>
      <div style={styles.grid}>
        <div style={styles.metricCard}>
          <h4>CS3301 - Full Stack</h4>
          <p style={styles.metricText}>88% Attendance</p>
        </div>
        <div style={styles.metricCard}>
          <h4>CS3302 - DBMS</h4>
          <p style={styles.metricText}>92% Attendance</p>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h3>👤 Student Profile</h3>
      <div style={{ textAlign: 'left', lineHeight: '1.8' }}>
        <p><strong>Name:</strong> RVU Student</p>
        <p><strong>Department:</strong> School of Computer Science & Engineering (SOCSE)</p>
        <p><strong>Course:</strong> CS3301 - Full Stack Development</p>
        <p><strong>Status:</strong> Active Enrolled</p>
      </div>
    </div>
  );
}

/* ---------- Student portal shell (nested routing) ---------- */

export default function StudentPortal({ onBackToHome }) {
  const tabStyle = ({ isActive }) => (isActive ? styles.activeTab : styles.tab);

  return (
    <div style={styles.container}>
      {/* Top Header Navigation */}
      <header style={styles.header}>
        <div>
          <h2 style={{ margin: 0, color: '#F2A900' }}>🎓 Student Portal</h2>
          <span style={{ fontSize: '13px', color: '#e0e0e0' }}>Welcome, RVU Student</span>
        </div>
        <button onClick={onBackToHome} style={styles.backBtn}>
          ← Back to Main Campus View
        </button>
      </header>

      {/* Portal Navigation Bar (NavLinks instead of useState tabs) */}
      <nav style={styles.tabContainer}>
        <NavLink to="/student" end style={tabStyle}>Notices & Events</NavLink>
        <NavLink to="/student/assignments" style={tabStyle}>Assignments</NavLink>
        <NavLink to="/student/attendance" style={tabStyle}>Track Attendance</NavLink>
        <NavLink to="/student/profile" style={tabStyle}>Profile</NavLink>
      </nav>

      {/* Main Feature Content Area (nested Routes) */}
      <div style={styles.contentCard}>
        <Routes>
          <Route index element={<Notices />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/student" replace />} />
        </Routes>
      </div>
    </div>
  );
}

const tabBase = {
  flex: 1,
  padding: '12px',
  textAlign: 'center',
  textDecoration: 'none',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const styles = {
  container: { maxWidth: '850px', margin: '30px auto', fontFamily: 'Arial, sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0A2240', padding: '15px 20px', borderRadius: '8px 8px 0 0', color: '#fff' },
  backBtn: { backgroundColor: '#F2A900', border: 'none', padding: '8px 14px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', color: '#0A2240' },
  tabContainer: { display: 'flex', backgroundColor: '#e0e0e0', borderBottom: '2px solid #0A2240' },
  tab: { ...tabBase, color: '#333', borderTop: '3px solid transparent' },
  activeTab: { ...tabBase, backgroundColor: '#ffffff', color: '#0A2240', borderTop: '3px solid #0A2240' },
  contentCard: { backgroundColor: '#ffffff', padding: '25px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderBottom: '1px solid #eee' },
  subText: { margin: '4px 0 0 0', fontSize: '12px', color: '#666' },
  actionBtn: { backgroundColor: '#0A2240', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' },
  badgeSuccess: { backgroundColor: '#28a745', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' },
  badgePending: { backgroundColor: '#ffc107', color: '#000', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' },
  metricCard: { border: '1px solid #ddd', padding: '15px', borderRadius: '6px', textAlign: 'center' },
  metricText: { fontSize: '18px', fontWeight: 'bold', color: '#0A2240' }
};