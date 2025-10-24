import { authOptions } from '@/helpers/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function DashboardHome() {
    const session = await getServerSession(authOptions)
    console.log(session)
  return (
    <div>DashboardHome</div>
  )
}
