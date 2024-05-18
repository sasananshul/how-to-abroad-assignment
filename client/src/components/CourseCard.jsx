import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import {
    COURSE_TYPES,
    LANGUAGES,
    BEGINNING_SEMESTERS,
    DURATION
} from '../assets/constants';

const CourseCard = ({ course }) => {
    const LOGOS = [
        'https://i0.wp.com/howtoabroad.com/wp-content/uploads/2021/09/heinrich-heine-university-dusseldorf-heinrich-heine-universitatdusseldorfde-logo.png',
        'https://i0.wp.com/howtoabroad.com/wp-content/uploads/2021/09/Johannes-Gutenberg-University.png',
        'https://howtoabroad.com/wp-content/uploads/2022/02/Berlin-University-of-the-Arts-1.png',
        'https://i0.wp.com/howtoabroad.com/wp-content/uploads/2021/04/University-of-Gottingen.jpg',
        'https://i0.wp.com/howtoabroad.com/wp-content/uploads/2021/11/Justus-Liebig-University-Giessen-1.jpg'
    ];

    return (
        <div className='py-5' key={course._id}>
            <Container className='d-flex justify-content-center'>
                <Col md={6} className="mb-4">
                    <Card>
                        <Row>
                            <Col className='d-flex justify-content-center align-items-center' xs={4}>
                                <Card.Img src={`${LOGOS[Math.floor(Math.random() * 5)]}`} style={{ height: '80px', width: 'auto' }} />
                            </Col>
                            <Col xs={8}>
                                <Card.Body>
                                    <Card.Title>{course.courseName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{course.universityName}</Card.Subtitle>
                                    <Card.Text>
                                        <strong>Germany Ranking:</strong> {course.germanyRanking}<br />
                                        <strong>Course Type:</strong> {COURSE_TYPES[course.courseType]}<br />
                                        <strong>Teaching Language:</strong> {LANGUAGES[course.teachingLanguage]}<br />
                                        <strong>Beginning Semester:</strong> {BEGINNING_SEMESTERS[course.beginningSemester]}<br />
                                        <strong>Duration:</strong> {DURATION[course.duration]}<br />
                                        <strong>Tuition Fee:</strong> {course.tuitionFee}
                                    </Card.Text>
                                    <Button variant="primary">Enroll</Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default CourseCard