import { Control, FieldValues } from "react-hook-form"

interface FormValues extends FieldValues {
  name: string
  lastName: string
  email: string
  message: string
}

export interface TypesItem {
  control: Control<FormValues, any>
  styles: Record<string, string>
  input: React.ReactNode
  name: string
  nameLabel: string
  addStyle: string
}