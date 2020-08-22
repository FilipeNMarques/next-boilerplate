import * as S from './styles'
const Main = ({
  title = 'React Avançado',
  description = 'ReactJs, NextJs e Styled-components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo1.svg"
      alt="Imagem de uma átomo com React avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description} </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um desenvolvedor sentado numa cadeira escrevendo um código no computador"
    />
  </S.Wrapper>
)

export default Main
