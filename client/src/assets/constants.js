const FILTER_DEFAULT_VALUES = {
    itemsPerPage: 10,
    universityName: '',
    courseName: '',
    germanyRanking: '',
    courseType: '',
    teachingLanguage: '',
    beginningSemester: '',
    duration: '',
    minFee: '',
    maxFee: ''
};

const COURSE_TYPES = {
    'bachelor': "Bachelor",
    'church-exam': "Church Exam",
    'diploma': "Diploma",
    'double-degree': "Double Degree",
    'la': "LA",
    'other': "Other",
    'phd-doctorate': "PHD Doctorate",
    'state': 'State'
};

const LANGUAGES = {
    'english': 'English',
    'german': 'German',
    'french': 'French',
    'russian': 'Russian'
};

const BEGINNING_SEMESTERS = {
    'all-quarters': 'All Quarters',
    'all-trimesters': 'All Trimesters',
    'anytime': 'Anytime',
    'summer': 'Summer',
    'winter': 'Winter'
};

const DURATION = {
    'one-semester': '1 Semester',
    'six-semester': '6 Semesters',
    'twelve-semester': '12 Semesters',
    'twenty-semester': '20 Semesters',
    'twentyfour-semester': '24 Semesters',
};

export {
    FILTER_DEFAULT_VALUES,
    COURSE_TYPES,
    LANGUAGES,
    BEGINNING_SEMESTERS,
    DURATION
}