import React, { useEffect, useState } from 'react';
import * as Api from '../../api'

const VideoDetailComment = ({id}) => {
  const [comments, setComments] = useState([])
  const getComments = async () => {
    const data = await Api.get(`${id}/comments`)
    return data
  }

  useEffect(()=>{
      getComments().then(res => console.log(res))
  }, [])
}

export  default VideoDetailComment