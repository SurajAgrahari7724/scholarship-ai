import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Avatar, Link, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const team = [
  { name: 'Ayesha Khan', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Bilal Saeed', role: 'Lead AI Engineer', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Fatima Zahra', role: 'Product Manager', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
];

const About = () => {
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
        <Typography variant="h3" align="center" fontWeight={800} mb={4} color="#2563eb">
          About ScholarMate
        </Typography>
        <Typography align="center" color="text.secondary" mb={6}>
          ScholarMate is on a mission to make scholarships accessible to every student, everywhere. Our AI-powered platform helps you discover, match, and apply for scholarships with ease.
        </Typography>
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3, mb: 6, bgcolor: '#f0f6ff' }}>
          <Typography variant="h5" fontWeight={700} mb={2}>Our Mission</Typography>
          <Typography color="text.secondary">Empower students globally by removing financial barriers to education through technology and innovation.</Typography>
        </Paper>
        <Typography variant="h5" fontWeight={700} mb={3} align="center">Meet the Team</Typography>
        <Grid container spacing={4} justifyContent="center">
          {team.map((member, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Paper elevation={1} sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
                <Avatar src={member.img} sx={{ width: 72, height: 72, mx: 'auto', mb: 2 }} />
                <Typography fontWeight={600}>{member.name}</Typography>
                <Typography color="text.secondary">{member.role}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box component="footer" sx={{ textAlign: 'center', py: 3, color: '#777', fontSize: '0.95rem', bgcolor: '#f8fbff', borderTop: '1px solid #e6eaf0' }}>
        &copy; 2025 ScholarMate. All rights reserved.
      </Box>
    </Box>
  );
};

export default About; 