import React, { FC, useState } from 'react'
import classNames from 'classnames'

export interface TableProps{
  className?: string;

}


export const Table:FC<TableProps>=(props)=>{
  const { className } = props

  const classes = classNames('viking-menu', className, {
    // 'menu-vertical': mode === 'vertical',
    // 'menu-horizontal': mode!=='vertical',
})
  return(
    <table className={classes}>

    </table>
  )
}