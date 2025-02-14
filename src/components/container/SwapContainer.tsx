import React from 'react';
import SwapContainerHeader from './SwapContainerComponents/Header.tsx';
import SwapBox from './SwapContainerComponents/SwapBox.tsx';
import OutPut from './OutPut.tsx';
import PopularSwaps from './PopularSwaps.tsx';
const SwapContainer = () => {
    return ( 
        <div className='flex-[0.7]  rounded-lg bg-gray-900   flex flex-col  gap-2' >
            <SwapContainerHeader/>
            <SwapBox/>
            <OutPut/>
            <PopularSwaps/>
        </div>
     );
}
 
export default SwapContainer;   