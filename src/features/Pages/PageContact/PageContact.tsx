import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Input } from "antd";

import { yupResolver } from '@hookform/resolvers/yup';

import { TitlePage } from '../TitlePage/TitlePage'
import { Button } from '../../UI/Button/Button'
import { FormPicture } from "./FormPicture/FormPicture";
import { Label } from "./Item/Label/Label";

import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp";

import { TextArea, schema } from './constants'

import { TypesDataForm } from './types'

import styles from './contact.module.scss'
import './changeStyleAnt.scss'

import { Item } from './Item/Item'

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
            <Item control={control} styles={styles} input={<Input className={styles.inputAnt} />} name='lastName' nameLabel={'Last Name'} addStyle={'ml-[30px]'} />
          </div>
          <Item control={control} styles={styles} input={<Input className={styles.inputAnt} />} name='email' nameLabel={'Email'} addStyle={'w-full mt-[15px]'} />
          <Item control={control} styles={styles} input={<TextArea className={styles.messageAnt} />} name='message' nameLabel={'Message'} addStyle={'w-full mt-[35px]'} />
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



// const PageContact = () => {
//   const { control, handleSubmit, reset, formState, formState: { isSubmitSuccessful, isSubmitting } } = useForm({
//     resolver: yupResolver(schema)
//   })

//   useEffect(() => {
//     if (isSubmitSuccessful) {
//       reset({ name: '', lastName: '', email: '', message: '' })
//     }
//   }, [formState, reset])

//   const onSubmit = async (data: TypesDataForm) => {
//     // fetch('/mailer/smart.php', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(data),
//     // })
//     //   .then(response => response.text())
//     //   .then(data => console.log(data));
//     console.log(data)
//   };

//   return (
//     <div className="mb-[50px]">
//       <TitlePage name='Elena Kozyutenko' content='Main page' />
//       <div className={styles.сontainer}>
//         <FormPicture />
//         <Form
//           className={styles.form}
//           onFinish={handleSubmit(onSubmit)}
//         >
//           <div className={`flex`}>
//             <FormItem
//               control={control}
//               name="name"
//               className={`w-[500px] ${styles.itemForm}`}
//             >
//               <Test input={<Input className={styles.inputAnt} />} nameLabel='Name' />
//             </FormItem>
//             <FormItem
//               control={control}
//               name="lastName"
//               className={`w-[500px] ml-[30px] ${styles.itemForm}`}
//             >
//               <Test input={<Input className={styles.inputAnt} />} nameLabel='Last Name' />
//             </FormItem>
//           </div>
//           <FormItem
//             control={control}
//             name="email"
//             className={`w-full mt-[15px] ${styles.itemForm}`}
//           >
//             <Test input={<Input className={styles.inputAnt} />} nameLabel='Email' />
//             {/* <div>
//               <Label classLabel={styles.labelAnt} nameLabel='Email' />
//               <Input className={styles.inputAnt} />
//             </div> */}
//           </FormItem>
//           <FormItem
//             control={control}
//             name="message"
//             className={`w-full mt-[35px] ${styles.itemForm}`}
//           >
//             <Test input={<TextArea className={styles.messageAnt} />} nameLabel='Message' />
//             {/* <div>
//               <Label classLabel={styles.labelAnt} nameLabel='Message' />
//               <TextArea
//                 className={styles.messageAnt}
//               />
//             </div> */}
//           </FormItem>

//           <Button
//             disabled={isSubmitting}
//             mt='mt-3'
//             h='h-16'
//             fz='text-sm'
//             textBtn="Отправить"
//             turn='rotate-0'
//             translateX='translate-x-1' />
//         </Form>
//         <WhatsApp />
//       </div>
//     </div>
//   );
// }