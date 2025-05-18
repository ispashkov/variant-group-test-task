import type { ApplicationFormValues } from '../../../entities/applications';

export const mapApplicationFormValuesToPrompt = (
  values: ApplicationFormValues,
): string =>
  `
    Dear ${values.company} Team,

    I am writing to express my interest in the ${values.jobTitle} position.

    My experience in the realm combined with my skills in ${values.skills} make me a strong candidate for this role.

    ${values.comment}

    I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

    Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.
`.trim();
