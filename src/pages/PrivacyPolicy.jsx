import React from 'react'
import { Container, Typography, Paper, Box } from '@mui/material'
import { motion } from 'framer-motion'

const MotionPaper = motion(Paper)

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography
        variant="h1"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 700,
          mb: 6
        }}
      >
        Privacy Policy
      </Typography>

      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}
      >
        <Box sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              1. Information We Collect
            </Typography>
            <Typography paragraph>
              We collect information that you provide directly to us when using our file conversion service, including:
              - Files you upload for conversion
              - Email address (if provided for receiving converted files)
              - Usage data and conversion preferences
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              2. How We Use Your Information
            </Typography>
            <Typography paragraph>
              We use the information we collect to:
              - Process and convert your files
              - Improve our services
              - Communicate with you about your conversions
              - Ensure the security of our service
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              3. File Storage and Security
            </Typography>
            <Typography paragraph>
              - All uploaded files are encrypted during transmission
              - Files are automatically deleted after conversion (maximum 24 hours)
              - We do not store or access your files beyond the conversion process
              - Our servers use industry-standard security measures
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              4. Data Protection
            </Typography>
            <Typography paragraph>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              5. GDPR Compliance
            </Typography>
            <Typography paragraph>
              We comply with GDPR requirements for users in the European Union. You have the right to:
              - Access your personal data
              - Correct inaccurate personal data
              - Request deletion of your personal data
              - Object to processing of your personal data
              - Data portability
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              6. Cookies
            </Typography>
            <Typography paragraph>
              We use essential cookies to ensure the proper functioning of our service. These cookies do not track your browsing activity across other sites.
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              7. Changes to Privacy Policy
            </Typography>
            <Typography paragraph>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              8. Contact Us
            </Typography>
            <Typography>
              If you have any questions about this Privacy Policy, please contact us through our contact form.
            </Typography>
          </section>
        </Box>
      </MotionPaper>
    </Container>
  )
}

export default PrivacyPolicy