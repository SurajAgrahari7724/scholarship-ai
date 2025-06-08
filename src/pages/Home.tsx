import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
  Chip,
  Stack,
  Avatar,
  Link,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
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
  return (
    <Box sx={{ bgcolor: '#f8fbff', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: '#222', borderBottom: '1px solid #e6eaf0' }}>
        <Toolbar sx={{ maxWidth: 1400, mx: 'auto', width: '100%' }}>
          <Avatar sx={{ bgcolor: '#2563eb', mr: 1, width: 36, height: 36 }}>
            {/* You can replace this with your logo icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.21 7 12 3.5 19.79 7 12 9.5zm0 2.5l10-5v6c0 5.25-4.5 9.5-10 9.5S2 20.25 2 15V9l10 5z" fill="#fff"/></svg>
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.5, flexGrow: 1 }}>
            ScholarMate
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mr: 2 }}>
            <Link href="#features" underline="none" color="inherit" sx={{ fontWeight: 500 }}>Features</Link>
            <Link href="#how" underline="none" color="inherit" sx={{ fontWeight: 500 }}>How It Works</Link>
            <Link href="#about" underline="none" color="inherit" sx={{ fontWeight: 500 }}>About</Link>
            <Link href="#contact" underline="none" color="inherit" sx={{ fontWeight: 500 }}>Contact</Link>
          </Box>
          <Button variant="contained" sx={{ bgcolor: '#2563eb', fontWeight: 600, borderRadius: 2, px: 3, boxShadow: 'none', '&:hover': { bgcolor: '#174ea6' } }}>
            Find Scholarships
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <Chip label="AI-Powered Scholarship Matching" color="primary" sx={{ bgcolor: '#e8f0fe', color: '#2563eb', fontWeight: 600 }} />
            </Stack>
            <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' }, lineHeight: 1.1, mb: 2 }}>
              Find Your Perfect <br />
              <Box component="span" sx={{ color: '#2563eb' }}>Scholarship Match</Box>
            </Typography>
            <Typography variant="h6" sx={{ color: '#555', mb: 4, fontWeight: 400 }}>
              Let our AI-powered scholarship matching agent find the perfect financial aid opportunities tailored to your unique profile, goals, and qualifications. Get matched with scholarships you're actually eligible for.
            </Typography>
            <Stack direction="row" spacing={2} mb={3}>
              <Button variant="contained" size="large" sx={{ bgcolor: '#2563eb', fontWeight: 600, px: 3, borderRadius: 2, boxShadow: 'none', '&:hover': { bgcolor: '#174ea6' } }} onClick={() => navigate('/chat')}>
                Find Scholarships Now
              </Button>
              <Button variant="outlined" size="large" sx={{ fontWeight: 600, px: 3, borderRadius: 2, bgcolor: 'white', borderColor: '#e6eaf0', color: '#222', '&:hover': { bgcolor: '#f3f6fa', borderColor: '#2563eb', color: '#2563eb' } }}>
                How It Works
              </Button>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ color: '#ffc107', fontSize: 22 }} />
              ))}
              <Typography variant="body2" sx={{ fontWeight: 500, ml: 1 }}>
                Helped 10,000+ students secure $50M+ in funding
              </Typography>
            </Stack>
            <Stack direction="row" spacing={3} mt={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CheckCircleIcon sx={{ color: '#43b581', fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">Free to use</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CheckCircleIcon sx={{ color: '#43b581', fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">No hidden fees</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CheckCircleIcon sx={{ color: '#43b581', fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">Instant results</Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                maxWidth: 420,
                mx: 'auto',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(80,120,255,0.10)',
                background: 'linear-gradient(135deg, #edeaff 0%, #e8f0fe 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 340,
                height: 340,
              }}
            >
              <img
                src="https://img.freepik.com/free-psd/3d-rendering-graduate-character_23-2151363349.jpg"
                alt="Graduation Illustration"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Extra Content Section */}
      <Box sx={{ bgcolor: '#fff', py: 8, borderTopLeftRadius: 32, borderTopRightRadius: 32, mt: -4 }}>
        <Container maxWidth="lg">
          {/* Features Section */}
          <Typography variant="h4" align="center" fontWeight={700} mb={4} id="features">
            Why Students Love ScholarMate
          </Typography>
          <Grid container spacing={4} mb={6}>
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', borderRadius: 3, height: '100%' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Personalized" width={60} height={60} style={{ marginBottom: 16 }} />
                <Typography variant="h6" fontWeight={600} mb={1}>Personalized Matches</Typography>
                <Typography color="text.secondary">Our AI analyzes your unique profile to recommend scholarships you're truly eligible for.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', borderRadius: 3, height: '100%' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Fast" width={60} height={60} style={{ marginBottom: 16 }} />
                <Typography variant="h6" fontWeight={600} mb={1}>Lightning Fast</Typography>
                <Typography color="text.secondary">Get instant results and never miss a deadline with our real-time matching engine.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={2} sx={{ p: 4, textAlign: 'center', borderRadius: 3, height: '100%' }}>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="No Fees" width={60} height={60} style={{ marginBottom: 16 }} />
                <Typography variant="h6" fontWeight={600} mb={1}>No Fees, Ever</Typography>
                <Typography color="text.secondary">ScholarMate is 100% free for students. No hidden costs, no surprises.</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Stats Section */}
          <Grid container spacing={4} justifyContent="center" mb={6}>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: '#f8fbff', borderRadius: 3 }}>
                <Typography variant="h3" fontWeight={800} color="#2563eb">$50M+</Typography>
                <Typography color="text.secondary">in scholarships secured</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: '#f8fbff', borderRadius: 3 }}>
                <Typography variant="h3" fontWeight={800} color="#2563eb">10,000+</Typography>
                <Typography color="text.secondary">students helped</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: '#f8fbff', borderRadius: 3 }}>
                <Typography variant="h3" fontWeight={800} color="#2563eb">95%</Typography>
                <Typography color="text.secondary">success rate</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Testimonials Section */}
          <Typography variant="h4" align="center" fontWeight={700} mb={4}>
            What Students Say
          </Typography>
          <Grid container spacing={4} mb={6}>
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
                <Typography fontStyle="italic" mb={2}>
                  "ScholarMate made it so easy to find scholarships I actually qualified for. I secured $5,000 in aid within weeks!"
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
                  <Box>
                    <Typography fontWeight={600}>Ayesha K.</Typography>
                    <Typography variant="body2" color="text.secondary">Undergraduate, Pakistan</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
                <Typography fontStyle="italic" mb={2}>
                  "The AI chat was super helpful and answered all my questions. Highly recommend to every student!"
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
                  <Box>
                    <Typography fontWeight={600}>Bilal S.</Typography>
                    <Typography variant="body2" color="text.secondary">Masters, UAE</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={1} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
                <Typography fontStyle="italic" mb={2}>
                  "I love that it's free and so easy to use. I found scholarships I never knew existed!"
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar src="https://randomuser.me/api/portraits/women/65.jpg" />
                  <Box>
                    <Typography fontWeight={600}>Fatima Z.</Typography>
                    <Typography variant="body2" color="text.secondary">PhD, Saudi Arabia</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>

          {/* FAQ Section */}
          <Typography variant="h4" align="center" fontWeight={700} mb={4}>
            Frequently Asked Questions
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>Is ScholarMate really free?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Yes! ScholarMate is 100% free for students. There are no hidden fees or charges.</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>How does the AI match me with scholarships?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Our AI analyzes your academic profile, interests, and eligibility to recommend scholarships that best fit you.</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>Can I use ScholarMate for international scholarships?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Absolutely! We help students find both local and international scholarships.</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>How do I get started?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Just click "Find Scholarships Now" and start chatting with our AI agent!</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 