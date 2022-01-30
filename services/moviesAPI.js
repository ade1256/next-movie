import { axiosInstance } from "./axiosInstance"

export const GET_MOVIES = () => {
  const url = '/movies'
  const response = axiosInstance.get(url)
  return response
}

export const GET_MOVIE = (id) => {
  const url = `/movies/${id}`
  const response = axiosInstance.get(url)
  return response
}