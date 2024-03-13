'use client'
import React, { useState } from 'react'
import ResumeTemplate from '../component/ResumeTemplate';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function page() {

    const colorOptions = [
        "#FF0000", // Red
        "#00FF00", // Green
        "#0000FF", // Blue
        "#FFFF00", // Yellow
        "#FF00FF", // Magenta
        "#00FFFF", // Cyan
        "#800000", // Maroon
        "#008000", // Green
        "#000080", // Navy
        "#808000", // Olive
        "#800080", // Purple
        "#008080", // Teal
        "#FFA07A", // Light Salmon
        "#F08080", // Light Coral
        "#E0FFFF", // Light Cyan
        "#7FFFD4", // Aquamarine
        "#B0E0E6", // Powder Blue
        "#00FF7F", // Spring Green
        "#20B2AA", // Light Sea Green
        "#9370DB", // Medium Purple
        "#FF6347", // Tomato
        "#FFE4B5", // Moccasin
        "#66CDAA", // Medium Aquamarine
        "#8A2BE2", // Blue Violet
        "#DEB887", // Burlywood
        "#4682B4", // Steel Blue
        "#DC143C", // Crimson
        "#FF4500", // Orange Red
        "#CD5C5C", // Indian Red
        "#556B2F", // Dark Olive Green
        "#2E8B57", // Sea Green
        "#6A5ACD", // Slate Blue
        "#FF8C00", // Dark Orange
        "#9932CC" // Dark Orchid
    ];

    const [educationDates, setEducationDates] = useState([
        { startDate: null, endDate: null }, // Initial dates for the first education entry
    ]);
    const [experienceDates, setExperienceDates] = useState([
        { startDate: null, endDate: null }, // Initial dates for the first experience entry
    ]);

    const [formData, setFormData] = useState({
        templateColor: '#3b82f6',
        firstName: 'Sweta',
        lastName: 'Singh',
        profile: "Software Developer",
        email: "swetasingh03052000@gmail.com",
        mobileNumber: "9319614264",
        linkedin: "https://www.linkedin.com/in/sweta-singh-0b91781bb/",
        github: "https://github.com/swetasingh03",
        portfolio: "https://webdevsweta.netlify.app/",
        summary: `Skilled React.js developer with 1 year 10 months of practical experience. Proficient in HTML, CSS, JavaScript, React.js,React-Redux, Next.js, Node.js, Express.js, and MySQL. Adept at seamlessly integrating APIs to elevate user experiences. Committed to precise problem-solving, consistently driving innovation`,
        education: [
            {
                degree: 'Master Degree',
                institution: 'Kozminski University',
                program: 'Big Data Analysis Program',
                location: 'Warsaw, Poland',
                startDate: 'September 2019',
                endDate: 'July 2021',
            },
        ],
        experience: [
            {
                position: 'Software Developer',
                company: 'xyz company',
                location: 'Noida',
                startDate: 'May 2021',
                endDate: '',
                keyPoints: `<ul><li>Led end-to-end development projects, seamlessly bridging front-end and back-end using React.js, Node.js, and
                Express.js. Collaborated cross-functionally to transform requirements into responsive UIs and robust APIs,
                ensuring cohesive user experiences</li>
                <li>Leveraged Redux for state management and React Router for efficient navigation. Integrated RESTful APIs
                and MySQL databases, enhancing real-time data interaction. Utilized stored procedures for MySQL
                optimization, delivering responsive applications with reduced load times</li>
                <li>Proactively identified and resolved bottlenecks across the stack. Implemented performance optimizations in
                both front-end and back-end using debugging tools, resulting in enhanced user satisfaction through seamless
                interactions and accelerated response times.</li></ul>`,
                present: true,
            },
        ],
        skills: [
            { name: 'JavaScript', proficiency: 'Expert' },
            { name: 'React.js', proficiency: 'Expert' },
            { name: 'HTML', proficiency: 'Intermediate' },
            { name: 'CSS', proficiency: 'Intermediate' },
            // Add more skills as needed
        ],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleEditorChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            summary: e
        }));
    }

    const handleStartDateChange = (date, index) => {
        const updatedDates = [...educationDates];
        updatedDates[index].startDate = date;
        setEducationDates(updatedDates);

        const updatedFormData = {
            ...formData,
            education: formData.education.map((entry, i) =>
                i === index ? { ...entry, startDate: date } : entry
            ),
        };

        setFormData(updatedFormData);
    };

    const handleEndDateChange = (date, index) => {
        const updatedDates = [...educationDates];
        updatedDates[index].endDate = date;
        setEducationDates(updatedDates);

        const updatedFormData = {
            ...formData,
            education: formData.education.map((entry, i) =>
                i === index ? { ...entry, endDate: date } : entry
            ),
        };

        setFormData(updatedFormData);
    };

    const handleSectionChange = (sectionName, entryIndex, fieldName, fieldValue) => {
        setFormData((prevData) => ({
            ...prevData,
            [sectionName]: prevData[sectionName].map((entry, index) =>
                index === entryIndex
                    ? {
                        ...entry,
                        [fieldName]: fieldValue,
                    }
                    : entry
            ),
        }));
    };

    const addSectionEntry = (sectionName) => {
        setFormData((prevData) => ({
            ...prevData,
            [sectionName]: [
                ...prevData[sectionName],
                {
                    // Default values for a new entry, modify as needed
                    degree: '',
                    institution: '',
                    program: '',
                    location: '',
                    startDate: '',
                    endDate: '',
                },
            ],
        }));

        // Add corresponding entry to educationDates
        setEducationDates((prevDates) => [
            ...prevDates,
            { startDate: null, endDate: null },
        ]);
    };

    const deleteSectionEntry = (sectionName, entryIndex) => {
        setFormData((prevData) => ({
            ...prevData,
            [sectionName]: prevData[sectionName].filter(
                (entry, index) => index !== entryIndex
            ),
        }));

        // Remove corresponding entry from educationDates
        setEducationDates((prevDates) =>
            prevDates.filter((date, index) => index !== entryIndex)
        );
    };

    const addExperienceEntry = () => {
        setFormData((prevData) => ({
            ...prevData,
            experience: [
                ...prevData.experience,
                {
                    // Default values for a new entry, modify as needed
                    position: '',
                    company: '',
                    location: '',
                    startDate: '',
                    endDate: '',
                    present: false
                },
            ],
        }));

        // Add corresponding entry to experienceDates
        setExperienceDates((prevDates) => [
            ...prevDates,
            { startDate: null, endDate: null },
        ]);
    };

    const deleteExperienceEntry = (entryIndex) => {
        setFormData((prevData) => ({
            ...prevData,
            experience: prevData.experience.filter(
                (entry, index) => index !== entryIndex
            ),
        }));

        // Remove corresponding entry from experienceDates
        setExperienceDates((prevDates) =>
            prevDates.filter((date, index) => index !== entryIndex)
        );
    };

    const handleExperienceStartDateChange = (date, index) => {
        const updatedDates = [...experienceDates];
        updatedDates[index].startDate = date;
        setExperienceDates(updatedDates);

        const updatedFormData = {
            ...formData,
            experience: formData.experience.map((entry, i) =>
                i === index ? { ...entry, startDate: date } : entry
            ),
        };

        setFormData(updatedFormData);
    };

    const handleExperienceEndDateChange = (date, index) => {
        const updatedDates = [...experienceDates];
        updatedDates[index].endDate = date;
        setExperienceDates(updatedDates);

        const updatedFormData = {
            ...formData,
            experience: formData.experience.map((entry, i) =>
                i === index ? { ...entry, endDate: date } : entry
            ),
        };

        setFormData(updatedFormData);
    };

    const addSkill = () => {
        setFormData((prevData) => ({
            ...prevData,
            skills: [
                ...prevData.skills,
                {
                    name: '',
                    proficiency: ''
                },
            ],
        }));
    };

    const deleteSkill = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            skills: prevData.skills.filter((_, i) => i !== index),
        }));
    };

    const handleSkillChange = (index, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            skills: prevData.skills.map((skill, i) =>
                i === index ? { ...skill, [field]: value } : skill
            ),
        }));
    };

    return (
        <div className='grid grid-cols-2 gap-4 h-screen overflow-y-auto'>
            <div className='col-span-1 overflow-y-auto scrollbar'>
                <div class="max-w-screen-md mx-auto p-5">
                    <div class="text-center mb-16">
                        <p class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
                            simple Resume Builder
                        </p>
                        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                            Resume <span class="text-indigo-600">Craft</span>
                        </h3>
                    </div>

                    <form class="w-full" action='#' method="post">
                        <div class="w-full px-2">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-color">
                                Template Color
                            </label>
                            <div class="flex flex-wrap">
                                {colorOptions.map((color, index) => (
                                    <div key={index} class="color-option mb-2" onClick={() => setFormData(prevData => ({ ...prevData, templateColor: color }))} >
                                        <div class="color-circle" style={{ backgroundColor: color }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                                {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name='lastName' placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Email Address
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Linkedin
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" name="linkedin" placeholder="Linkedin" value={formData.linkedin} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Github
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" name="github" placeholder="Github" value={formData.github} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Portfolio
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" name="portfolio" placeholder="portfolio" value={formData.portfolio} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Summary
                                </label>
                                <ReactQuill
                                    theme="snow" // or 'bubble' for a bubble theme
                                    value={formData.summary}
                                    onChange={handleEditorChange}
                                    style={{ height: '200px', marginBottom: '30px' }}
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            {formData.education.map((educationEntry, index) => (
                                <div key={index} className="w-full px-3 mb-6">
                                    <div className="w-full flex justify-between px-3 mb-6">
                                        <h2 className="text-2xl font-bold mb-2">Education {index + 1}</h2>
                                        <button
                                            type="button"
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => deleteSectionEntry('education', index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap -mx-3">
                                        {/* Degree */}
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`degree-${index}`}
                                            >
                                                Degree
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                id={`degree-${index}`}
                                                placeholder="Degree"
                                                value={educationEntry.degree || ''}
                                                onChange={(e) => handleSectionChange('education', index, 'degree', e.target.value)}
                                            />
                                        </div>

                                        {/* Institution */}
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`institution-${index}`}
                                            >
                                                Institution
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                id={`institution-${index}`}
                                                placeholder="Institution"
                                                value={educationEntry.institution || ''}
                                                onChange={(e) => handleSectionChange('education', index, 'institution', e.target.value)}
                                            />
                                        </div>

                                        {/* Program */}
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`program-${index}`}
                                            >
                                                Program
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                id={`program-${index}`}
                                                placeholder="Program"
                                                value={educationEntry.program || ''}
                                                onChange={(e) => handleSectionChange('education', index, 'program', e.target.value)}
                                            />
                                        </div>

                                        {/* Location */}
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`location-${index}`}
                                            >
                                                Location
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                id={`location-${index}`}
                                                placeholder="Location"
                                                value={educationEntry.location || ''}
                                                onChange={(e) => handleSectionChange('education', index, 'location', e.target.value)}
                                            />
                                        </div>

                                        {/* Start Date */}
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`start-date-${index}`}
                                            >
                                                Start Date
                                            </label>
                                            <DatePicker
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                selected={educationDates[index].startDate}
                                                onChange={(date) => handleStartDateChange(date, index)}
                                                selectsStart
                                                startDate={educationDates[index].startDate}
                                                endDate={educationDates[index].endDate}
                                                placeholderText="Start Date"
                                            />
                                        </div>

                                        {/* End Date */}
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`end-date-${index}`}
                                            >
                                                End Date
                                            </label>
                                            <DatePicker
                                                selected={educationDates[index].endDate}
                                                onChange={(date) => handleEndDateChange(date, index)}
                                                selectsEnd
                                                startDate={educationDates[index].startDate}
                                                endDate={educationDates[index].endDate}
                                                placeholderText="End Date"
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Button to add a new education entry */}
                            <div className="w-full px-3">
                                <button
                                    type="button"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => addSectionEntry('education')}
                                >
                                    Add Education
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            {formData.experience.map((experienceEntry, index) => (
                                <div key={index} className="w-full px-3 mb-6">
                                    <div className="w-full flex justify-between px-3 mb-6">
                                        <h2 className="text-2xl font-bold mb-2">Experience {index + 1}</h2>
                                        <button
                                            type="button"
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => deleteExperienceEntry(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap -mx-3">
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`position-${index}`}
                                            >
                                                Position
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                id={`position-${index}`}
                                                placeholder="Position"
                                                value={experienceEntry.position || ''}
                                                onChange={(e) => handleSectionChange('experience', index, 'position', e.target.value)}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`company-${index}`}
                                            >
                                                Company
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                id={`company-${index}`}
                                                placeholder="Company"
                                                value={experienceEntry.company || ''}
                                                onChange={(e) => handleSectionChange('experience', index, 'company', e.target.value)}
                                            />
                                        </div>
                                        <div className="w-full md:w-full px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`location-${index}`}
                                            >
                                                Location
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                type="text"
                                                id={`location-${index}`}
                                                placeholder="Location"
                                                value={experienceEntry.location || ''}
                                                onChange={(e) => handleSectionChange('experience', index, 'location', e.target.value)}
                                            />
                                        </div>

                                        <div className="w-full px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`key-points-${index}`}
                                            >
                                                Key Points
                                            </label>
                                            <ReactQuill
                                                theme="snow" // or 'bubble' for a bubble theme
                                                value={experienceEntry.keyPoints || ''}
                                                onChange={(value) => handleSectionChange('experience', index, 'keyPoints', value)}
                                                placeholder="Enter key points..."
                                                style={{ height: '300px', marginBottom: '30px' }}
                                            />
                                        </div>

                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`experience-start-date-${index}`}
                                            >
                                                Start Date
                                            </label>
                                            <DatePicker
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                selected={experienceDates[index].startDate}
                                                onChange={(date) => handleExperienceStartDateChange(date, index)}
                                                selectsStart
                                                startDate={experienceDates[index].startDate}
                                                endDate={experienceDates[index].endDate}
                                                placeholderText="Start Date"
                                            />
                                        </div>
                                        {/* End Date */}
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor={`end-date-${index}`}
                                            >
                                                End Date
                                            </label>
                                            <div className="flex items-center">
                                                <DatePicker
                                                    selected={experienceEntry.present === true ? null : experienceDates[index].endDate}
                                                    onChange={(date) => handleExperienceEndDateChange(date, index)}
                                                    selectsEnd
                                                    startDate={experienceDates[index].startDate}
                                                    endDate={experienceDates[index].endDate}
                                                    placeholderText="End Date"
                                                    disabled={experienceEntry.present === true}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                />
                                                <div className="ml-4">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-gray-600"
                                                            checked={experienceEntry.present || false}
                                                            onChange={(e) => handleSectionChange('experience', index, 'present', e.target.checked)}
                                                        />
                                                        <span className="ml-2 text-gray-700">Present</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Button to add a new experience entry */}
                            <div className="w-full px-3">
                                <button
                                    type="button"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={addExperienceEntry}
                                >
                                    Add Experience
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            {formData.skills.map((skill, index) => (
                                <div key={index} className="w-full md:w-1/2 px-3 mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor={`skill-name-${index}`}
                                    >
                                        Skill Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="text"
                                        id={`skill-name-${index}`}
                                        placeholder="Skill Name"
                                        value={skill.name || ''}
                                        onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                                    />

                                    <label
                                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
                                        htmlFor={`skill-proficiency-${index}`}
                                    >
                                        Skill Proficiency
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        type="text"
                                        id={`skill-proficiency-${index}`}
                                        placeholder="Skill Proficiency"
                                        value={skill.proficiency || ''}
                                        onChange={(e) => handleSkillChange(index, 'proficiency', e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                                        onClick={() => deleteSkill(index)}
                                    >
                                        Delete Skill
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Button to add a new skill */}
                        <div className="w-full px-3">
                            <button
                                type="button"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={addSkill}
                            >
                                Add Skill
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <ResumeTemplate formData={formData} />
        </div>
    )
}

export default page