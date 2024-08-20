import { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import { View } from 'tamagui'

const pageNum = 5

type StepControlProps = {
  initialIndex?: number
  visitedIndices?: number[]
}

export type stepControlRef = {
  nextStep: () => void
  prevStep: () => void
}

export const StepControl = forwardRef<stepControlRef, StepControlProps>(
  ({ initialIndex = 0, visitedIndices = [] }, ref) => {
    const [activeIndex, setActiveIndex] = useState(initialIndex)
    const [localVisitedIndices, setLocalVisitedIndices] = useState([
      ...new Set([...visitedIndices, initialIndex]),
    ])

    const handlePrevClick = () => {
      // setVisitedIndices((prevVisited) => {
      //   // Create a copy of the visited indices without the current active index
      //   const updatedVisited = prevVisited.filter((index) => index !== activeIndex)
      //   return updatedVisited
      // })
      setActiveIndex((prevIndex) => (prevIndex - 1 + pageNum) % pageNum)
    }

    const handleNextClick = () => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % pageNum
        setLocalVisitedIndices((prevVisited) => [...new Set([...prevVisited, newIndex])])
        return newIndex
      })
    }

    useImperativeHandle(ref, () => ({
      nextStep: handleNextClick,
      prevStep: handlePrevClick,
    }))

    useEffect(() => {
      // Set initial index and visited indices
      setLocalVisitedIndices([...new Set([...visitedIndices, initialIndex])])
    }, [initialIndex, visitedIndices])

    return (
      <View flexDirection="row" gap="$3.5">
        {Array.from({ length: pageNum }).map((_, index) => (
          <View
            key={index}
            width="$5"
            height="$0.75"
            borderRadius="$5"
            backgroundColor={localVisitedIndices.includes(index) ? '$orange10' : '$color9'}
            animation="200ms"
          />
        ))}
      </View>
    )
  }
)
