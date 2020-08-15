import Link from "next/link";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import Button from "../Button";
import { AuthFormContainer, Form, FormSubtitle } from "./styles";
import { Input, FormGroup } from "../../styles/shared/Form";
import ErrorText from "../../styles/shared/ErrorText";

const AuthForm = (props) => {
  const { data: currentUser } = useSWR("/api/users/me");
  const router = useRouter();

  const {
    loading,
    formInputs,
    subtitle,
    accountText,
    linkText,
    link,
    submitText,
    onSubmit,
  } = props;

  const { register, handleSubmit, errors } = useForm();

  if (currentUser) {
    router.push("/error", "/");
  }

  return (
    <AuthFormContainer>
      <img src="/ingredients-min.jpg" alt="background-ingredients" />
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Link href="/">
            <img src="/logo.svg" alt="cheflicious-logo" />
          </Link>
          <FormSubtitle>{subtitle}</FormSubtitle>
          {formInputs.map(
            ({ type, placeholder, name, options, errorMsg }, index) => {
              return (
                <FormGroup key={index} width="100%">
                  <Input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    error={errors[name]}
                    ref={register(options)}
                    pill
                  />
                  {errors && errors[name] && (
                    <ErrorText fontSize="1.6rem">{errorMsg}</ErrorText>
                  )}
                </FormGroup>
              );
            }
          )}
          <Button pill padding="15px 20px" fontSize="1.6rem" loading={loading}>
            {submitText}
          </Button>
          <span>
            {accountText}{" "}
            <Link href={link}>
              <a>{linkText}</a>
            </Link>
          </span>
        </Form>
      </div>
    </AuthFormContainer>
  );
};

export default AuthForm;
