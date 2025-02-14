import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Поле "Ім’я" є обов’язковим')
    .min(3, "Ім’я повинно містити мінімум 3 символи")
    .matches(/^[а-яёa-z]+$/iu, "Ім’я може містити тільки букви"),
  phone: Yup.string()
    .required('Поле "Телефон" є обов’язковим')
    .min(10, "Номер телефону повиннен містити мінімум 10 символів")
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
      "Введіть правильний формат номеру"
    ),
  address: Yup.string()
    .required('Поле "Адреса прибирання" є обов’язковим')
    .min(5, "Адреса прибирання повинна містити мінімум 5 символів"),
  cleaningType: Yup.array()
    .required('Поле "Тип прибирання" є обов’язковим')
    .min(1, "Виберіть хоча б один варіант")
    .of(
      Yup.string().oneOf([
        "general",
        "regular",
        "renovation",
        "commercial",
        "other",
      ])
    ),
  square: Yup.string()
    .required('Поле "Величина приміщення" є обов’язковим')
    .matches(/^[0-9]+$/, "Величина приміщення повинна містити тільки цифри"),
});

export default schema;
