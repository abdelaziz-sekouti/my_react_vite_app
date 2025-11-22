import {Container, Paper, Stack, Avatar, Typography, Grid, Box, TextField, InputAdornment, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import SendIcon from '@mui/icons-material/Send'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
    <Box
      mb={4}
      sx={{
        px: 3,
        py: 6,
        borderRadius: 2,
        background: 'linear-gradient(135deg, rgba(25,118,210,0.12), rgba(63,81,181,0.06))',
        boxShadow: 1,
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center" spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 72, height: 72, boxShadow: 3 }}>
          <EmailIcon sx={{ fontSize: 36 }} />
        </Avatar>

        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, color: 'primary.dark' }}>
          Contact Us
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 720 }}>
          Have a question or want to work together? Send us a message and we'll get back to you shortly.
        </Typography>
      </Stack>
    </Box>
      <Paper elevation={6} sx={{ p: 4 }}>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          {/* <Avatar sx={{ bgcolor: 'primary.main' }}> */}
            {/* <EmailIcon /> */}
          {/* </Avatar> */}
          {/* <Typography variant="h4">Contact Us</Typography> */}
        </Stack>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ display: 'grid', gap: 2 }}
            >
              <TextField label="Name" variant="outlined" fullWidth required />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField label="Subject" variant="outlined" fullWidth />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={6}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Paper
                variant="outlined"
                sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}
                >
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <PhoneIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2">Phone</Typography>
                  <Typography>+212612236660</Typography>
                </Box>
              </Paper>

              <Paper
                variant="outlined"
                sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}
              >
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <EmailIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2">Email</Typography>
                  <Typography>abdelazizsekouti0@gmail.com</Typography>
                </Box>
              </Paper>

              <Paper
                variant="outlined"
                sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}
              >
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <LocationOnIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2">Address</Typography>
                  <Typography>185 Derb Bouuaalam, Syba, Marrakesh, Morocco</Typography>
                </Box>
              </Paper>

              <Box sx={{ height: 160, borderRadius: 1, overflow: 'hidden', boxShadow: 1 }}>
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=derb%20bouuaalam%20syba%20marrakesh%20morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0, width: '100%', height: '100%' }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Contact
