import Lottie from 'react-lottie';
import Loading from "../assets/Loading.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
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
      </div>
    </div>
  )
}

export default Loader