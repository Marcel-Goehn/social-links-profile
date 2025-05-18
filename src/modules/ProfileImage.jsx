import avatar from '../assets/images/avatar-jessica.jpeg';

const ProfileImage = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <img className="rounded-full h-24 w-24" src={avatar} alt="Profile Picture" />
            </div>
        </>
    )
}

export default ProfileImage