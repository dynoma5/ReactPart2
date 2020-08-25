import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
    return (
        <div>
            {course.map(x => <div key={x.id}>
                <Header title={x.name} />
                <Content parts={x.parts} />
            </div>
            )}
        </div>
    )

}

export default Course;
