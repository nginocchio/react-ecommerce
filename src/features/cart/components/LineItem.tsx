import { CloseIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Td,
  Tr,
} from '@chakra-ui/react'
import { Product } from 'src/features/product'
import { formatPrice } from 'src/features/product/stores/productSlice'
import { useStore } from 'src/store/useStore'

export default function LineItem({
  item,
  quantities,
}: {
  item: Product
  quantities: Record<string, number>
}) {
  const addItem = useStore((state) => state.addItem)
  const removeItem = useStore((state) => state.removeItem)
  const deleteItem = useStore((state) => state.deleteItem)

  const handleRemoveItem = (item: Product) => {
    if (quantities[item.id] > 1) {
      removeItem(item)
    }
  }

  const handleAddItem = (item: Product) => {
    if (quantities[item.id] < 5) {
      addItem(item)
    }
  }

  return (
    <Tr key={item.id}>
      <Td>
        <IconButton
          aria-label="remove item"
          icon={<CloseIcon />}
          onClick={() => deleteItem(item)}
        />
      </Td>
      <Td>
        <Image maxW="100px" src={item.image} alt={'cart item'} />
      </Td>
      <Td>{item.name}</Td>
      <Td isNumeric>{formatPrice(item.price)}</Td>
      <Td isNumeric>
        <NumberInput
          defaultValue={quantities[item.id]}
          min={1}
          max={5}
          maxW={'100px'}
          float={'right'}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper onClick={() => handleAddItem(item)} />
            <NumberDecrementStepper onClick={() => handleRemoveItem(item)} />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td isNumeric>{formatPrice(item.price * quantities[item.id])}</Td>
    </Tr>
  )
}
