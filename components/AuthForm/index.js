import Link from "next/link";
import { useForm } from "react-hook-form";

import {
  AuthFormContainer,
  Form,
  FormSubtitle,
  FormGroup,
  FormInput,
  FormButton,
} from "./styles";
import ErrorText from "../../styles/shared/ErrorText";

const AuthForm = (props) => {
  const {
    formInputs,
    subtitle,
    accountText,
    linkText,
    link,
    submitText,
    error,
    onSubmit,
  } = props;

  const { register, handleSubmit, errors } = useForm();

  return (
    <AuthFormContainer>
      <img src="/ingredients-min.jpg" alt="background-ingredients" />
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Link href="/">
            <img src="/logo.svg" alt="cheflicious-logo" />
          </Link>
          <FormSubtitle>{subtitle}</FormSubtitle>
          {error && (
            <ErrorText center fontSize="2rem">
              {error}
            </ErrorText>
          )}
          {formInputs.map(
            ({ type, placeholder, name, options, errorMsg }, index) => {
              return (
                <FormGroup key={index}>
                  <FormInput
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    error={errors[name]}
                    ref={register(options)}
                  />
                  {errors && errors[name] && <p>{errorMsg}</p>}
                </FormGroup>
              );
            }
          )}
          <span>
            {accountText}{" "}
            <Link href={link}>
              <a>{linkText}</a>
            </Link>
          </span>
          <FormButton>{submitText}</FormButton>
        </Form>
      </div>
    </AuthFormContainer>
  );
};

export default AuthForm;
