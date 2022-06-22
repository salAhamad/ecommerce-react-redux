import React, { useState } from 'react'
import SpecialCard from './SpecialCard'

function SpecialCards() {
  
  const specialCardData = [
    {
      id: new Date().getTime(),
      heading: 'New Deals at Best Prices',
      currency: 'USD',
      offerPrice: 80,
      actualPrice: 40,
      discountPercentage: 50,
      productImageUrl: 'https://minimog.thememove.com/supergear/wp-content/uploads/sites/2/2022/02/home-banner-01.jpg',
      category: ['Headphones', 'Electronics'],
      bgColor: '#EDD7C6',
      color: '#252525',
      ctaButtonText: 'Browse Deals'
    },
    {
      id: new Date().getTime(),
      heading: 'Colorful Redmi  Note 6 Pro',
      currency: 'USD',
      offerPrice: 80,
      actualPrice: 40,
      discountPercentage: 50,
      productImageUrl: 'https://minimog.thememove.com/supergear/wp-content/uploads/sites/2/2022/02/home-banner-02.jpg',
      category: ['Headphones', 'Electronics'],
      bgColor: '#99C5E3',
      color: '#FFFFFF',
      ctaButtonText: 'Shop Cellphone'
    },
    {
      id: new Date().getTime(),
      heading: '1000 mAh Power Bank',
      currency: 'USD',
      offerPrice: 80,
      actualPrice: 40,
      discountPercentage: 50,
      productImageUrl: 'https://minimog.thememove.com/supergear/wp-content/uploads/sites/2/2022/02/home-banner-03.jpg',
      category: ['Headphones', 'Electronics'],
      bgColor: '#000000',
      color: '#FFFFFF',
      ctaButtonText: 'Shop Now'
    },
  ]

  const [spcialCard, setSpecialCardData] = useState(specialCardData);

  // useEffect(() => {
  //   setSpecialCardData(specialCardData);
  // }, [])

  return (
    <section className='special-cards-section py-3'>
        <div className="container">
            <div className="row g-4">
              {
                spcialCard.map((card, index) => {
                  return <SpecialCard data={card} key={index} />
                })
              }
            </div>
        </div>
    </section>
  )
}

export default SpecialCards