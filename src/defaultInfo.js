import uniqid from 'uniqid';

const defaultInfo = {
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-45-6789',
    email: 'johndoe@foo.com',
    position: 'Software Engineer',
    location: 'NYC',
    education: [{
        id: uniqid(),
        name: 'State university',
        degree: 'Bachelor in Computer Science',
        start: 'September 2013',
        end: 'June 2017'
    }],
    experience: [{
        id: uniqid(),
        company: 'Lorem Impsum',
        position: 'Software Engineer',
        description: 'Aute exercitation ad ullamco adipisicing occaecat nisi laboris velit culpa nulla mollit.',
        start: 'March 2021',
        end: 'April 2022'
    },
    {
        id: uniqid(),
        company: 'Lorem Impsum',
        position: 'Team Lead',
        description: 'Aute exercitation ad ullamco adipisicing occaecat nisi laboris velit culpa nulla mollit.',
        start: 'October 21st 2022',
        end: 'Present'
    }],
    skills: [{
        id: uniqid(),
        name: 'React'
    },
    {
        id: uniqid(),
        name: 'Redux'
    },
    {
        id: uniqid(),
        name: 'Jest'
    }],
}

export default defaultInfo