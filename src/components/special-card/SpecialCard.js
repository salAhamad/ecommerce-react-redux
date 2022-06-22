import React from 'react'
import { Link } from 'react-router-dom'

function SpecialCard({data}) {
  return (
    <div className="col-12 col-lg-6 col-xl-4">
        <div className="cord-container" style={{
            backgroundImage: `url(${data.productImageUrl})`,
            backgroundColor: data.bgColor,
            color: data.color,
          }}>
          <img src={data.productImageUrl} alt="" />
          <div className="content d-flex flex-column justify-content-between">
            <div>
              <h4 className='fw-bold'>{data.heading}</h4>
              <h6>From ${data.actualPrice}.00</h6>
            </div>
            <Link to="#" style={{'--afterColor': data.color}}>{data.ctaButtonText}</Link>
          </div>
        </div>
    </div>
  )
}

export default SpecialCard