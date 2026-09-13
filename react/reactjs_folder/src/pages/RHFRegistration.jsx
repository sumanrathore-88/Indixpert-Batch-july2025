import React, { useState } from "react";

import { useForm } from "react-hook-form";

import {
  Form,
  Button,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";

import {
  ToastContainer,
  toast,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const RHFRegistration = () => {

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({

    defaultValues: {

      firstName: "Yuvika",

      lastName: "Singh",

      age: 21,

      password: "Test@12",

      phone: "9876543210",

      email: "yuvi@gmail.com",

      country: "India",

      state: "Rajasthan",

      cities: [
        "Ahmedabad",
        "Delhi",
        "jodhpur",
        "jaipur",
        "Mumbai",
        "Pune",
      ],

      address:
        "Jodhpur Rajasthan",

      zip: "342001",

      gender: "Female",

      hobby: ["Drawing"],

      joiningDate: "",

    },

  });

  const onSubmit = (data) => {

    setLoading(true);

    setTimeout(() => {

      console.log(data);

      toast.success(
        "Form Submitted Successfully"
      );

      reset();

      setLoading(false);

    }, 2000);

  };

  return (
    <div className="p-4">

      <ToastContainer />

      <h3 className="fw-bold mb-4">

        Registration Details

      </h3>

      <Form
        onSubmit={handleSubmit(onSubmit)}
      >

        <Row>

          {/* First Name */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                First name
              </Form.Label>

              <Form.Control
                type="text"

                disabled={loading}

                {...register(
                  "firstName",
                  {
                    required:
                      "First name is required",
                  }
                )}
              />

              <div className="text-danger">

                {errors?.firstName?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Last Name */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Last name
              </Form.Label>

              <Form.Control
                type="text"

                disabled={loading}

                {...register(
                  "lastName",
                  {
                    required:
                      "Last name is required",
                  }
                )}
              />

              <div className="text-danger">

                {errors?.lastName?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Age */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Age
              </Form.Label>

              <Form.Control
                type="number"

                disabled={loading}

                {...register(
                  "age",
                  {
                    required:
                      "Age is required",

                    min: {
                      value: 18,

                      message:
                        "Age must be greater than 18",
                    },

                    max: {
                      value: 40,

                      message:
                        "Age must be less than 40",
                    },
                  }
                )}
              />

              <div className="text-danger">

                {errors?.age?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Password */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Password
              </Form.Label>

              <Form.Control
                type="password"

                disabled={loading}

                {...register(
                  "password",
                  {
                    required:
                      "Password is required",

                    minLength: {
                      value: 6,

                      message:
                        "Minimum 6 characters required",
                    },

                    maxLength: {
                      value: 10,

                      message:
                        "Maximum 10 characters allowed",
                    },

                    validate: (
                      value
                    ) => {

                      if (
                        value.includes(" ")
                      ) {

                        return "Password cannot contain spaces";

                      }

                      return true;

                    },
                  }
                )}
              />

              <div className="text-danger">

                {errors?.password?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Phone */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Phone Number
              </Form.Label>

              <Form.Control
                type="number"

                disabled={loading}

                {...register(
                  "phone",
                  {
                    required:
                      "Phone number is required",
                  }
                )}
              />

              <div className="text-danger">

                {errors?.phone?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Email */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Email Address
              </Form.Label>

              <Form.Control
                type="email"

                disabled={loading}

                {...register(
                  "email",
                  {
                    required:
                      "Email is required",

                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                      message:
                        "Enter valid email address",
                    },
                  }
                )}
              />

              <div className="text-danger">

                {errors?.email?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Country */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Select Country
              </Form.Label>

              <Form.Select

                disabled={loading}

                {...register(
                  "country",
                  {
                    required:
                      "Country is required",
                  }
                )}
              >

                <option value="">
                  Select country
                </option>

                <option>
                  India
                </option>

                <option>
                  USA
                </option>

              </Form.Select>

              <div className="text-danger">

                {errors?.country?.message}

              </div>

            </Form.Group>

          </Col>

          {/* State */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Select State
              </Form.Label>

              <Form.Select

                disabled={loading}

                {...register(
                  "state",
                  {
                    required:
                      "State is required",
                  }
                )}
              >

                <option value="">
                  Select state
                </option>

                <option>
                  Rajasthan
                </option>

                <option>
                  Gujarat
                </option>

              </Form.Select>

              <div className="text-danger">

                {errors?.state?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Cities */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Select Preferred Cities
              </Form.Label>

              <Form.Select
                multiple

                disabled={loading}

                {...register(
                  "cities",
                  {
                    required:
                      "Please select cities",

                    validate: (
                      value
                    ) => {

                      return (
                        value.length >= 2 ||

                        "Minimum two cities required"
                      );

                    },
                  }
                )}
              >

                <option>
                  Ahmedabad
                </option>

                <option>
                  Delhi
                </option>

                <option>
                  Somnath
                </option>

              </Form.Select>

              <div className="text-danger">

                {errors?.cities?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Address */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Your Complete Address
              </Form.Label>

              <Form.Control
                as="textarea"
                rows={3}

                disabled={loading}

                {...register(
                  "address",
                  {
                    required:
                      "Address is required",
                  }
                )}
              />

              <div className="text-danger">

                {errors?.address?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Zip */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Zip/Pin Code
              </Form.Label>

              <Form.Control
                type="number"

                disabled={loading}

                {...register(
                  "zip",
                  {
                    required:
                      "Zip code is required",
                  }
                )}
              />

              <div className="text-danger">

                {errors?.zip?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Joining Date */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Joining Date
              </Form.Label>

              <Form.Control
                type="date"

                disabled={loading}

                {...register(
                  "joiningDate",
                  {
                    required:
                      "Joining date is required",

                    validate: (
                      value
                    ) => {

                      const today =
                        new Date();

                      const selectedDate =
                        new Date(value);

                      return (
                        selectedDate <
                          today ||

                        "Joining date must be less than today"
                      );

                    },
                  }
                )}
              />

              <div className="text-danger">

                {errors?.joiningDate?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Gender */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label className="d-block">
                Gender
              </Form.Label>

              <Form.Check
                inline
                label="Male"
                type="radio"
                value="Male"

                disabled={loading}

                {...register(
                  "gender",
                  {
                    required:
                      "Please select gender",
                  }
                )}
              />

              <Form.Check
                inline
                label="Female"
                type="radio"
                value="Female"

                disabled={loading}

                {...register(
                  "gender"
                )}
              />

              <Form.Check
                inline
                label="Transgender"
                type="radio"
                value="Transgender"

                disabled={loading}

                {...register(
                  "gender"
                )}
              />

              <div className="text-danger">

                {errors?.gender?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Hobbies */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label className="d-block">
                Hobbies
              </Form.Label>

              {[
                "Drawing",
                "Singing",
                "Dancing",
              ].map(
                (
                  hobby,
                  index
                ) => {

                  return (
                    <Form.Check
                      key={index}

                      inline

                      label={hobby}

                      type="checkbox"

                      value={hobby}

                      disabled={loading}

                      {...register(
                        "hobby",
                        {
                          required:
                            "Please select hobby",

                          validate: (
                            value
                          ) => {

                            return (
                              value.length >= 2 ||

                              "Minimum two hobbies required"
                            );

                          },
                        }
                      )}
                    />
                  );

                }
              )}

              <div className="text-danger">

                {errors?.hobby?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Profile Picture */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Profile Picture
              </Form.Label>

              <Form.Control
                type="file"

                disabled={loading}

                {...register(
                  "profilePicture",
                  {
                    required:
                      "Profile picture is required",

                    validate: {

                      acceptedFormats: (
                        value
                      ) => {

                        if (
                          !value ||
                          value.length === 0
                        ) {

                          return true;

                        }

                        const file =
                          value[0];

                        const acceptedFormatList = [
                          "image/jpeg",
                          "image/png",
                          "image/gif",
                        ];

                        return (
                          acceptedFormatList.includes(
                            file.type
                          ) ||

                          "Only JPG, PNG and GIF allowed"
                        );

                      },

                      fileSize: (
                        value
                      ) => {

                        if (
                          !value ||
                          value.length === 0
                        ) {

                          return true;

                        }

                        const file =
                          value[0];

                        const maxSize =
                          6 * 1024 * 1024;

                        return (
                          file.size <=
                            maxSize ||

                          "File size must be less than 6MB"
                        );

                      },

                    },
                  }
                )}
              />

              <div className="text-danger">

                {errors?.profilePicture?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Resume */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Resume
              </Form.Label>

              <Form.Control
                type="file"

                disabled={loading}

                {...register(
                  "resume",
                  {
                    required:
                      "Resume is required",

                    validate: {

                      acceptedFormats: (
                        value
                      ) => {

                        if (
                          !value ||
                          value.length === 0
                        ) {

                          return true;

                        }

                        const file =
                          value[0];

                        const acceptedFormatList = [
                          "application/pdf",

                          "application/msword",

                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        ];

                        return (
                          acceptedFormatList.includes(
                            file.type
                          ) ||

                          "Only PDF or Word document allowed"
                        );

                      },

                      fileSize: (
                        value
                      ) => {

                        if (
                          !value ||
                          value.length === 0
                        ) {

                          return true;

                        }

                        const file =
                          value[0];

                        const maxSize =
                          8 * 1024 * 1024;

                        return (
                          file.size <=
                            maxSize ||

                          "File size must be less than 8MB"
                        );

                      },

                    },
                  }
                )}
              />

              <div className="text-danger">

                {errors?.resume?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Terms */}
          <Col md={12}>

            <Form.Group className="mb-3">

              <Form.Check
                label="Agree to terms and conditions"

                disabled={loading}

                {...register(
                  "terms",
                  {
                    required:
                      "Please accept terms",
                  }
                )}
              />

              <div className="text-danger">

                {errors?.terms?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Submit */}
          <Col md={12}>

            <Button
              type="submit"
              size="sm"
              disabled={loading}
            >

              {loading ? (
                <>

                  <Spinner
                    animation="border"
                    size="sm"
                    className="me-2"
                  />

                  Submitting...

                </>
              ) : (
                "Submit form"
              )}

            </Button>

          </Col>

        </Row>

      </Form>

    </div>
  );
};

export default RHFRegistration;