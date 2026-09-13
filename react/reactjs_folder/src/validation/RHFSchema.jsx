import * as yup from "yup";

export const RHFSchema = yup.object().shape({

  firstName: yup
    .string()
    .required(
      "First name is required"
    ),

  lastName: yup
    .string()
    .required(
      "Last name is required"
    ),

  age: yup
    .number()
    .typeError(
      "Age is required"
    )
    .min(
      18,
      "Age must be greater than 18"
    )
    .max(
      40,
      "Age must be less than 40"
    )
    .required(
      "Age is required"
    ),

  password: yup
    .string()
    .required(
      "Password is required"
    )
    .min(
      6,
      "Password must be greater than 6"
    )
    .max(
      10,
      "You can use maximum 10 character for password"
    )
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(
      /\d/,
      "Password must contain at least one digit"
    )
    .test(
      "noSpace",
      "Password cannot contain spaces",
      (value) => {

        if (
          value?.includes(" ")
        )
          return false;

        return true;

      }
    ),

  confirmPassword: yup
    .string()
    .required(
      "Confirm Password is required"
    )
    .oneOf(
      [yup.ref("password")],
      "Password and Confirm Password must match"
    ),

  phone: yup
    .string()
    .matches(
      /^[6-9]{1}[0-9]{9}$/,
      "Enter a valid phone number"
    )
    .required(
      "Phone number is required"
    ),

  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Enter a valid email address"
    )
    .required(
      "Email is required"
    ),

  country: yup
    .string()
    .required(
      "Please select country"
    ),

  state: yup
    .string()
    .required(
      "Please select state"
    ),

  cities: yup
    .array()
    .min(
      2,
      "Please select at least two cities"
    )
    .required(
      "Cities are required"
    ),

  address: yup
    .string()
    .required(
      "Please enter your address"
    ),

  zip: yup
    .string()
    .matches(
      /^[0-9]{6}$/,
      "Enter valid pin code"
    )
    .required(
      "Pin code is required"
    ),

  joiningDate: yup
    .date()
    .max(
      new Date(),
      "Joining date must be less than current date"
    )
    .typeError(
      "Joining date is required"
    ),

  gender: yup
    .string()
    .required(
      "Gender is required"
    ),

  hobby: yup
    .array()
    .min(
      2,
      "Please select at least two hobbies"
    )
    .typeError(
      "Hobbies are required"
    ),

  profilePicture: yup
    .mixed()

    .test(
      "required",
      "Profile picture is required",
      (value) => {

        return (
          value &&
          value.length > 0
        );

      }
    )

    .test(
      "fileFormat",
      "Only JPG, JPEG, GIF and PNG files are allowed",
      (value) => {

        if (
          !value ||
          !value[0]
        )
          return true;

        const allowedTypes = [
          "image/jpeg",
          "image/png",
          "image/gif",
        ];

        return allowedTypes.includes(
          value[0].type
        );

      }
    )

    .test(
      "fileSize",
      "File size must be less than 6MB",
      (value) => {

        if (
          !value ||
          !value[0]
        )
          return true;

        return (
          value[0].size <=
          6 * 1024 * 1024
        );

      }
    ),

  resume: yup
    .mixed()

    .test(
      "required",
      "Resume is required",
      (value) => {

        return (
          value &&
          value.length > 0
        );

      }
    )

    .test(
      "fileFormat",
      "Only PDF and DOCX files are allowed",
      (value) => {

        if (
          !value ||
          !value[0]
        )
          return true;

        const allowedTypes = [
          "application/pdf",

          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        return allowedTypes.includes(
          value[0].type
        );

      }
    )

    .test(
      "fileSize",
      "File size must be less than 8MB",
      (value) => {

        if (
          !value ||
          !value[0]
        )
          return true;

        return (
          value[0].size <=
          8 * 1024 * 1024
        );

      }
    ),

  termsandconditions: yup
    .bool()
    .oneOf(
      [true],
      "Terms must be accepted"
    ),

});