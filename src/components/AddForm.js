import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const AddForm = ({ signin, option }) => {
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
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
            <Select height="7rem" fontSize="2rem" focusBorderColor="primary">
              <option value="option1">option1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
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
        </Box>
      )}
    </Box>
  );
};

export default AddForm;
