// import imgFacebook from "../../assets/images/img-facebook.png";
// import imgInstagram from "../../assets/images/img-instagram.png";
import imgTwitter from "../../assets/images/img-twitter.png";
const AccountPage = () => {

  const items = Array(3).fill(
    {
      avatarPath: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
      title: "Facebook",
      image: imgTwitter,
      content: "Travel ipsum dolor sit ame #uxui  ipsum dolor sit ame #uxui  ipsum dolor sit ipsum dolor sit ama.",
    }
  )
  return (
    <div className='flex flex-wrap overflow-y-auto h-full '>
      {items && items.map((item, index) => (
        <div key={index} className='bg-white border w-72 m-6 rounded-[16px] '>
          <div className='overflow-hidden p-2'>
            <div className="flex justify-center">
              <img width={200} src={item.image} alt="" />
            </div>
            <h1 className='pb-4 font-serif'>{item.title}</h1>
            <p className='text-[14px] font-[Inter] font-[400] '>{item.content}</p>
            <div className="w-full flex justify-end p-4">
              <button className="border-gray-300 border-[2px] p-1 px-4 rounded-[8px]">ADD</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AccountPage;