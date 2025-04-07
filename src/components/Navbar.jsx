import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
  Language as LanguageIcon,
  Menu as MenuIcon
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { useTheme as useCustomTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'

const Navbar = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const { mode, toggleTheme } = useCustomTheme()
  const { language, changeLanguage, languages } = useLanguage()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [mobileMenu, setMobileMenu] = React.useState(null)
  const [langMenu, setLangMenu] = React.useState(null)

  const handleMobileMenuOpen = (event) => setMobileMenu(event.currentTarget)
  const handleMobileMenuClose = () => setMobileMenu(null)
  const handleLangMenuOpen = (event) => setLangMenu(event.currentTarget)
  const handleLangMenuClose = () => setLangMenu(null)

  const navItems = [
    { text: t('nav.home'), path: '/' },
    { text: t('nav.about'), path: '/about' },
    { text: t('nav.contact'), path: '/contact' }
  ]

  const MotionIconButton = motion(IconButton)

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
            fontWeight: 700,
            letterSpacing: 1
          }}
        >
          FileConverter
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile && (
            <Box sx={{ mr: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  sx={{ mx: 1 }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          <MotionIconButton
            onClick={handleLangMenuOpen}
            color="inherit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <LanguageIcon />
          </MotionIconButton>

          <Menu
            anchorEl={langMenu}
            open={Boolean(langMenu)}
            onClose={handleLangMenuClose}
          >
            {languages.map((lang) => (
              <MenuItem
                key={lang.code}
                selected={lang.code === language}
                onClick={() => {
                  changeLanguage(lang.code)
                  handleLangMenuClose()
                }}
              >
                {lang.name}
              </MenuItem>
            ))}
          </Menu>

          <MotionIconButton
            onClick={toggleTheme}
            color="inherit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mode === 'dark' ? <LightIcon /> : <DarkIcon />}
          </MotionIconButton>

          {isMobile && (
            <>
              <IconButton
                color="inherit"
                onClick={handleMobileMenuOpen}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={mobileMenu}
                open={Boolean(mobileMenu)}
                onClose={handleMobileMenuClose}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    onClick={handleMobileMenuClose}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar