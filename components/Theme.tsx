import styled, { ThemeProvider } from 'styled-components'
import { THEME } from '../utils/constants'

const StyledApp = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.fontColor};
`
interface Props {
  theme: string
}
const Theme: React.FC<Props> = ({ children, theme }) => {

  const lightTheme = {
    backgroundColor: '#ffebcd',
    fontColor: '#000',
    filterIconVerticalLineBackground: 'rgb(64, 64, 64)',
    filterIconHorizontalLineBackground: 'rgb(92, 92, 92)',
    popupBackgroundColor: '#ffebcd',
    popupBorderColor: 'rgb(75, 75, 75)',
    tagIconColor: '#F87171',
    tagIconBorderColor: '#999999',
    sortIconColor: 'rgb(64, 64, 64)',
    categoryIconColor: '#107681'
  }

  const darkTheme = {
    backgroundColor: 'rgba(32, 32, 32)',
    fontColor: '#e0e0e0',
    filterIconVerticalLineBackground: 'rgb(158, 158, 158)',
    filterIconHorizontalLineBackground: 'rgb(211, 211, 211)',
    popupBackgroundColor: 'rgba(32, 32, 32, 0.95)',
    popupBorderColor: 'rgb(75, 75, 75)',
    tagIconColor: '#F87171',
    tagIconBorderColor: '#525252',
    sortIconColor: 'rgb(158, 158, 158)',
    categoryIconColor: '#71b3f8'
  }


  const getTheme = () => {
    switch(theme) {
      case THEME.light:
        return lightTheme
      case THEME.dark:
        return darkTheme
    }
  }

  return (
    <div>
      <ThemeProvider theme={getTheme}>
        <StyledApp>
          {children}
        </StyledApp>
      </ThemeProvider>
    </div>
  )
}

export default Theme
