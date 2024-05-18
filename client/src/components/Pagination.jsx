import { useState } from 'react';
import { Navbar, Nav, Offcanvas, Button, Container, Card, Form, Row, Col, Pagination } from 'react-bootstrap';
import CourseCard from './CourseCard';
import Loader from './Loader';

const PaginationItems = ({ loading, courses, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the indexes for the current page
    const indexOfLastCourse = currentPage * itemsPerPage;
    const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Generate pagination items
    const paginationItems = [];
    for (let number = 1; number <= Math.ceil(courses.length / itemsPerPage); number++) {
        paginationItems.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <>
            {loading ? <div className='d-flex justify-content-center'><Loader /></div> :
                <Container>
                    <Pagination className="justify-content-center mt-4">
                        <Pagination.Prev
                            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                            disabled={currentPage === 1} />
                        {paginationItems}
                        <Pagination.Next
                            onClick={() => handlePageChange(currentPage < Math.ceil(courses.length / itemsPerPage) ? currentPage + 1 : currentPage)}
                            disabled={currentPage === Math.ceil(courses.length / itemsPerPage)} />
                    </Pagination>

                    <Row>
                        {currentCourses.length ? currentCourses.map((course) => (
                            <CourseCard key={course._id} course={course} />
                        )) : <div className='d-flex justify-content-center'><h2>No results</h2></div>}
                    </Row>
                </Container>}
        </>
    );
};

export default PaginationItems;