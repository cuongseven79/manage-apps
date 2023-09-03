import { useEffect, useRef, useState } from "react";
import icFacebook from '../../assets/icons/ic-facebook.svg'
import icInstagram from '../../assets/icons/ic-instagram.svg'
import icTwitter from '../../assets/icons/ic-twitter.svg'
function Message({ message, onMessage }) {
    const inputMessageRef = useRef(null);

    return (
        <textarea
            className='outline-none rounded-[10px] w-full'
            placeholder='Enter description..'
            onChange={() => onMessage(inputMessageRef.current?.value)}
            value={message}
            ref={inputMessageRef}
            cols="30"
            rows="5"
        ></textarea>
    );
}

function CreatePostDialog({ isOpen, setIsOpen }) {
    const [isAddFacebook, setIsAddFacebook] = useState(false)
    const [isAddInstagram, setIsAddInstagram] = useState(false)
    const [isAddTwitter, setIsAddTwitter] = useState(false)

    const [messageOrigin, setMessageOrigin] = useState('')
    const [messageFacebook, setMessageFacebook] = useState('')
    const [messageInstagram, setMessageInstagram] = useState('')
    const [messageTwitter, setMessageTwitter] = useState('')

    const [appInfor, setAppInfor] = useState({ appName: "Original", appIndex: null })

    const [time, setTime] = useState('');
    const [date, setDate] = useState('');


    const items = [
        { name: 'Facebook', icon: icFacebook, checked: isAddFacebook },
        { name: 'Instagram', icon: icInstagram, checked: isAddInstagram },
        { name: 'Twitter', icon: icTwitter, checked: isAddTwitter },
    ];

    function toggleItem(appName, appIndex) {
        let item = items.find((item, index) => index === appIndex);
        if (appIndex !== null && appInfor.appIndex === null) {
            if (item?.name === "Facebook" && !messageFacebook) {
                setMessageFacebook(messageOrigin)
            } else if (item?.name === "Instagram" && !messageInstagram) {
                setMessageInstagram(messageOrigin);
            } else if (item?.name === "Twitter" && !messageTwitter) {
                setMessageTwitter(messageOrigin);
            }
        }
        setAppInfor({ appName, appIndex });
    };

    function handleSubmit(e) {
        e.preventDefault();

        console.log(time)
        console.log(date)
        console.log('messageOrigin', messageOrigin)
        console.log('messageFacebook', messageFacebook)
        console.log('messageInstagram', messageInstagram)
        console.log('messageTwitter', messageTwitter)
        setIsOpen(false)
    }
    return (
        <div open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="fixed inset-0 bg-gray-500/50 backdrop-blur-sm" />
            <div className="px-3 fixed left-[50%] top-[50%] z-50 flex w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-[20px] rounded-lg bg-white p-0 shadow-lg">
                <div className=" flex w-full flex-row items-center justify-between border-b p-[16px] text-xl">
                    <span className="font-[500]">Create a post</span>
                    <button onClick={() => setIsOpen(false)}>
                        <p className="p-1 hover:rounded-md hover:bg-[#8278ED]/10">X</p>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="w-full mb-4 ">
                    <div className='w-full h-full flex gap-3'>
                        <div
                            className={`${appInfor.appIndex === null ? 'bg-blue-100' : ''} flex items-center  hover:bg-blue-200 rounded-[10px] p-2 gap-2`}
                            onClick={() => toggleItem("Original", null)}>
                            <button type="button">Original</button>
                        </div>
                        {items.map((item, index) => (
                            <div key={index}>
                                <div
                                    className={`${item.checked ? ' ' : 'hidden'} ${appInfor.appIndex === index ? 'bg-blue-100' : ''} flex items-center hover:bg-blue-200 rounded-[10px] p-2 gap-2`}
                                    onClick={() => toggleItem(item.name, index)}>
                                    <img src={item.icon} alt="" width={20} />
                                    <button type="button">{item.name}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-2 py-3 items-center'>
                        {appInfor.appName === "Original" && <Message message={messageOrigin} onMessage={setMessageOrigin} />}
                        {appInfor.appName === "Facebook" && <Message message={messageFacebook} onMessage={setMessageFacebook} />}
                        {appInfor.appName === "Instagram" && <Message message={messageInstagram} onMessage={setMessageInstagram} />}
                        {appInfor.appName === "Twitter" && <Message message={messageTwitter} onMessage={setMessageTwitter} />}
                    </div>
                    <div className="mb-4">
                        <div className="mt-2 flex gap-7">
                            <label className="inline-flex items-center gap-1">
                                <img src={icFacebook} alt="" width={20} />
                                <span className=" cursor-pointer">Facebook</span>
                                <input type="checkbox" className="text-indigo-600 " onChange={() => setIsAddFacebook(!isAddFacebook)} />
                            </label>
                            <label className="inline-flex items-center">
                                <img src={icInstagram} alt="" width={20} />
                                <span className=" cursor-pointer">Instagram</span>
                                <input type="checkbox" className="text-indigo-600" onChange={() => setIsAddInstagram(!isAddInstagram)} />
                            </label>
                            <label className="inline-flex items-center">
                                <img src={icTwitter} alt="" width={20} />
                                <span className=" cursor-pointer">Twiter</span>
                                <input type="checkbox" className="text-indigo-600" onChange={() => setIsAddTwitter(!isAddTwitter)} />
                            </label>
                        </div>
                    </div>
                    <div className=" flex items-center gap-2 pb-2">
                        <label className="basis-1/3 text-[16px]">Create a schedule:</label>
                        <input
                            type="date"
                            className="basis-1/4 border border-gray-300 p-2 rounded-md text-[14px]"
                            onChange={(e) => { setTime(e.target.value) }}
                        />
                        <input
                            type="time"
                            className="basis-1/4 border border-gray-300 p-2 rounded-md text-[14px]"
                            onChange={(e) => { setDate(e.target.value) }}
                        />
                    </div>
                    <div className="p-x-[10px] flex w-full items-center border-t p-2 text-xl"></div>
                    <button
                        type="submit"
                        className="hover:bg-blue-700 bg-[#2374E1] w-full rounded-[10px] py-3 text-white"
                    >Create</button>
                </form>

            </div>
        </div>
    );
}

export default CreatePostDialog;