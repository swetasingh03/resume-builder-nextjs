import React from 'react';
import DOMPurify from 'dompurify';
import {
    IconBrandDatabricks,
    IconBallpen,
    IconBriefcase,
    IconShieldCog,
} from '@tabler/icons-react';


function ResumeTemplate({ formData }) {
    return (
        <div className='col-span-1 overflow-y-auto scrollbar'>
            <div className='max-w-screen-md mx-auto p-5'>
                <div className='border px-2 py-2 bg-white'>
                    <div className='A4'>
                        <div className='sheet'>
                            <div className='flex justify-end'>
                                <button
                                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '
                                    onClick={() => window.print()}
                                    style={{ backgroundColor: formData.templateColor }}
                                >
                                    <i className='fa fa-print'></i>
                                    Print
                                </button>
                            </div>

                            <div className='resume resume-content'>
                                <section className='resume__section resume__header'>
                                    <div className='resume__content'>
                                        <h3 className='text-2xl font-bold my-2 text-center'>
                                            {formData.firstName} {formData.lastName}
                                        </h3>
                                        <p className='text-lg font-normal text-center'>
                                            {formData.profile}
                                        </p>
                                        <div className='info-item text-center'>
                                            {formData.email !== null && (
                                                <span className='info-text'>{formData.email}</span>
                                            )}
                                            {formData.mobileNumber !== null && (
                                                <span className='info-text ml-3'>
                                                    {formData.mobileNumber}(Whatsapp, Telegram)
                                                </span>
                                            )}
                                            {formData.linkedin !== null && (
                                                <a
                                                    className='info-text text-blue-500 ml-3'
                                                    target='_blank'
                                                    href={formData.linkedin}
                                                >
                                                    Linkedin
                                                </a>
                                            )}
                                            {formData.gitHub !== null && (
                                                <a
                                                    className='info-text text-blue-500 ml-3'
                                                    target='_blank'
                                                    href={formData.gitHub}
                                                >
                                                    Github
                                                </a>
                                            )}
                                            {formData.portfolio !== null && (
                                                <a
                                                    className='info-text text-blue-500 ml-3'
                                                    target='_blank'
                                                    href={formData.portfolio}
                                                >
                                                    Portfolio
                                                </a>
                                            )}
                                            <hr />
                                        </div>
                                    </div>
                                </section>

                                <section className='resume__section resume__summary'>
                                    <div className='resume__content'>
                                        <div className='resume__section-title flex items-center mb-6'>
                                            <IconBrandDatabricks className='text-sm text-dark border-2 border-light-blue-300 rounded-full w-8 h-8 flex items-center justify-center leading-6' style={{ color: formData.templateColor }} />
                                            &nbsp;&nbsp;
                                            <h2 className='text-2xl font-bold'>Professional Summary</h2>
                                        </div>
                                        <div className='other'>
                                            <div className='other-info'>
                                                <p
                                                    className='custom-font-size'
                                                    dangerouslySetInnerHTML={{ __html: formData.summary }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='resume__section resume__education'>
                                    <div className='resume__content'>

                                        {formData &&
                                            formData.education.length > 0 &&
                                            formData.education.map((item) => (
                                                <>
                                                    <div className='resume__section-title flex items-center mb-6'>
                                                        <IconBallpen className='text-sm text-dark border-2 border-light-blue-300 rounded-full w-8 h-8 flex items-center justify-center leading-6' style={{ color: formData.templateColor }} />
                                                        &nbsp;&nbsp;<h2 className='text-2xl font-bold'>Education</h2>
                                                    </div>
                                                    <div className="xp-item">
                                                        <div className="xp-job">
                                                            {item.degree && item.institution && item.program && item.location && (
                                                                <>
                                                                    {item.degree} - {item.institution} - {item.program} -{' '}
                                                                    <small className="text-blue-500">({item.location})</small>
                                                                </>
                                                            )}
                                                        </div>
                                                        <div className="xp-date">
                                                            {item.startDate && item.endDate && (
                                                                <>
                                                                    {new Date(item.startDate).toLocaleDateString('en-US', {
                                                                        month: 'long',
                                                                        year: 'numeric',
                                                                    })}{' '}
                                                                    –{' '}
                                                                    {new Date(item.endDate).toLocaleDateString('en-US', {
                                                                        month: 'long',
                                                                        year: 'numeric',
                                                                    })}
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                    </div>
                                </section>

                                <section className='resume__section resume__experience'>
                                    {formData && formData.experience.length > 0 && formData.experience.map((item) => (
                                        <div className='resume__content'>
                                            <div className='resume__section-title flex items-center mb-6'>
                                                <IconBriefcase className='text-sm text-dark border-2 border-light-blue-300 rounded-full w-8 h-8 flex items-center justify-center leading-6' style={{ color: formData.templateColor }} />
                                                &nbsp;&nbsp;<h2 className='text-2xl font-bold'>
                                                    Experience
                                                </h2>
                                            </div>

                                            <div className='xp-item'>
                                                <div className='xp-job'>
                                                    {item.position && item.position}, {item.company && item.company} / {item.location && item.location}
                                                    <br />
                                                </div>
                                                <div className='xp-date'>
                                                    {item.startDate && (
                                                        <>
                                                            {new Date(item.startDate).toLocaleDateString('en-US', {
                                                                month: 'long',
                                                                year: 'numeric',
                                                            })}{' '}
                                                            –{' '}
                                                            {item.present ? 'Present' : new Date(item.endDate).toLocaleDateString('en-US', {
                                                                month: 'long',
                                                                year: 'numeric',
                                                            })}
                                                        </>
                                                    )}
                                                </div>
                                                <div className='xp-detail list-disc pl-4' dangerouslySetInnerHTML={{ __html: item.keyPoints }} />
                                            </div>
                                        </div>
                                    ))}
                                </section>

                                <section className='resume__section resume__skills'>
                                    <div className='resume__content'>
                                        <div className='resume__section-title flex items-center mb-6'>
                                            <IconShieldCog className='text-sm  text-dark border-2 border-light-blue-300 rounded-full w-8 h-8 flex items-center justify-center leading-6' style={{ color: formData.templateColor }} />
                                            &nbsp;&nbsp;<h2 className='text-2xl font-bold'>Skills</h2>
                                        </div>
                                        <div className='skills-container'>
                                            {formData && formData.skills.length > 0 && formData.skills.map((skill, index) => (

                                                skill.name && skill.proficiency && <div key={index} className='skill-item'>
                                                    <div className='skill-name'>{skill.name}</div>
                                                    <div className='skill-proficiency'>{skill.proficiency}</div>
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default ResumeTemplate;
