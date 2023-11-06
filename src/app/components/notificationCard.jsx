const NotificationCard = ({ icon, title, isNew, description, timestamp }) => {
    return (
        <div className="bg-white cursor-pointer p-4 mb-4 rounded-lg flex hover:bg-[#3c37951a] items-start ">
            <div className="mr-4">{icon}</div>
            <div className="flex-1">
                <h2 className="text-lg font-bold ">{title} {isNew && <span className="text-red-500 text-xs">New</span>}</h2>
                <p className="text-black font-bold  text-xs ">{description}</p>
                <span className="text-gray-500 text-xs font-bold">{timestamp}</span>
            </div>
        </div>
    );
}

export default NotificationCard;