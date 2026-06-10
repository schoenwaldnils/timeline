'use client'

import { useAllFormFields } from '@payloadcms/ui'
import { useSearchParams } from 'next/navigation'
import { FieldClientComponent } from 'payload'
import { useEffect } from 'react'

const Prefill: FieldClientComponent = () => {
  const searchParams = useSearchParams()

  const [fields, dispatchFields] = useAllFormFields()

  useEffect(() => {
    searchParams.forEach((value, key) => {
      const field = fields[key]

      if (field && !field.value) {
        // Field exists and is empty - prefill it
        console.info(`Prefilling field "${key}" with value:`, value)

        // Check if field is a relationship field by checking for relationTo property
        const isRelationship = 'relationTo' in field

        // Relationship fields need { id: value } format; other fields convert to
        // number if numeric.
        const finalValue: string | number | { id: number | string } = isRelationship
          ? { id: !isNaN(Number(value)) ? Number(value) : value }
          : !isNaN(Number(value))
            ? Number(value)
            : value

        console.info('Dispatching value:', finalValue)

        dispatchFields({
          type: 'UPDATE',
          path: key,
          value: finalValue,
        })
      }
    })
  }, [searchParams, fields, dispatchFields])

  // This is a UI field that doesn't render anything visible
  return null
}

export default Prefill
