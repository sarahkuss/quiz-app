import { Button, Col, Container, Row } from "react-bootstrap";

export default function QuizResult ({score, quizLength, handleReset}) {
  return (
    <section>
      <Container className="quiz-result">
        <Row>
          <Col>
            <h2>Quiz Result</h2>
            <p>Your score: {score}/{quizLength}</p>
            <Button onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}