import React from 'react'
import st from './MyBtnSmall.module.css'

const MyBtnSmall = ({...props}) => {
  return (
    <svg
    className={st.btnIcon}
    xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      {/* <circle className={st.circle} cx="14" cy="14" r="13" stroke="#FD9286" stroke-width="2"/> */}
      <line className={st.lines} x1="14" y1="7" x2="14" y2="21.56" stroke="#FD9286" stroke-width="2"/>
      <line className={st.lines} x1="21.28" y1="14.44" x2="6.72003" y2="14.44" stroke="#FD9286" stroke-width="2"/>
    </svg>
  )
}

export default MyBtnSmall
