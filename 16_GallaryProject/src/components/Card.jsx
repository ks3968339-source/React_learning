import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank'> 
          {/* url opens original photo link. but download url brings it to us */}
          <div  className="h-57 w-60 overflow-hidden rounded-xl bg-white ">
        <img className=" h-full w-full rounded-xl object-cover" src={props.elem.download_url} alt="photo" />
      </div>
      <h2 className="font-bold text-xl mt-1"> {props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card
