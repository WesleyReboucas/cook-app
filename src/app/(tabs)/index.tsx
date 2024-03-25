import { View, Text, ScrollView, Image } from 'react-native'
import { Container, SafeAreaPage, TextSubtitle, TextTitle } from './styles'
import { styled } from 'styled-components'
import { theme } from '@/theme'

const Header = styled(View)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
const ProfileImage = styled(Image)`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`

export default function Home() {
  return (
    <SafeAreaPage>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Header>
            <View>
              <TextSubtitle>Bem vindo,</TextSubtitle>
              <TextTitle>Wesley Rebouças</TextTitle>
            </View>
            <ProfileImage
              source={{ uri: 'https://github.com/wesleyreboucas.png' }}
            />
          </Header>
        </Container>
      </ScrollView>
    </SafeAreaPage>
  )
}
