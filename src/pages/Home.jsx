import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress
} from '@mui/material'
import {
  CloudUpload as UploadIcon,
  Description as DocumentIcon,
  Image as ImageIcon,
  AudioFile as AudioIcon,
  VideoFile as VideoIcon,
  Archive as ArchiveIcon,
  MenuBook as EbookIcon
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const MotionPaper = motion(Paper)
const MotionCard = motion(Card)

const Home = () => {
  const { t } = useTranslation()
  const [files, setFiles] = useState([])
  const [outputFormat, setOutputFormat] = useState('')
  const [converting, setConverting] = useState(false)
  const [conversionComplete, setConversionComplete] = useState(false)

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 100 * 1024 * 1024, // 100MB
    multiple: true
  })

  const supportedFormats = {
    documents: ['pdf', 'doc', 'docx', 'txt', 'rtf', 'odt'],
    images: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'],
    audio: ['mp3', 'wav', 'ogg', 'aac', 'm4a'],
    video: ['mp4', 'avi', 'mov', 'wmv', 'mkv'],
    archives: ['zip', 'rar', '7z', 'tar'],
    ebooks: ['epub', 'mobi', 'azw', 'pdf']
  }

  const handleConversion = async () => {
    if (!files.length || !outputFormat) return

    setConverting(true)
    // TODO: Implement actual file conversion logic
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated delay
    setConverting(false)
    setConversionComplete(true)
  }

  const formatFeatures = [
    { title: t('home.features.secure'), icon: <UploadIcon /> },
    { title: t('home.features.fast'), icon: <DocumentIcon /> },
    { title: t('home.features.quality'), icon: <ImageIcon /> },
    { title: t('home.features.formats'), icon: <AudioIcon /> }
  ]

  return (
    <Box sx={{ py: 4 }}>
      <Typography
        variant="h1"
        component="h1"
        align="center"
        sx={{
          mb: 2,
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 700
        }}
      >
        {t('home.title')}
      </Typography>
      
      <Typography
        variant="h2"
        component="h2"
        align="center"
        color="text.secondary"
        sx={{
          mb: 6,
          fontSize: { xs: '1.25rem', md: '1.5rem' }
        }}
      >
        {t('home.subtitle')}
      </Typography>

      <MotionPaper
        {...getRootProps()}
        elevation={3}
        component={motion.div}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        sx={{
          p: 6,
          textAlign: 'center',
          cursor: 'pointer',
          borderRadius: 4,
          border: '2px dashed',
          borderColor: isDragActive ? 'primary.main' : 'divider',
          bgcolor: isDragActive ? 'action.hover' : 'background.paper',
          transition: 'all 0.3s ease'
        }}
      >
        <input {...getInputProps()} />
        <IconButton
          sx={{
            mb: 2,
            p: 3,
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': { bgcolor: 'primary.dark' }
          }}
        >
          <UploadIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" gutterBottom>
          {t('home.dropzone.title')}
        </Typography>
        <Typography color="text.secondary">
          {t('home.dropzone.subtitle')}
        </Typography>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          {t('home.dropzone.maxSize')}
        </Typography>
      </MotionPaper>

      {files.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>{t('converter.selectFormat')}</InputLabel>
            <Select
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value)}
              label={t('converter.selectFormat')}
            >
              {Object.entries(supportedFormats).flatMap(([category, formats]) =>
                formats.map((format) => (
                  <MenuItem key={format} value={format}>
                    .{format}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleConversion}
            disabled={converting || !outputFormat}
            sx={{ mt: 2 }}
          >
            {converting ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              t('converter.selectFormat')
            )}
          </Button>
        </Box>
      )}

      <Grid container spacing={4} sx={{ mt: 6 }}>
        {formatFeatures.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MotionCard
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <IconButton
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                    '&:hover': { color: 'primary.dark' }
                  }}
                >
                  {feature.icon}
                </IconButton>
                <Typography variant="h6" component="h3">
                  {feature.title}
                </Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Home