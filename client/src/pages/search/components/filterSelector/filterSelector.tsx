import React, { useEffect, useState } from 'react'
import './filterSelector.Module.scss'
import useCategories from 'hooks/useCategories'
import Select from 'components/forms/select/select'
import useGenerations from 'hooks/useGenerations'
import FormInput from 'components/forms/formInput/formInput'
import Button from 'components/ui/button/button'
import { FilterProps } from 'types/filter'

export default function FilterSelector() {
  const categoriesData = useCategories()
  const generationsData = useGenerations()

  const categories = categoriesData.categories?.map(
    (category) => category.fields.categoryName,
  )

  const generations = generationsData.generations.map(
    (generation) => generation.fields.title,
  )

  const [filters, setFilters] = useState<FilterProps>({
    q: null,
    category: null,
    minPrice: null,
    maxPrice: null,
    generation: null,
  })

  const getFiltersFromURL = () => {
    const searchParams = new URLSearchParams(window.location.search)

    Object.keys(filters).forEach((key) => {
      const value = searchParams.get(key)
      setFilters((oldFilters) => {
        return { ...oldFilters, [key]: value }
      })
    })
  }

  const setFiltersURL = () => {
    const searchParams = new URLSearchParams('')
    Object.entries(filters).forEach(([key, value]) => {
      if (value) searchParams.set(key, value)
    })

    window.history.replaceState(
      {},
      document.title,
      `?${searchParams.toString()}`,
    )

    window.location.reload()
  }

  const resetFilters = () => {
    const searchParams = new URLSearchParams('')

    if (filters.q) searchParams.set('q', filters.q as string)

    window.history.replaceState(
      {},
      document.title,
      `?${searchParams.toString()}`,
    )

    window.location.reload()
  }

  useEffect(() => {
    getFiltersFromURL()
  }, [])

  return (
    <div className="filter__selector__container">
      <label className="filter__selector__title">Filters</label>
      <div className="filter__selector__body">
        <Select
          title="Category"
          value={filters.category + ''}
          options={categories as string[]}
          setValue={(category: string) =>
            setFilters((oldFilters) => {
              return { ...oldFilters, category: category }
            })
          }
        />

        <div className="filter__selector__price">
          <FormInput
            title="Min Price"
            type="number"
            value={filters.minPrice as number}
            onChange={(e) =>
              setFilters((oldFilters) => {
                return { ...oldFilters, minPrice: parseInt(e.target.value) }
              })
            }
            placeholder="ex: 10"
          />

          <FormInput
            title="Max Price"
            type="number"
            value={filters.maxPrice as number}
            onChange={(e) =>
              setFilters((oldFilters) => {
                return { ...oldFilters, maxPrice: parseInt(e.target.value) }
              })
            }
            placeholder="ex: 10"
          />
        </div>

        <Select
          title="Generation"
          value={filters.generation + ''}
          options={generations as string[]}
          setValue={(generation: string) =>
            setFilters((oldFilters) => {
              return { ...oldFilters, generation: generation }
            })
          }
        />
      </div>
      <div className="filter__selector__footer">
        <Button onClick={resetFilters} variant="secondary">
          Reset Filters
        </Button>
        <Button onClick={setFiltersURL} variant="primary">
          Set Filters
        </Button>
      </div>
    </div>
  )
}
