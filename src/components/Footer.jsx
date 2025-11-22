import React from 'react'
import { Box,Typography,Button } from '@mui/material'
function Footer() {
return(
    <Box component="footer" sx={{ width: '100%' }}> 
        <Box
            sx={{
                position: 'relative',
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                py: { xs: 6, md: 10 },
                px: { xs: 4, md: 8 },
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    gap: 6,
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {/* CTA */}
                <Box sx={{ flex: '1 1 320px', minWidth: 280 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                        Join our newsletter
                    </Typography>
                    <Typography sx={{ opacity: 0.9, mb: 2 }}>
                        Get the latest posts, resources and tips — delivered to your inbox monthly.
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={(e) => e.preventDefault()}
                        sx={{ display: 'flex', gap: 1, mt: 1, alignItems: 'center' }}
                    >
                        <input
                            aria-label="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                            style={{
                                padding: '12px 14px',
                                borderRadius: 6,
                                border: 'none',
                                outline: 'none',
                                flex: 1,
                            }}
                        />
                        <Button type="submit" variant="contained" color="primary" sx={{ whiteSpace: 'nowrap' }}>
                            Subscribe
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mt: 3, alignItems: 'center' }}>
                        <Typography sx={{ opacity: 0.85 }}>Search the blog</Typography>
                        <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ display: 'flex', ml: 1 }}>
                            <input
                                aria-label="search"
                                type="search"
                                placeholder="Search..."
                                style={{
                                    padding: '8px 10px',
                                    borderRadius: 6,
                                    border: 'none',
                                    outline: 'none',
                                    width: 160,
                                }}
                            />
                            <Button type="submit" variant="outlined" sx={{ ml: 1, color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
                                Go
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* Links / Sections */}
                <Box sx={{ display: 'flex', gap: 6, flex: '1 1 360px', minWidth: 280, flexWrap: 'wrap' }}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            Explore
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Home</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Articles</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Tags</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>About</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Contact</a>
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            Resources
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Guides</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Tutorials</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Templates</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }}>Sitemap</a>
                        </Box>
                    </Box>
                </Box>

                {/* Contact Form */}
                <Box sx={{ flex: '1 1 320px', minWidth: 280 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        Contact us
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={(e) => e.preventDefault()}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                    >
                        <input
                            aria-label="name"
                            type="text"
                            placeholder="Your name"
                            required
                            style={{
                                padding: '10px 12px',
                                borderRadius: 6,
                                border: 'none',
                                outline: 'none',
                            }}
                        />
                        <input
                            aria-label="email-contact"
                            type="email"
                            placeholder="Your email"
                            required
                            style={{
                                padding: '10px 12px',
                                borderRadius: 6,
                                border: 'none',
                                outline: 'none',
                            }}
                        />
                        <textarea
                            aria-label="message"
                            placeholder="Message"
                            rows={4}
                            required
                            style={{
                                padding: '10px 12px',
                                borderRadius: 6,
                                border: 'none',
                                outline: 'none',
                                resize: 'vertical',
                            }}
                        />
                        <Button type="submit" variant="contained">Send message</Button>
                    </Box>
                </Box>
            </Box>

            {/* Footer bottom: social + copyright */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: { xs: 4, md: 6 },
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <Typography sx={{ opacity: 0.9 }}>
                    © {new Date().getFullYear()} Blog Made By Sekouti Abdelaziz — All rights reserved
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    {/* Social icons as inline SVGs */}
                    <a href="#" aria-label="twitter" style={{ color: 'inherit' }}>
                        <Box component="span" sx={{ display: 'inline-block', width: 36, height: 36, p: 0.5 }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M22 5.92c-.7.31-1.45.52-2.24.62a3.9 3.9 0 0 0 1.71-2.15 7.7 7.7 0 0 1-2.46.94 3.86 3.86 0 0 0-6.58 3.52A10.95 10.95 0 0 1 3.16 4.9a3.86 3.86 0 0 0 1.2 5.15c-.6-.02-1.18-.18-1.68-.46v.05a3.86 3.86 0 0 0 3.09 3.78c-.3.08-.6.12-.92.12-.22 0-.44-.02-.65-.06a3.87 3.87 0 0 0 3.61 2.68A7.73 7.73 0 0 1 2 19.54a10.9 10.9 0 0 0 5.92 1.73c7.1 0 11-5.88 11-10.97v-.5c.76-.54 1.42-1.22 1.94-1.98-.69.31-1.44.52-2.21.61z"/></svg>
                        </Box>
                    </a>
                    <a href="#" aria-label="facebook" style={{ color: 'inherit' }}>
                        <Box component="span" sx={{ display: 'inline-block', width: 36, height: 36, p: 0.5 }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-2.9h2.2V9.4c0-2.2 1.3-3.5 3.3-3.5.96 0 1.97.17 1.97.17v2.2h-1.12c-1.1 0-1.45.69-1.45 1.4v1.68h2.47l-.39 2.9h-2.08v7A10 10 0 0 0 22 12z"/></svg>
                        </Box>
                    </a>
                    <a href="#" aria-label="instagram" style={{ color: 'inherit' }}>
                        <Box component="span" sx={{ display: 'inline-block', width: 36, height: 36, p: 0.5 }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.3a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/></svg>
                        </Box>
                    </a>
                    <a href="#" aria-label="github" style={{ color: 'inherit' }}>
                        <Box component="span" sx={{ display: 'inline-block', width: 36, height: 36, p: 0.5 }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%"><path d="M12 .5A12 12 0 0 0 0 12.7c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1 1.8 2.6 1.3 3.2 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.3-3.2-.1-.3-.6-1.6.1-3.4 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.8.2 3.1.1 3.4.8.9 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>
                        </Box>
                    </a>
                </Box>
            </Box>
        </Box>
    </Box>
)

}
export default Footer
