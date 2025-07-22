import { useState, useEffect } from 'react'
import classNames from 'classnames'

import { useSetCartTest, useCartMain, useSetAddInCart, useAddInCart, useGetDeleteItemCart } from './cartFormSelector'

import styles from '../cart.module.scss'

import { deleteCart, likeCart } from './LogoCart/LogoCart'

const CartForm = ({ picturesCart, getDeleteTest, setViewDeleteBtn, discount }) => {
  const [oldSalary, setOldSalary] = useState(0)
  const [cart, setCart] = useState(picturesCart);

  const [cartId, setCartId] = useState(0)
  const [btnId, setBtnId] = useState(0)
  const [activeLike, setActiveLike] = useState(false)

  const setCartTest = useSetCartTest()
  const setAddInCart = useSetAddInCart()
  const addInCart = useAddInCart()
  const getDeleteItemCart = useGetDeleteItemCart()
  const cartMain = useCartMain()

  useEffect(() => { // отвечает за увеличение количества товара в корзине
    setCartTest(cart)
  }, [cart])

  useEffect(() => { // запоминает количество добавленных товаров
    setCartTest(cartMain)
  }, [cartMain])

  useEffect(() => { // отвечает за удаление товара из корзины
    setCart(cartMain)
  }, [picturesCart.length])

  const handleTestClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const elem = +e.currentTarget.getAttribute('data-id')!
    getDeleteTest(elem)
    setViewDeleteBtn(elem)

    setAddInCart(true)

    getDeleteItemCart(elem)

    setTimeout(() => {
      setAddInCart(false)
    }, 3000)
  }

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const activeBtn = +e.currentTarget.getAttribute('data-btn')!
    setBtnId(activeBtn)
    setActiveLike(!activeLike)
  }

  const handleIncreaseSalary = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>, pictureSalary: number, value: number, operation: (a: number, b: number) => number = (a, b) => (a + b)) => {
    const cartPictureId = +e.currentTarget.getAttribute('data-id')!
    setCartId(cartPictureId)

    const selectedPicture: TypesCommonData = picturesCart.find(item => item.id === cartPictureId)
    if (selectedPicture && selectedPicture.salary !== undefined) {
      const newSalary = operation(pictureSalary, selectedPicture.salary)
      setOldSalary(selectedPicture.salary)
      const newCart = cartMain.map((item) => {
        if (item.id === cartPictureId) {
          return { ...item, amount: item.amount + value, salary: newSalary };
        }
        return item;
      });
      setCart(newCart);
    }
  }

  return (
    <div className={styles.cartFormContainer}>
      <h1 className={styles.cartFormHeader}>Корзина</h1>
      <h2 className={styles.cartFormAmountPicture}>
        {cart.length} картин{cart.length % 10 === 1 && cart.length % 100 !== 11 ? 'а' : cart.length % 10 >= 2 && cart.length % 10 <= 4 && (cart.length % 100 < 10 || cart.length % 100 >= 20) ? 'ы' : ''}
      </h2>
      {cartMain.map((picture) => {
        return (
          <div key={picture.id} className={styles.cartFormPictureContainer}>
            <div className={styles.cartFormPictureWrapperItems}>
              <div className={styles.cartFormWrapperPictureAndDescr}>
                <img src={picture.id || !picture.id ? picture?.sizes?.[0].url : ''} className={styles.cartFormPictureImg} alt={picture.name} />
                <div className={styles.cartFormPictureDescr}>
                  <h3 className={styles.cartFormPictureName}>{picture.name}</h3>
                  <div className={styles.cartFormPictureSizeAndMaterials}>Размер: {picture.size}</div>
                  <div className={styles.cartFormPictureSizeAndMaterials}>Материалы: {picture.materials}</div>
                  <div className={styles.cartFormPictureLikeAndDeleteContainer}>
                    {activeLike && picture.id === btnId ?
                      <button onClick={handleLikeClick} data-btn={picture.id} className={classNames(styles.cartFormPictureLikeAndDelete, styles.cartFormPictureLikeActive)}>
                        {likeCart()}
                        <div className={styles.cartFormPictureLikeActiveBlock}></div>
                      </button> :
                      <button onClick={handleLikeClick} data-btn={picture.id} className={`${styles.cartFormPictureLikeAndDelete}`}>
                        {likeCart()}
                      </button>}
                    <button
                      onClick={handleTestClick}
                      data-id={picture.id}
                      className={styles.cartFormPictureLikeAndDelete}>
                      {deleteCart()}
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.cartFormIncreaseAndDecrease}>
                {picture.amount > 1 ?
                  <CartFormButtonIncDec
                    func={(e) => handleIncreaseSalary(e, picture.salary, -1, (a, b) => a - b)}
                    disabled={picture.amount > 1 ? false : true}
                    style={styles.btnMinus}
                    data={picture.id} /> :
                  <CartFormButtonIncDec
                    func={(e) => handleIncreaseSalary(e, picture.salary, -1, (a, b) => a - b)}
                    disabled={picture.amount === 1 ? true : false}
                    style={styles.btnMinus}
                    data={picture.id} />
                }
                <div className={styles.cartFormIncreaseAndDecreaseValue}>{picture.amount}</div>
                <CartFormButtonIncDec func={(e) => handleIncreaseSalary(e, picture.salary, 1, (a, b) => a + b)} disabled={picture.amount > 1 && cartId === picture.id ? false : false} style={styles.btnPlus} data={picture.id} />
              </div>

              <div className={styles.cartFormSalary}>{!discount ? picture.salary : picture.salary + picture.salary * 0.2} ₽</div>
            </div>
          </div>
        )
      })
      }
    </div >
  )
}