import { authOptions } from '@/helpers/authOptions'
import { log } from '@/utils/logger'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function DashboardHome() {
    const session = await getServerSession(authOptions)
    log(session)
  return (
    <div>DashboardHome</div>
  )
}
