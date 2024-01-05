import React from 'react'

export default function article(props) {
  return (
    <>
    <div>this is {props.pathname}</div>
    <div>title: {props.title}</div>
    <div contentEditable='true' dangerouslySetInnerHTML={{ __html: props.con }}></div>
    </>
  )
}
