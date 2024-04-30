import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './style.scss'
import DetailsBanner from './detailsBanner/DetailsBanner'
import VideosSection from './videosSection/VideosSection'
import Cast from './cast/Cast'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading}></Cast>
      <VideosSection data={data} loading={loading}></VideosSection>
      <Similar mediaType={mediaType} id={id}></Similar>
      <Recommendation mediaType={mediaType} id={id}></Recommendation>
    </div>
  )
}

export default Details