import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authedUser } from "../redux/actions/authedUserAction";
import { saveQuestion } from "../redux/actions/saveQuestionAnswer";
import * as Yup from "yup";

const AddForm = ({ signin, option }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users);
  const authUser = useSelector((state) => state.user);
  const [usersId, setUsersId] = useState([]);
  const [authenticated, setAuthenticated] = useState("");

  useEffect(() => {
    if (users) {
      const usersId = [];
      for (let value of Object.values(users.users)) {
        usersId.push(value.id);
      }
      setUsersId(usersId);
      setAuthenticated(usersId[0]);
    }
  }, [users]);

  const handleClick = () => {
    for (let value of Object.values(users.users)) {
      if (authenticated === value.id) {
        const { id, name, avatarURL, answers, questions } = value;
        const info = {
          id,
          name,
          avatarURL,
          answers,
          questions,
        };
        dispatch(authedUser(info));
        history.push("/");
        return;
      }
    }
  };

  return (
    <Box mt="2rem">
      {option && (
        <Formik
          initialValues={{ option1: "", option2: "" }}
          validationSchema={Yup.object({
            option1: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            option2: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(saveQuestion(values.option1, values.option2, authUser.id));
            setSubmitting(false);
            history.push("/");
          }}
        >
          <Form>
            <Box>
              <Field name="option1" type="text">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.option1 && form.touched.option1}
                  >
                    <Input
                      {...field}
                      placeholder="Enter Option 1"
                      fontSize="3rem"
                      padding="4rem 2rem"
                      focusBorderColor="primary"
                    />

                    <FormErrorMessage>{form.errors.option1}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>

            <Box mt="2rem">
              <Field name="option2" type="text">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.option2 && form.touched.option2}
                  >
                    <Input
                      {...field}
                      placeholder="Enter Option 2"
                      fontSize="3rem"
                      padding="4rem 2rem"
                      focusBorderColor="primary"
                      border="1px solid #302b63"
                    />
                    <FormErrorMessage>{form.errors.option2}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>
            <Flex>
              <Button
                flexGrow="1"
                padding="4rem"
                fontSize="2.5rem"
                type="submit"
                mt="2rem"
                bg="primary"
                color="secondary"
                _hover={{
                  bg: "primary",
                }}
              >
                Submit
              </Button>
            </Flex>
          </Form>
        </Formik>
      )}

      {signin && (
        <Box mt="8rem">
          <Box>
            <Select
              value={authenticated}
              height="7rem"
              fontSize="2rem"
              focusBorderColor="primary"
              onChange={(e) => setAuthenticated(e.target.value)}
            >
              {usersId.map((userId) => (
                <option key={userId} value={userId}>
                  {userId}
                </option>
              ))}
            </Select>
          </Box>
          <Flex>
            <Button
              onClick={handleClick}
              flexGrow="1"
              padding="4rem"
              fontSize="2.5rem"
              type="submit"
              mt="2rem"
              bg="primary"
              color="secondary"
              _hover={{
                bg: "primary",
              }}
            >
              Submit
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default AddForm;
