import {useState} from 'react'

const AddCategory = ({setCategorias}) => {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length > 2) {
      setCategorias(cats => [inputValue, ...cats])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  )
}

export default AddCategory