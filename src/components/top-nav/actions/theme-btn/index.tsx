import { Moon, Sun } from '@/components/icons'
import { Tooltip } from '@/components/tooltip'
import { useMemo, useState } from 'react'
import * as S from '../styled'

type Theme = 'light' | 'dark'

export const ThemeButton = () => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const ThemeIcon = useMemo(() => (theme === 'light' ? Sun : Moon), [theme])

  return (
    <S.NavActionsIconButton onClick={toggleTheme}>
      <Tooltip label="Toggle color mode" side="bottom">
        <ThemeIcon />
      </Tooltip>
    </S.NavActionsIconButton>
  )
}
