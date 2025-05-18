

const Links = ({ linkLocation, marginTop }) => {
  return (
    <>
        <a href="#" className={`${marginTop} w-full bg-grey-700 text-white font-semibold flex justify-center items-center rounded-md py-2.5 hover:text-grey-900 hover:bg-green`}>{linkLocation}</a>
    </>
  )
}

export default Links