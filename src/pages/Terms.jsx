import React from 'react'
import { Container, Typography, Paper, Box } from '@mui/material'
import { motion } from 'framer-motion'

const MotionPaper = motion(Paper)

const Terms = () => {
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
        Terms of Service
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
              1. Acceptance of Terms
            </Typography>
            <Typography paragraph>
              By accessing and using our file conversion service, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              2. Use License
            </Typography>
            <Typography paragraph>
              We grant you a limited, non-exclusive, non-transferable license to use our file conversion service for personal or business purposes, subject to these Terms of Service.
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              3. Service Usage
            </Typography>
            <Typography paragraph>
              You agree to:
              - Not use the service for any illegal purposes
              - Not upload malicious files or content
              - Not attempt to bypass any service limitations
              - Not interfere with the service's operation
              - Not use automated methods to access the service
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              4. File Handling
            </Typography>
            <Typography paragraph>
              - Files are automatically deleted after conversion
              - We do not guarantee file preservation
              - You are responsible for backing up your files
              - File size and format limitations may apply
              - We reserve the right to reject any file
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              5. Intellectual Property
            </Typography>
            <Typography paragraph>
              - You retain all rights to your uploaded files
              - You must have the right to convert uploaded files
              - Our service, including its original content and features, is protected by copyright, trademark, and other laws
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              6. Disclaimer
            </Typography>
            <Typography paragraph>
              The service is provided "as is" without warranties of any kind. We do not guarantee:
              - Uninterrupted service
              - Error-free conversions
              - Specific conversion quality
              - File preservation
              - Compatibility with all file formats
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              7. Limitation of Liability
            </Typography>
            <Typography paragraph>
              We shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our service.
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              8. Changes to Terms
            </Typography>
            <Typography paragraph>
              We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
            </Typography>
          </section>

          <section>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              9. Governing Law
            </Typography>
            <Typography>
              These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </Typography>
          </section>
        </Box>
      </MotionPaper>
    </Container>
  )
}

export default Terms