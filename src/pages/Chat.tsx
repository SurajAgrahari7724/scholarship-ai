import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Avatar,
  Stack,
  CircularProgress,
  Link,
  Divider,
  Fade,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8000/chatbot';

const Chat = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "👋 Hi! I'm your Scholarship AI Assistant. Ask me anything about scholarships, eligibility, or application tips!",
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!prompt.trim()) {
      return;
    }
    setIsLoading(true);
    setError(null);
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: prompt, time: new Date().toLocaleTimeString() },
    ]);
    setPrompt('');
    try {
      const res = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: data.response, time: new Date().toLocaleTimeString() },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Sorry, something went wrong. Please try again.', time: new Date().toLocaleTimeString() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box sx={{ bgcolor: '#f8fbff', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: '#222', borderBottom: '1px solid #e6eaf0' }}>
        <Toolbar sx={{ maxWidth: 1400, mx: 'auto', width: '100%' }}>
          <Avatar sx={{ bgcolor: '#2563eb', mr: 1, width: 36, height: 36 }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.21 7 12 3.5 19.79 7 12 9.5zm0 2.5l10-5v6c0 5.25-4.5 9.5-10 9.5S2 20.25 2 15V9l10 5z" fill="#fff"/></svg>
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.5, flexGrow: 1 }}>
            ScholarMate
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mr: 2 }}>
            <Link href="/" underline="none" color="inherit" sx={{ fontWeight: 500 }}>Home</Link>
            <Link href="/#features" underline="none" color="inherit" sx={{ fontWeight: 500 }}>Features</Link>
            <Link href="/#how" underline="none" color="inherit" sx={{ fontWeight: 500 }}>How It Works</Link>
            <Link href="/#about" underline="none" color="inherit" sx={{ fontWeight: 500 }}>About</Link>
          </Box>
          <Button variant="contained" sx={{ bgcolor: '#2563eb', fontWeight: 600, borderRadius: 2, px: 3, boxShadow: 'none', '&:hover': { bgcolor: '#174ea6' } }} onClick={() => navigate('/')}>Find Scholarships</Button>
        </Toolbar>
      </AppBar>

      {/* Chat Section */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 }, minHeight: '80vh' }}>
        <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4, minHeight: 600, display: 'flex', flexDirection: 'column', bgcolor: '#fff', boxShadow: '0 8px 32px rgba(80,120,255,0.07)' }}>
          <Typography variant="h4" fontWeight={700} color="#2563eb" mb={2} align="center">
            Scholarship AI Chat
          </Typography>
          <Typography align="center" color="text.secondary" mb={3}>
            Ask anything about scholarships, eligibility, or how to apply. Our AI is here to help you succeed!
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ flex: 1, overflowY: 'auto', mb: 2, px: { xs: 0, md: 2 } }}>
            {messages.map((msg, idx) => (
              <Fade in key={idx} timeout={400}>
                <Stack direction={msg.sender === 'user' ? 'row-reverse' : 'row'} alignItems="flex-end" spacing={2} mb={2}>
                  <Avatar sx={{ bgcolor: msg.sender === 'ai' ? '#2563eb' : '#43b581', color: 'white', width: 40, height: 40 }}>
                    {msg.sender === 'ai' ? <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.21 7 12 3.5 19.79 7 12 9.5zm0 2.5l10-5v6c0 5.25-4.5 9.5-10 9.5S2 20.25 2 15V9l10 5z" fill="#fff"/></svg> : 'U'}
                  </Avatar>
                  <Box>
                    <Paper sx={{
                      p: 2,
                      bgcolor: msg.sender === 'ai' ? '#f0f6ff' : '#e6f4ea',
                      color: '#222',
                      borderRadius: 3,
                      minWidth: 120,
                      maxWidth: { xs: 260, md: 400 },
                      fontSize: '1rem',
                      boxShadow: '0 2px 8px rgba(80,120,255,0.07)',
                    }}>
                      {msg.text}
                    </Paper>
                    <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, ml: 1 }}>
                      {msg.time}
                    </Typography>
                  </Box>
                </Stack>
              </Fade>
            ))}
            <div ref={messagesEndRef} />
          </Box>
          {error && (
            <Typography color="error" align="center" mb={2}>{error}</Typography>
          )}
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end', mt: 1 }}>
            <TextField
              fullWidth
              multiline
              minRows={2}
              maxRows={4}
              placeholder="Type your message..."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              sx={{
                bgcolor: '#f8fbff',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#e6eaf0' },
                  '&:hover fieldset': { borderColor: '#2563eb' },
                },
              }}
            />
            <Button
              variant="contained"
              endIcon={isLoading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
              onClick={handleSend}
              disabled={isLoading || !prompt.trim()}
              sx={{ bgcolor: '#2563eb', borderRadius: 2, minHeight: 48, minWidth: 48, px: 3, fontWeight: 600, boxShadow: 'none', '&:hover': { bgcolor: '#174ea6' } }}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        </Paper>
      </Container>
      <Box component="footer" sx={{ textAlign: 'center', py: 3, color: '#777', fontSize: '0.95rem', bgcolor: '#f8fbff', borderTop: '1px solid #e6eaf0' }}>
        &copy; 2025 ScholarMate. All rights reserved.
      </Box>
    </Box>
  );
};

export default Chat; 