import React, { useState } from "react";

import {
  useForm,
} from "react-hook-form";

import {
  yupResolver,
} from "@hookform/resolvers/yup";

import {
  Row,
  Col,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";

import {
  ToastContainer,
  toast,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { RHFSchema } from "../validation/RHFSchema";

const RHFFormYup = () => {

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({

    resolver: yupResolver(RHFSchema),

    defaultValues: {

      firstName: "yuvi",

      lastName: "Rathore",

      age: 22,

      password: "Test@1",

      phone: "9876543210",

      email: "yuvi@gmail.com",

      country: "India",

      state: "Rajasthan",

      cities: [
        "Ahmedabad",
        "Delhi",
      ],

      address:
        "Jodhpur Rajasthan",

      zip: "342001",

      joiningDate: "2024-01-10",

      gender: "Female",

      hobby: [
        "Drawing",
        "Singing",
      ],

      terms: true,

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
    <div className="p-3">

      <ToastContainer />

      <h3 className="fw-bold mb-3">

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
                {...register(
                  "firstName"
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
                {...register(
                  "lastName"
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
                {...register("age")}
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
                {...register(
                  "password"
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
                type="text"
                {...register(
                  "phone"
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
                {...register(
                  "email"
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
                {...register(
                  "country"
                )}
              >

                <option value="">
                  Select country
                </option>

                <option value="India">
                  India
                </option>

                <option value="USA">
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
                {...register(
                  "state"
                )}
              >

                <option value="">
                  Select state
                </option>

                <option value="Rajasthan">
                  Rajasthan
                </option>

                <option value="Gujarat">
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
                {...register(
                  "cities"
                )}
              >

                <option value="Ahmedabad">
                  Ahmedabad
                </option>

                <option value="Delhi">
                  Delhi
                </option>

                <option value="Somnath">
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
                {...register(
                  "address"
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
                type="text"
                {...register(
                  "zip"
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
                {...register(
                  "joiningDate"
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
                {...register(
                  "gender"
                )}
              />

              <Form.Check
                inline
                label="Female"
                type="radio"
                value="Female"
                {...register(
                  "gender"
                )}
              />

              <Form.Check
                inline
                label="Transgender"
                type="radio"
                value="Transgender"
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

              <Form.Check
                inline
                label="Drawing"
                type="checkbox"
                value="Drawing"
                {...register(
                  "hobby"
                )}
              />

              <Form.Check
                inline
                label="Singing"
                type="checkbox"
                value="Singing"
                {...register(
                  "hobby"
                )}
              />

              <Form.Check
                inline
                label="Dancing"
                type="checkbox"
                value="Dancing"
                {...register(
                  "hobby"
                )}
              />

              <div className="text-danger">

                {errors?.hobby?.message}

              </div>

            </Form.Group>

          </Col>

          {/* Profile */}
          <Col md={6}>

            <Form.Group className="mb-3">

              <Form.Label>
                Profile Picture
              </Form.Label>

              <Form.Control
                type="file"
                {...register(
                  "profilePicture"
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
                {...register(
                  "resume"
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
                {...register(
                  "terms"
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

export default RHFFormYup;