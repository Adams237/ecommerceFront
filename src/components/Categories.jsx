import React from 'react'
import styled from 'styled-components'

import  { categories } from '../data'
import CategoryItems from './CategoryItems'
import {mobile} from '../responsive'

const Categories = () => {
  return (
    <Conatinre>
        {
            categories.map((item)=>(
                <CategoryItems key={item.id} item = {item}/>
            ))
        }
    </Conatinre>
  )
}

export default Categories

const Conatinre = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding: "0px", flexDirection:'column'})}
`