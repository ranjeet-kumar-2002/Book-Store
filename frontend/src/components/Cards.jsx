import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-7 my-5 p-3'>
    <div className="card w-80 bg-base-80 h-70 w-80 shadow-xl hover:scale-105 duration-200 dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">Free</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between ">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer p-4 hover:bg-green-500 hover:text-white duration-200">Buy NOW</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
