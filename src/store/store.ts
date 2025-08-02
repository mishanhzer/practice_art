import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware"; // для связи с localStorage

import axios from "axios";

import { TypesPictureCart, TypesStore } from "./types";

import { _transform } from '../utils/useTransform'

export const useStore = create<TypesStore>()(
  devtools(
 persist(
  immer(
    (set) => ({
      works: [],
      animals: [],
      flowers: [],
      stillLife: [],
      peopleAndAnimals: [],
      loading: 'waiting',
      offsetAllWorks: 0,
      offsetAnimals: 0,
      offsetFlowers: 0,
      offsetStillLife: 0,
      offsetPeopleAndAnimals: 0,
      pageAllWorks: 0,
      pageAnimals: 1,
      pageFlowers: 1,
      pageStillLife: 1,
      pagePeopleAndAnimals: 1,

      pictureCart: {
        amount: 0,
        salary: 0,
      },

      picturesCart: [],

      cart: [],

      addInCart: false,

      discount: false,

      newData: [],

      isAddedToCart: {},

      testCart: [],

      setCartActiveItems: (cart) => (
        set({testCart: cart})
      ),

      addProperty: (property: number, value: boolean) =>
        set((state) => ({ isAddedToCart: { ...state.isAddedToCart, [property]: value } })),

      setNewData: (data) => {
        set({newData: data})
      },

      setDiscount: (bool: boolean) => {
        set({discount: bool})
      },

      setCartTest: (cart) => {
        set({cart: cart})
      },

      setAddInCart: (active: boolean) => (
        set({addInCart: active})
      ),

      getPictureCart: (picture) => (
        set({pictureCart: picture})
      ),
      
      getPicturesCart: () => { // был баг, что picturesCart не определялся как массив и выдавал ошибку, что это не итерируемый обьект
        set((state => {
          if (Array.isArray(state.picturesCart)) {
            return { picturesCart: [...state.picturesCart, state.pictureCart].reverse() }
          } else {
            return { picturesCart: [state.pictureCart] }
          }
        }))
      },

      deleteDuplicatePicture: () => {
        set((state => ({picturesCart: state.picturesCart.filter((item: TypesPictureCart, i: number, self: TypesPictureCart[]) => i === self.findIndex((t) => t.id === item.id))})))
      },

      getDeleteTest: (dataId) => (
        set((state => ({
          picturesCart: state.picturesCart.filter(item => item.id !== dataId)
        })))
      ),

      getDeleteItemCart: (dataId) => (
        set((state => ({
          cart: state.cart.filter(item => item.id !== dataId)
        })))
      ),

      getData: async (category, url, offsetName, offset, pageName, page) => {
        set({loading: 'loading'})
        try {
          const res = await axios.get(`${url}&offset=${offset}`)
          set(({[category]: res.data._embedded.items.map(_transform), loading: 'confirmed', [offsetName]: offset, [pageName]: page}))
        } catch(e) {
          set({loading: 'error'})
          throw(e)
        }
        },
    }),
  ), {
    name: 'main-storage',
    storage: createJSONStorage(() => localStorage)
  }
 )
  )
);
