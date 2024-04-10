import * as Yup from "yup";

const giftSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Поле "Ім’я" є обов’язковим')
    .min(3, "Ім’я повинно містити мінімум 3 символи")
    .matches(/^[а-яёa-z]+$/iu, "Ім’я може містити тільки букви"),
  phoneNumber: Yup.string()
    .required('Поле "Телефон" є обов’язковим')
    .min(10, "Номер телефону повиннен містити мінімум 10 символів")
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
      "Введіть правильний формат номеру"
    ),
});

export default giftSchema;
