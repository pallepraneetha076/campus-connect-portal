export default function ComingSoon({ title, onBackToHome }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.text}>This portal will be built in an upcoming module.</p>
      <button onClick={onBackToHome} style={styles.backBtn}>
        ← Back to Main Campus View
      </button>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  title: { color: '#0A2240', marginTop: 0 },
  text: { color: '#555555' },
  backBtn: {
    backgroundColor: '#F2A900',
    border: 'none',
    padding: '8px 14px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#0A2240'
  }
};