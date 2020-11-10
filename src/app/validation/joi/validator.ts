import commonError from '../../constant/CommonErrors';
const { DATA_NOT_FOUND_FOR_VALIDATION, INVALID_JOI_SCHEMA } = commonError
export class JoiValidator {
    constructor() { }

    joiValidation(value: any, joiSchema: any) {
        if (!value) {
            throw {
                message: DATA_NOT_FOUND_FOR_VALIDATION
            }
        }
        if (!joiSchema) {
            throw {
                message: INVALID_JOI_SCHEMA
            }
        }
        const { error, validationResult } = joiSchema.validate(value);

        if (error) {
            throw error;
        }
    }

};

const joiValidator: JoiValidator = new JoiValidator()

export default joiValidator;