import React from 'react'
import styled from 'styled-components'



const Perform = ({ performance,src,alt,elId }) => {

     const progress=()=> {
        let start = 0,end = performance;
        let id = setInterval(() => {
            start++;
            if (start === end) clearInterval(id);
            document.getElementById(`${elId}`).style.background = `conic-gradient(#a0aadf ${start * 3.6}deg, gray ${0}deg)`
        }, 5)
    }
    return (
        <div onMouseOver={progress} >
            <Wrapper id={elId} className={` rounded-full flex justify-center items-center w-[90px] h-[90px] md:h-[100px] md:w-[100px] md:hover:w-[103px] `} performance={performance} >
                <div className=' rounded-full bg-white flex-col flex justify-center items-center w-[70px] h-[70px]  md:h-[70px] md:w-[70px]'>
                    <img className='w-10 md:w-10 ' src={src} alt={alt}  />
                    <p className='text-[10px] text-lg md:font-bold text-blue-600'>{performance}%</p>
                </div>
            </Wrapper>
        </div>
    )

}

export default Perform


const Wrapper = styled.div`
    background:conic-gradient(#a0aadf ${props => props.performance * 3.6}deg, gray 0deg) 
`;