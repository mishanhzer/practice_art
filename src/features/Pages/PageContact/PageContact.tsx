import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Input } from "antd";

import { yupResolver } from '@hookform/resolvers/yup';

import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp";

import { TitlePage } from '../TitlePage/TitlePage'
import { Button } from '../../UI/Button/Button'

import { FormPicture } from "./FormPicture/FormPicture";
import { Item } from './Item/Item'

import { TextArea, schema } from './constants'

import { TypesDataForm } from './types'

import styles from './contact.module.scss'
import './addAnt.scss'

const PageContact = () => {
  const { control, handleSubmit, reset, formState, formState: { isSubmitSuccessful, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: '', lastName: '', email: '', message: '' })
    }
  }, [formState, reset])

  const onSubmit = async (data: TypesDataForm) => {
    // fetch('/mailer/smart.php', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => response.text())
    //   .then(data => console.log(data));
    console.log(data)
  };

  return (
    <div className="mb-[50px]">
      <TitlePage name='Elena Kozyutenko' content='Main page' />
      <div className={styles.сontainer}>
        <FormPicture />
        <Form
          className={styles.form}
          onFinish={handleSubmit(onSubmit)}
        >
          <div className={`flex`}>
            <Item control={control} styles={styles} input={<Input className={styles.inputAnt} />} name='name' nameLabel={'Name'} addStyle={''} />
            <Item control={control} styles={styles} input={<Input className={styles.inputAnt} />} name='lastName' nameLabel={'Last Name'} addStyle={styles.addLastName} />
          </div>
          <Item control={control} styles={styles} input={<Input className={styles.inputAnt} />} name='email' nameLabel={'Email'} addStyle={styles.addEmail} />
          <Item control={control} styles={styles} input={<TextArea className={styles.messageAnt} />} name='message' nameLabel={'Message'} addStyle={styles.addMessage} />
          <Button
            disabled={isSubmitting}
            mt='mt-3'
            h='h-16'
            fz='text-sm'
            textBtn="Отправить"
            turn='rotate-0'
            translateX='translate-x-1' />
        </Form>
        <WhatsApp />
      </div>
    </div>
  );
}


// const PageContact = () => { // Альтернативный вариант 
//   return (
//     <div className={`text-center mt-[30px]`}>
//       <h1 className="text-3xl text-[rgb(119,119,119)] mb-3">Контакты</h1>
//       <div className="text-[rgb(119,119,119)] mb-1">email: Kozyutenko@mail.ru</div>
//       <a href='https://vk.com/id264614153' className="text-[rgb(119,119,119)] mb-1">VK: vk.com/id264614153</a>
//       <div className="text-[rgb(119,119,119)] mb-1">Телефон: +79222636130</div>
//     </div>
//   )
// }

export default PageContact
