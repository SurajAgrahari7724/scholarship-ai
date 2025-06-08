import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Grid, Paper, Avatar, Link, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    title: 'Personalized Matches',
    desc: 'Our AI analyzes your unique profile to recommend scholarships you\'re truly eligible for.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
    title: 'Lightning Fast',
    desc: 'Get instant results and never miss a deadline with our real-time matching engine.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
    title: 'No Fees, Ever',
    desc: 'ScholarMate is 100% free for students. No hidden costs, no surprises.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828970.png',
    title: '24/7 AI Chat',
    desc: 'Get answers to your scholarship questions anytime, anywhere.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
    title: 'Global Reach',
    desc: 'Find scholarships for local and international studies.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828961.png',
    title: 'Success Stories',
    desc: 'Thousands of students have secured funding with ScholarMate.'
  },
];

const Features = () => {
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
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h3" align="center" fontWeight={800} mb={6} color="#2563eb">
          Platform Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((f, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', borderRadius: 3, height: '100%' }}>
                <img src={f.icon} alt={f.title} width={60} height={60} style={{ marginBottom: 16 }} />
                <Typography variant="h6" fontWeight={600} mb={1}>{f.title}</Typography>
                <Typography color="text.secondary">{f.desc}</Typography>
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

export default Features; 