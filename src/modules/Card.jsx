import ProfileImage from "./ProfileImage"
import Name from "./Name"
import Location from "./Location"
import Description from "./Description"
import Links from './Links'


const Card = () => {
  return (
    <>
        <div className="w-80 bg-grey-800 rounded-xl p-8">
            <ProfileImage />
            <Name />
            <Location />
            <Description />
            <Links linkLocation={'Github'} marginTop={'mt-5'} />
            <Links linkLocation={'Frontend Mentor'} marginTop={'mt-3'} />
            <Links linkLocation={'LinkedIn'} marginTop={'mt-3'} />
            <Links linkLocation={'Twitter'} marginTop={'mt-3'} />
            <Links linkLocation={'Instagram'} marginTop={'mt-3'} />
        </div>
    </>
  )
}

export default Card