import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Avatar, Link, Button, Paper, TextField, Stack, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ bgcolor: '#f8fbff', minHeight: '100vh' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: '#222', borderBottom: '1px solid #e6eaf0' }}>
        <Toolbar sx={{ maxWidth: 1400, mx: 'auto', width: '100%' }}>
          <Avatar sx={{ bgcolor: '#2563eb', mr: 1, width: 36, height: 36 }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.21 7 12 3.5 19.79 7 12 9.5zm0 2.5l10-5v6c0 5.25-4.5 9.5-10 9.5S2 20.25 2 15V9l10 5z" fill="#fff"/></svg>
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.5, flexGrow: 1 }}>ScholarMate</Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mr: 2 }}>
            <Link href="/features" underline="none" color="inherit" sx={{ fontWeight: 500 }}>Features</Link>
            <Link href="/how" underline="none" color="inherit" sx={{ fontWeight: 500 }}>How It Works</Link>
            <Link href="/about" underline="none" color="inherit" sx={{ fontWeight: 500 }}>About</Link>
            <Link href="/contact" underline="none" color="inherit" sx={{ fontWeight: 500 }}>Contact</Link>
          </Box>
          <Button variant="contained" sx={{ bgcolor: '#2563eb', fontWeight: 600, borderRadius: 2, px: 3, boxShadow: 'none', '&:hover': { bgcolor: '#174ea6' } }} onClick={() => navigate('/chat')}>Find Scholarships</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h3" align="center" fontWeight={800} mb={4} color="#2563eb">
          Contact Us
        </Typography>
        <Typography align="center" color="text.secondary" mb={4}>
          Have a question, suggestion, or partnership inquiry? Fill out the form below and our team will get back to you soon.
        </Typography>
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
          {submitted && <Alert severity="success" sx={{ mb: 2 }}>Thank you for contacting us! We'll be in touch soon.</Alert>}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField label="Name" name="name" value={form.name} onChange={handleChange} required fullWidth />
              <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth />
              <TextField label="Message" name="message" value={form.message} onChange={handleChange} required fullWidth multiline minRows={4} />
              <Button type="submit" variant="contained" sx={{ bgcolor: '#2563eb', fontWeight: 600, borderRadius: 2, px: 3, boxShadow: 'none', '&:hover': { bgcolor: '#174ea6' } }}>Send Message</Button>
            </Stack>
          </form>
        </Paper>
      </Container>
      <Box component="footer" sx={{ textAlign: 'center', py: 3, color: '#777', fontSize: '0.95rem', bgcolor: '#f8fbff', borderTop: '1px solid #e6eaf0' }}>
        &copy; 2025 ScholarMate. All rights reserved.
      </Box>
    </Box>
  );
};

export default Contact; 