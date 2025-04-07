import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { text: t('nav.privacy'), path: '/privacy' },
    { text: t('nav.terms'), path: '/terms' },
    { text: t('nav.about'), path: '/about' },
    { text: t('nav.contact'), path: '/contact' }
  ]

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900]
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="primary" gutterBottom>
              FileConverter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Convert any file format quickly and securely.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="flex-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  color="text.secondary"
                  sx={{
                    mx: 1.5,
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            © {currentYear} FileConverter. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer