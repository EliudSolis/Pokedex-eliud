import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StatPoke = ({infosStat, endpnt}) => {

   
  

  return (
    <ul className='card__stats__info'>
        <h4 className='card__stat-title'>{infosStat.stat.name}</h4>
        <p className='card__stat-value'>{infosStat.base_stat}</p>
    </ul>
  )
}

export default StatPoke