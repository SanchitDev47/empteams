export const useRequired = () => ({
    nullValidation: {
        required: "This field is required"
    },
    emailValidation: {
        required: "This field is required",
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
        }
    },
    passwordValidation: {
        required: "This field is required",
        minLength: {
            value: 8,
            message: "Minimum 8 characters required"
        },
        maxLength: {
            value: 15,
            message: "Maximum 15 characters are allowed"
        },
        pattern: {
            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}/,
            message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special characters and 1 number"
        }
    }



})