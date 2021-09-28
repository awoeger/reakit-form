import {
  unstable_Form as Form,
  unstable_FormInput as FormInput,
  unstable_FormLabel as FormLabel,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
  unstable_useFormState as useFormState,
} from 'reakit/Form';

export default function CheckoutForm() {
  const form = useFormState({
    values: { firstname: '', lastname: '', password: '' },
    onValidate: (values) => {
      if (!values.firstname) {
        const errors = {
          firstname: 'Please enter your first name',
        };
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form {...form}>
      <FormLabel {...form} name="firstname">
        First name
      </FormLabel>
      <FormInput {...form} name="firstname" placeholder="John" />
      <FormMessage {...form} name="firstname" />

      <FormLabel {...form} name="lastname">
        Last name
      </FormLabel>
      <FormInput {...form} name="lastname" placeholder="Doe" />
      <FormMessage {...form} name="lastname" />

      <FormLabel {...form} name="password">
        Password
      </FormLabel>
      <FormInput
        {...form}
        name="password"
        placeholder="Password"
        type="password"
      />
      <FormMessage {...form} name="password" />

      <FormSubmitButton {...form}>Submit</FormSubmitButton>
    </Form>
  );
}
