import styled from '@emotion/styled'
import './App.css'

function App() {

  return (
    <>
      <Styleddiv>
        <StyleBlock></StyleBlock>
        <StyleBlock></StyleBlock>
        <StyleBlock></StyleBlock>
        <StyleBlock></StyleBlock>
      </Styleddiv>
    </>
  )

}
const StyleBlock = styled.div`
  background: red;
    width: 100px;
    height: 100px;
    margin: 10px;
    
`

const Styleddiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
    

  /* 작은 화면에서는 세로 정렬 */
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }

  /* 중간 이상 화면에서는 가로 정렬 */
  @media (min-width: 421px) {
    flex-direction: row;
    align-items: flex-start;
  }
  `

export default App
