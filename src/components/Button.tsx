import { useNavigate } from 'react-router-dom';

type BtnProperty = {
    item: string
    onClickFunction?: any
}

const Button = ({item, onClickFunction}:BtnProperty) => {
  const navigate = useNavigate()
  const onClickHandle = () =>{
    if(item === 'Home'){
      navigate("/")
    }
    if(onClickFunction){
      window.scrollTo(0, 0);
      onClickFunction()
    }
  }
  return (
    <button className='w-full rounded-sm p-2 text-lg sm:text-xl font-bold bg-red text-white break-all' onClick={onClickHandle}>{item}</button>
  )
}

export default Button