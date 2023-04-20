import { Col, Container, Row } from "react-bootstrap"
import { Github } from "react-bootstrap-icons"
// import { Github } from "react-bootstrap-icons"

export default function Footer () {
  const currentYear = new Date().getFullYear()
  const githubLink = "https://github.com/sarahkuss/quiz-app"
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p><small>&copy; {currentYear}</small></p>
            
            <a href={githubLink} target="_blank" rel="noreferrer"> <Github/></a>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}