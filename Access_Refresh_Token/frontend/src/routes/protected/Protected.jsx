import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loading from '../../common/Loading';

const Protected = () => {
  const { user, isloading } = useSelector((store) => store.auth);
  if (isloading) return <Loading />
  if (!user) return <Navigate to={'/'} /> 

  return <Outlet />
}

export default Protected
