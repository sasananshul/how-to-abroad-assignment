import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Offcanvas, Button, Container, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import PaginationItems from './Pagination';
import {
  FILTER_DEFAULT_VALUES,
  COURSE_TYPES,
  LANGUAGES,
  BEGINNING_SEMESTERS,
  DURATION
} from '../assets/constants';

const Courses = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState(FILTER_DEFAULT_VALUES);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFilterChange = (event) => {
    setFilters(prev => ({ ...prev, [event.target.name]: (event.target.value) }));
  }

  const fetchCourses = async () => {
    try {
      setLoading(true);

      const response = await axios.get('/api/courses', { params: { ...filters } });

      if (response.statusText !== 'OK') {
        throw new Error('Network response was not ok');
      }
      const result = await response.data;

      setItemsPerPage(filters.itemsPerPage);
      setCourses(result);

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  };

  // Load courses on mount
  useEffect(() => {
    (async () => await fetchCourses())();
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Row className="w-100">
            <Col className="d-flex justify-content-center">
              <Button variant="primary" onClick={handleShow}>
                Filters
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>No of Items</Form.Label>
                <Form.Select name='itemsPerPage' value={filters['itemsPerPage']} onChange={onFilterChange}>
                  <option value={""}>select</option>
                  <option value={"15"}>15</option>
                  <option value={"20"}>20</option>
                  <option value={"30"}>30</option>
                  <option value={"50"}>50</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>University Name</Form.Label>
                <Form.Control name="universityName" value={filters['universityName']} onChange={onFilterChange} type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Course Name</Form.Label>
                <Form.Control name='courseName' value={filters['courseName']} onChange={onFilterChange} type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Germany Ranking</Form.Label>
                <Form.Control name='germanyRanking' value={filters['germanyRanking']} onChange={onFilterChange} type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Course Type</Form.Label>
                <Form.Select name={'courseType'} value={filters['courseType']} onChange={onFilterChange}>
                  <option value={""}>---Course Type---</option>
                  {Object.keys(COURSE_TYPES).map((key, i) => <option key={i} value={key}>{COURSE_TYPES[key]}</option>)}
                  {/* <option value={"bachelor"}>Bachelor</option>
                  <option value={"church-exam"}>Church Exam</option>
                  <option value={"diploma"}>Diploma</option>
                  <option value={"double-degree"}>Double Degree</option>
                  <option value={"la"}>LA</option>
                  <option value={"other"}>Other</option>
                  <option value={"phd-doctorate"}>PhD/Doctorate</option>
                  <option value={"state"}>State</option> */}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Teaching Language</Form.Label>
                <Form.Select name={'teachingLanguage'} value={filters['teachingLanguage']} onChange={onFilterChange}>
                  <option value={""}>---Teaching Language---</option>
                  {Object.keys(LANGUAGES).map((key, i) => <option key={i} value={key}>{LANGUAGES[key]}</option>)}
                  {/* <option value={"english"}>English</option>
                  <option value={"german"}>German</option>
                  <option value={"french"}>French</option>
                  <option value={"russian"}>Russian</option> */}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Beginning Semester</Form.Label>
                <Form.Select name={'beginningSemester'} value={filters['beginningSemester']} onChange={onFilterChange}>
                  <option value={""}>---Beginning Semester---</option>
                  {Object.keys(BEGINNING_SEMESTERS).map((key, i) => <option key={i} value={key}>{BEGINNING_SEMESTERS[key]}</option>)}
                  {/* <option value={"all-quarters"}>All Quarters</option>
                  <option value={"all-trimesters"}>All Trimesters</option>
                  <option value={"anytime"}>Anytime</option>
                  <option value={"summer"}>Summer</option>
                  <option value={"winter"}>Winter</option> */}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Duration</Form.Label>
                <Form.Select name={'duration'} value={filters['duration']} onChange={onFilterChange}>
                  <option value={""}>---Duration---</option>
                  {Object.keys(DURATION).map((key, i) => <option key={i} value={key}>{DURATION[key]}</option>)}
                  {/* <option value={"one-semester"}>1 Semester</option>
                  <option value={"six-semester"}>6 Semesters</option>
                  <option value={"twelve-semester"}>12 Semesters</option>
                  <option value={"twenty-semester"}>20 Semesters</option>
                  <option value={"twentyfour-semester"}>24 Semesters</option> */}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tuition Fee</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Control name={'minFee'} value={filters['minFee']} onChange={onFilterChange} type="number" className="me-2" />
                  <Form.Control name={'maxFee'} value={filters['maxFee']} onChange={onFilterChange} type="number" className="ms-2" />
                </div>
              </Form.Group>

            </Form>
          </Nav>
        </Offcanvas.Body>


        <div className="sticky-bottom bg-light p-3">
          <Button variant="primary" className="w-100 mb-2" onClick={async () => { await fetchCourses(); setShow(false) }}>Apply Filters</Button>
          <Button variant="secondary" className="w-100" onClick={async () => { await fetchCourses(); setFilters(FILTER_DEFAULT_VALUES) }}>Reset Filters</Button>
        </div>

      </Offcanvas>

      <PaginationItems loading={loading} courses={courses} itemsPerPage={itemsPerPage} />
    </>

  );
};

export default Courses;