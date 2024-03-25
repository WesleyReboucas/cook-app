import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { styled } from 'styled-components'
import { theme } from '@/theme'

export const SafeAreaPage = styled(SafeAreaView)`
  background-color: white;
  margin-top: ${StatusBar.currentHeight};
`
export const Container = styled(View)`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

export const TextTitle = styled(Text)`
  font-family: ${theme.fontFamily.heading};
  color: ${theme.colors.text[600]};
  font-size: 24px;
`

export const TextSubtitle = styled(Text)`
  font-family: ${theme.fontFamily.heading};
  color: ${theme.colors.text[400]};
  font-size: 18px;
`

export const TextBody = styled(Text)`
  font-family: ${theme.fontFamily.text};
  color: ${theme.colors.text[500]};
  font-size: 16px;
`
