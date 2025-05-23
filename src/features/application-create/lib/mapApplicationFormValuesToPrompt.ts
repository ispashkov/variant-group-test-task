import type { ApplicationFormValues } from '../../../entities/applications';

export const mapApplicationFormValuesToPrompt = (
  values: ApplicationFormValues,
): string =>
  `
    You are a cover letter generator.
    Your task is to create professional style and concise cover letters.
    I will provide you company name, job title, my skills and some additional details.
    
    Here is example of cover letter:

    Dear [Company] Team,

    I am writing to express my interest in the [JobTitle] position.

    My experience in the realm combined with my skills in [Skills] make me a strong candidate for this role.

    [AdditionalInfo]

    I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

    Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.
    
    Here is values:
    
    Company: ${values.company}
    JobTitle: ${values.jobTitle}
    Skills: ${values.skills}
    AdditionalInfo: ${values.comment}
    
    Remove empty [], and remove AdditionalInfo if no data is provided.
    Also you can add some advices.
    
    Remove section with best regards.
`.trim();
