import React from 'react'
import { Container, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Divider,Box } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ExtensionIcon from '@mui/icons-material/Extension';

function About() {
return (
  <Container maxWidth="md" sx={{ mt: 4 }}>
    <Box
      sx={{
        mb: 3,
        p: 3,
        borderRadius: 2,
        background: 'linear-gradient(135deg, rgba(63,81,181,0.95) 0%, rgba(123,31,162,0.95) 100%)',
        color: '#fff',
        boxShadow: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            bgcolor: 'rgba(255,255,255,0.15)',
            p: 1,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AutoAwesomeIcon sx={{ fontSize: 28, color: '#fff' }} />
        </Box>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            textTransform: 'lowercase',
            letterSpacing: 1,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          about me
        </Typography>
      </Box>

      <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
        crafting accessible UI & reliable backends
      </Typography>
    </Box>
    <Paper elevation={3} sx={{ p: 3 }}>
     
      <Typography variant="body1" component="p">
        I'm a web developer who cares about clean, accessible UI and reliable backend services.
        I enjoy building responsive apps and learning modern tooling.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        <Typography variant="h6">Skills & Interests</Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="Web & Accessibility" secondary="HTML, ARIA, semantic markup" />
          </ListItem>
          <Divider component="li" />

          <ListItem>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary="Design" secondary="Responsive layout, UX basics, MUI" />
          </ListItem>
          <Divider component="li" />

          <ListItem>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Frontend" secondary="React, hooks, state management" />
          </ListItem>
          <Divider component="li" />

          <ListItem>
            <ListItemIcon>
              <StorageIcon />
            </ListItemIcon>
            <ListItemText primary="Backend" secondary="APIs, databases, authentication" />
          </ListItem>
          <Divider component="li" />

          <ListItem>
            <ListItemIcon>
              <AutoAwesomeIcon />
            </ListItemIcon>
            <ListItemText primary="Tooling" secondary="ESLint, Prettier, CI/CD" />
          </ListItem>
          <Divider component="li" />

          <ListItem>
            <ListItemIcon>
              <ExtensionIcon />
            </ListItemIcon>
            <ListItemText primary="Plugins & Extensions" secondary="VSCode, browser extensions" />
          </ListItem>
        </List>
      </Box>
    </Paper>
  </Container>
);
}

export default About;

