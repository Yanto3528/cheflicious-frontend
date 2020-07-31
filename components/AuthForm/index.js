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

const AuthForm = (props) => {
  const {
    formInputs,
    subtitle,
    accountText,
    linkText,
    link,
    submitText,
    onSubmit,
  } = props;

  const { register, handleSubmit, errors } = useForm();

  return (
    <AuthFormContainer>
      <img src="/ingredients-min.jpg" alt="background-ingredients" />
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <img src="/logo.svg" alt="cheflicious-logo" />
          <FormSubtitle>{subtitle}</FormSubtitle>
          {formInputs.map(({ type, placeholder, name, options, errorMsg }) => {
            return (
              <FormGroup>
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
          })}
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
