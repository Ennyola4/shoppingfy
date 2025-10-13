import { trust } from "../utils"

const Trust = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8 font-serif">
            {trust.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row items-center text-center md:text-left p-4 rounded-lg shadow-sm bg-[#C08081]/10"
                >


                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <item.icon className="text-[#C08081] p-3" size={58} />
                    </div>
                    {/* Right Column - Content */}
                    <div className="flex-1">

                        <h3 className="text-lg font-bold text-[#002366] mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                            {item.description}
                        </p>

                        {/* Star Rating Section */}
                        <div className="flex items-center justify-center md:justify-start mb-3">
                            <div className="flex">
                                {[...Array(5)].map((_, starIndex) => (
                                    <svg
                                        key={starIndex}
                                        className={`w-4 h-4 ${starIndex < (item.rating || 0)
                                            ? "text-yellow-400 fill-current"
                                            : "text-gray-300"
                                            }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            {item.reviewCount && (
                                <span className="text-sm text-gray-600 ml-2">
                                    ({item.reviewCount}+ reviews)
                                </span>
                            )}
                        </div>


                        {item.details && (
                            <div className="text-xs text-gray-500 space-y-1">
                                {item.details.map((detail, detailIndex) => (
                                    <div key={detailIndex} className="flex items-center justify-center md:justify-start">
                                        <span className="w-1 h-1 bg-[#C08081] rounded-full mr-2"></span>
                                        {detail}
                                    </div>
                                ))}
                            </div>
                        )}

                        {item.badge && (
                            <div className="mt-3 flex justify-center md:justify-start">
                                <span className={`${item.bgColor} flex px-3 py-1  text-xs font-medium rounded-full ${item.textColor}`}>
                                    <item.icon className={`${item.textColor}inline-block items-center mr-1`} size={13} />
                                    {item.badge}
                                </span>
                            </div>
                        )}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Trust