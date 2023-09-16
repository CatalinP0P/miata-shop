import React from 'react'
import './generation.Module.scss'
import useGenerations from 'hooks/useGenerations'

export default function Generation() {
  const { generations } = useGenerations()

  return (
    <div className="generation__container">
      <label className="generation__container__title">Shop By Generation</label>
      <div className="generation__container__body">
        {generations?.map((gen) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const image: any = gen.fields.image
          return (
            <div key={Math.random() * 10000} className="generation__item">
              <img
                className="generation__item__image"
                src={image.fields.file.url as string}
              />
              <label className="generation__item__title">
                {gen.fields.title as string}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
