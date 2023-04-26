import React from 'react';
import HotItemCard from '../components/HotItemCard.jsx';
import "../styles/HotAccessories.css"


const HotAccessories = ({lifeStyle  , lifeStyleCover, music , musicCover , smartDevice  , smartDeviceCover , home , homeCover ,mobile, mobileCover }) => {
  return (
    <div className='HotAccessories'>
        <div>
            <img src={musicCover || smartDeviceCover || homeCover   || mobileCover || lifeStyleCover  } alt="" />
        </div>

        <div>
            {
                music && music.map((item, index)=>(
                    < HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
                ))
            }
 
            {
                lifeStyle && lifeStyle.map((item, index)=>(
                    < HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
                ))
            }



            {
                mobile && mobile.map((item, index)=>(
                    < HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
                ))
            }

            {
                home && home.map((item, index)=>(
                    < HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
                ))
            }



            {
                smartDevice &&  smartDevice.map((item, index)=>(
                    < HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
                ))
            }



            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />

        </div>
      
    </div>
  )
}

export default HotAccessories
