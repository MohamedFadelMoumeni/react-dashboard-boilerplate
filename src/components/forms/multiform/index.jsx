import { Form, Formik } from "formik";
import { useState } from "react";
import Card from "../../UI/card";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import validationSchema from "./validationSchema";
const MultiStepForm = () => {
  const steps = [1, 2];
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const currentValidationSchema = validationSchema[activeStep];

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _renderStepContent(step, errors, touched) {
    switch (step) {
      case 0:
        return <FirstForm errors={errors} touched={touched} />;
      case 1:
        return <SecondForm errors={errors} touched={touched} />;
      case 2:
        return <FirstForm errors={errors} touched={touched} />;
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <Card>
      <div className="w-full">
        <h1 className="text-lg mb-8">Multi-Columns Form</h1>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          validationSchema={currentValidationSchema}
          onSubmit={_handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              {_renderStepContent(activeStep, errors, touched)}
              <div className="w-full mt-8 space-x-6 flex items-center justify-center">
                {activeStep !== 0 && (
                  <button
                    onClick={_handleBack}
                    type="button"
                    className="font-meduim text-white bg-gray-400 px-4 py-1 rounded-lg shadow-lg"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="font-meduim text-white bg-dark px-4 py-1 rounded-lg shadow-lg"
                >
                  {isLastStep ? "Send" : "Next"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Card>
  );
};

export default MultiStepForm;
