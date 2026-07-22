import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loading from '../../common/Loading';

const Public = () => {
  const { user, isloading } = useSelector((store) => store.auth);
  if (isloading) return <Loading />

  if (user) return <Navigate to={'/home'} />
  return <Outlet />
}

export default Public
