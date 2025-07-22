import { Input } from "antd";
import * as yup from 'yup';

export const { TextArea } = Input;

export const schema = yup.object().shape({
  name: yup.string().required('Это поле обязательно!'),
  lastName: yup.string().required('Это поле обязательно!'),
  email: yup.string().email('Вы ввели неверный e-mail').required('Это поле обязательно!'),
  message: yup.string().required('Это поле обязательно!')
})