import React from 'react'
import './categories.Module.scss'
import useCategories from 'hooks/useCategories'

export default function Categories() {
  const { categories } = useCategories()

  return (
    <div className="categories__container">
      <label className="categories__container__title">Shop By Category</label>
      <div className="categories__container__body">
        {categories.map((category) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const image: any = category.fields?.image
          return (
            <div
              className="categories__container__body__item"
              key={Math.random() * 1000}
            >
              <img
                className="category__item__image"
                src={`https:${image.fields.file.url}`}
              />
              <div className="category__item__body">
                <label className="category__item__title">
                  {category.fields.categoryName as string}
                </label>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
