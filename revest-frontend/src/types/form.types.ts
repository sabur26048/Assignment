export type FieldType = "TEXT" | "LIST" | "RADIO"

export interface FormField {
  id: number
  name: string
  fieldType: FieldType
  minLength?: number
  maxLength?: number
  required?: boolean
  defaultValue?: string
  listOfValues1?: string[]
}