import Button from "./Button";
import Lottie from 'react-lottie';
import Error404 from "../assets/404.json";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Error404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-full grid grid-cols-1 place-items-center'>
        <div className="my-4">
          <Lottie
            options={defaultOptions}
            height={200}
            width={300}
          />
        </div>
        <div className="w-fit flex items-center justify-center"><Button item={"Home"} /></div>
      </div>
    </div>
  )
}

export default NotFound