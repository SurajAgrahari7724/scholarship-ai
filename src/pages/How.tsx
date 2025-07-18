import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Grid, Paper, Avatar, Link, Button, Stepper, Step, StepLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    label: 'Sign Up or Start Chatting',
    desc: 'No lengthy forms! Just start chatting or sign up to personalize your experience.'
  },
  {
    label: 'Tell Us About Yourself',
    desc: 'Share your academic background, interests, and goals so our AI can match you accurately.'
  },
  {
    label: 'Get Matched Instantly',
    desc: 'Our AI recommends scholarships you\'re eligible for, instantly and for free.'
  },
  {
    label: 'Apply & Succeed',
    desc: 'Get application tips, reminders, and support to maximize your chances.'
  },
];

const How = () => {
  const navigate = useNavigate();
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
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h3" align="center" fontWeight={800} mb={6} color="#2563eb">
          How It Works
        </Typography>
        <Stepper orientation="vertical" activeStep={-1} sx={{ bgcolor: 'transparent' }}>
          {steps.map((step, i) => (
            <Step key={i} completed={false}>
              <StepLabel>
                <Typography variant="h6" fontWeight={700}>{step.label}</Typography>
              </StepLabel>
              <Typography color="text.secondary" sx={{ ml: 4, mb: 3 }}>{step.desc}</Typography>
            </Step>
          ))}
        </Stepper>
      </Container>
      <Box component="footer" sx={{ textAlign: 'center', py: 3, color: '#777', fontSize: '0.95rem', bgcolor: '#f8fbff', borderTop: '1px solid #e6eaf0' }}>
        &copy; 2025 ScholarMate. All rights reserved.
      </Box>
    </Box>
  );
};

export default How; 