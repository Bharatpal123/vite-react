import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton
} from '@mui/material'
import {
  Security as SecurityIcon,
  Speed as SpeedIcon,
  CloudDone as CloudIcon,
  DeviceHub as DeviceIcon,
  Storage as StorageIcon,
  Code as CodeIcon
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const MotionCard = motion(Card)

const About = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <SecurityIcon />,
      title: 'Secure Processing',
      description: 'Your files are encrypted and automatically deleted after conversion'
    },
    {
      icon: <SpeedIcon />,
      title: 'Fast Conversion',
      description: 'Advanced algorithms ensure quick and efficient file conversion'
    },
    {
      icon: <CloudIcon />,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate with popular cloud storage services'
    },
    {
      icon: <DeviceIcon />,
      title: 'Cross-Platform',
      description: 'Works on all devices and browsers with responsive design'
    },
    {
      icon: <StorageIcon />,
      title: 'Multiple Formats',
      description: 'Support for a wide range of file formats and conversion types'
    },
    {
      icon: <CodeIcon />,
      title: 'Modern Technology',
      description: 'Built with the latest web technologies for optimal performance'
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h1"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 700,
          mb: 4
        }}
      >
        {t('about.title')}
      </Typography>

      <Typography
        variant="h2"
        component="h2"
        align="center"
        color="text.secondary"
        sx={{
          fontSize: { xs: '1.25rem', md: '1.5rem' },
          maxWidth: '800px',
          mx: 'auto',
          mb: 8
        }}
      >
        {t('about.description')}
      </Typography>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionCard
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <IconButton
                  sx={{
                    mb: 2,
                    p: 2,
                    color: 'primary.main',
                    bgcolor: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'primary.light'
                        : 'primary.dark',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white'
                    }
                  }}
                >
                  {feature.icon}
                </IconButton>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h3" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto' }}
        >
          {t('about.features')}
        </Typography>
      </Box>
    </Container>
  )
}

export default About