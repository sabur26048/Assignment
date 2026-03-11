// config/form.config.ts
export const formFields = [
  {
    id: 1,
    name: "Name",
    fieldType: "TEXT",
    defaultValue: "John Doe",
    required: true,
  },
  {
    id: 2,
    name: "Email",
    fieldType: "TEXT",
    defaultValue: "hello@mail.com",
    required: true,
  },
  {
    id: 6,
    name: "Gender",
    fieldType: "LIST",
    defaultValue: "Male",
    required: true,
    listOfValues: ["Male", "Female", "Others"],
  },
  {
    id: 7,
    name: "Love React?",
    fieldType: "RADIO",
    defaultValue: "Yes",
    required: true,
    listOfValues: ["Yes", "No"],
  },
];