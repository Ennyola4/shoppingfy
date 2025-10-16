import { categorySummary } from '../utils'

const CategorySummary = () => {
  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 p-8 text-center place-items-center">
      {categorySummary.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center p-6"
        >
          <div className="mb-4">
            <item.icon
              size={70}
              className={`${item.bgColor} ${item.textColor} p-4 rounded-full shadow-sm font-bold `}
            />
          </div>
          <h3 className="text-[#002366] font-bold font-serif text-xl mb-2">
            {item.title}
          </h3>
          <p className="text-gray-500 font-light font-serif max-w-xs">
            {item.description}
          </p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default CategorySummary
